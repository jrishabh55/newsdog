const express = require("express");
const passport = require("passport");
const path = require("path");

const router = express.Router();
const jwt = require("jsonwebtoken");
const helpers = require("../helpers");
const Admin = require("../models/admins");
const User = require("../models/users");
const config = require("../config/config");

//Admin login
router.post("/admin/login", (request, response) => {
	let params = request.body;

	if (!helpers.exists(params.username) || !helpers.exists(params.password)) {
		console.log("Invalid Parameters");
		return response.status(401).json(helpers.api_error("Invalid parameters"));
	}

	Admin.byUsername(params.username, (err, user) => {
		if (err) {
			console.log (err);
			return response.json(helpers.api_error(err, 200));
		} else if (!user) {
			return response.json(helpers.api_error("No User", 401));
		} else {
			user.comparePass(params.password, (err, isMatch) => {
				if (isMatch) {
					const token = jwt.sign(user, config.secret, {expiresIn: 3600});
					const u = {
						name: user.name,
						username: user.username,
						email: user.email,
						access_level: user.access_level,
						created_at: user.created_at
					};

					return response.json(helpers.api_response({token: `Bearer ${token}`, user: u}));
				} else {
					return response.json(helpers.api_error("Incorrect Password", 401));
				}
			});
		}
	});
});

router.use("/admin", passport.authenticate("jwt", {session: false}), require("./api/admin"));

//Users Login
router.post("/login", (request, response) => {
	const params = request.body;
	if ((!helpers.exists(params.username) && !helpers.exists(params.email)) || !helpers.exists(params.password)) {
		return response.json(helpers.api_error("Invalid Parameters")).end();
	}

	const findBy = (err, user) => {
		if (err) {
			console.log(err);
			return response.json(helpers.api_error("Something Went Wrong.")).end();
		}
		if (!user) {
			return response.json(helpers.api_error("No User find")).end();
		}

		if (!user.isActive()) {
			return response.json(helpers.api_error("User is not active")).end();
		}

		user.comparePass(params.password, (err, isMatch) => {
			if (err) {
				console.error(err);
				return response.json(helpers.api_error("Something bad happened")).end();
			}
			if (isMatch) {

				const u = {
					name: user.name,
					username: user.username,
					email: user.email,
					token: user.token,
					created_at: user.created_at,
					credits: user.credits
				};

				return response.json(helpers.api_response({user: u})).end();
			} else {
				return response.json(helpers.api_error("Invalid Password")).end();
			}
		});

	};

	if (params.email) {
		User.byEmail(params.email, findBy);
	} else {
		User.byUsername(params.username, findBy);
	}

});

//Users Route
router.post("/register", (request, response) => {
	let params = request.body;

	let errors = [];

	if (!helpers.exists(params.name)) {
		errors.push("name");
	}
	if (!helpers.exists(params.username)) {
		errors.push("username");
	}
	if (!helpers.exists(params.email)) {
		errors.push("email");
	}
	if (!helpers.exists(params.password)) {
		errors.push("password");
	}

	let e = [];
	if (errors.length > 0) {
		errors.forEach((par) => {
			e.push(`Parameter ${par} is required.`);
		});
	}

	if (e.length > 0) {
		return response.json(helpers.api_error(e));
	}

	params.ip = request.ip;
	params.credits = params.reference ? 50 : 0;
	
	User.byUsername(params.reference, (err, u) => {
		// TODO Implement reference interface
		if (err) {
			console.log(err);
			return response.json(helpers.api_error(err.message));
		}

		if (helpers.exists(params.reference) && !u) {
			return response.json(helpers.api_error("Reference not found."));
		}

		if (!u) {
			params.reference = null;
		} else {
			params.reference = u._id;
		}


		helpers.getSetting("credits", (err, st) => {
			if (err) {
				console.log(err);
				return response.json(helpers.api_error(err.message));
			}

			let credits;
			if (params.reference) {
				if (!st) {
					credits = 100;
				} else {
					credits  = st.value;
				}
				u.addCredits(credits);
			} else {
				credits = 0;
			}
			params.credits = credits;
			User.add(params, (err, user) => {
				if (err) {
					console.log(err);
					return response.json(helpers.api_error(err.message));
				} else {
					let us = {
						name: user.name,
						username: user.username,
						email: user.email,
						token: user.token,
						activated: user.activated,
						credits: user.credits,
						reference: u.username
					};
					return response.json(helpers.api_response(us));
				}
			});
		});

	});


});

router.get("/news/:id/view", (request, response) => {
	response.sendFile(path.resolve(__dirname, "..", "news.html"));
});

router.post("/news/:id/view", (request, response) => {
	const params = request.params;
	if (!helpers.exists(params.id)) {
		return response.status(422).json(helpers.api_error("Invalid Parameters."), 422).end();
	}

	const News = require("../models/news");

	News.byId(params.id, (err, news) => {
		if (err) {
			return response.status(422).json(helpers.api_error("Invalid Parameters."), 422).end();
		}
		if(news) {
			return response.json(helpers.api_response({ news: news })).end();
		}
		else
			return response.json(helpers.api_error("News not found")).end();
	});

});


router.use("/users", passport.authenticate("token", {session: false}), require("./api/users"));

module.exports = router;
