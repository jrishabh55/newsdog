const express = require("express");
const router = express.Router();
const model = require("../../models/admins");
const helpers = require("../../helpers");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");

router.get("", (request, response) => {
	response.send("Admins");
});

router.post("/register", passport.authenticate("jwt", {session: false}), (request, response) => {
	let params = request.body;

	if (
		!helpers.exists(params.username) &&
				!helpers.exists(params.password) &&
				!helpers.exists(params.name) &&
				!helpers.exists(params.email)
	) {
		response.send(helpers.api_error("Invalid parameters"));
		response.end();
		return;
	}

	let admin = new model({
		name: params.name,
		username: params.username,
		password: params.password,
		email: params.email,
		activated: true,
		"access_level.admin": true
	});

	if (admin.save()) {
		response.json(helpers.api_response(admin));
	} else {
		response.json(helpers.api_error("Invalid Error", 200));
	}

});


router.post("/login", (request, response) => {
	let params = request.body;

	if (!helpers.exists(params.username) && !helpers.exists(params.password)) {
		response.status(401).json(helpers.api_error("Invalid parameters"));
		return;
	}
	model.byUsername(params.username, (err, user) => {
		if (err) {
			response.status(401).json(helpers.api_error(err, 200));
		} else if (!user) {
			response.status(401).json(helpers.api_error("No User"));
		} else {
			user.comparePass(params.password,  (err, isMatch) => {

				if (err)
					throw err;
				if (isMatch) {
					const token = jwt.sign(user, config.secret, {expiresIn: 3600});
					const u = {
						name: user.name,
						username: user.username,
						email: user.email,
						access_level: user.access_level,
						created_at: user.created_at,
					};

					response.json(helpers.api_response({token: `JWT ${token}`, user: u}));
				} else {
					response.json(helpers.api_error("Incorrect Password"));
				}
			});
		}
	});
});

router.get("/profile", passport.authenticate("jwt", {session: false}), (request, response) => {
	response.json(helpers.api_response(request.user));
});

module.exports = router;
