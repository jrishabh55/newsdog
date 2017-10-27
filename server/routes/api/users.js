const express = require("express");
const router = express.Router();
const helpers = require("../../helpers");
const User = require("../../models/users");

router.get("/", (request, response) => response.send("admins get"));

router.get("/profile", (request, response) => {
	const UserNews = require("../../models/user_news");

	UserNews.count({user_id: request.user._id}, (err, newsCount) => {
		const user = {
			name: request.user.name,
			username: request.user.username,
			email: request.user.email,
			credits: request.user.credits,
			reference: request.user.reference,
			registered: request.created_at,
			info: helpers.decrypt(request.user.email, request.user.ref),
			news_count: newsCount
		};
		response.send(helpers.api_response({
			user: user
		}));
	});
	// console.log(newsCount);

});

router.post("/withdraw/:type", (request, response) => {
	const params = request.body;
	if (!helpers.exists(params.amount)) {
		return response.status(422).json(helpers.api_error("Invalid Parameters", 422)).end();
	}

	try {
		const amount = parseInt(params.amount);
		if (isNaN(amount) || amount < 100 || amount > request.user.credits) {
			let error = "Invalid Parameters";
			if (amount < 100) {
				error = "The amount should be more then 100";
			}
			if (amount > request.user.credits) {
				error = "The amount is more then credits.";
			}
			return response.status(422).json(helpers.api_error(error, 422)).end();
		}
	} catch(e) {
		return response.status(422).json(helpers.api_error("Invalid Parameters", 422)).end();
	}

	const req = require("../../models/withdrawl_request");
	let credits;
	if (request.params.type === "recharge") {
		req.create({
			type: "recharge",
			user_id: request.user._id,
			amount: params.amount,
			data: JSON.stringify({
				number: params.number,
				operator: params.operator
			})
		}).then(() => {

			User.byId(request.user._id, (err, us) => {
				credits = us.credits -= params.amount;
				us.save();
			});
			response.json(helpers.api_response({
				data: {
					"credits": credits
				}
			}));
		})
			.catch(err => {
				console.log(err);
				return response.json(helpers.api_error("Something went wrong."));
			});
	} else if (request.params.type === "bank") {
		req.create({
			type: "bank",
			user_id: request.user._id,
			amount: params.amount
		}).then(() => {
			User.byId(request.user._id, (err, us) => {
				credits = us.credits -= params.amount;
				us.save();
			});
			return response.json(helpers.api_response({
				data: {
					credits: credits
				}
			}));
		}).catch(err => {
			console.log(err);
			return response.json(helpers.api_error("Something went wrong."));
		});
	} else {
		return response.status(404).end("Not Found");
	}
});

router.post("/info", (request, response) => {
	const params = request.body;

	if (!helpers.exists(params.data) && !helpers.exists(params.name) && !helpers.exists(params.email) && !helpers.exists(params.password)) {
		return response.status(422).json(helpers.api_error("Invalid Parameters", 422)).end();
	}

	User.findOne({
		_id: request.user._id
	}, (err, data) => {
		if (err) {
			console.log(err);
			response.json(helpers.api_error("Something Went Wrong. Please try again."));
		} else if (data) {
			if (helpers.exists(params.data)) {
				data.ref = helpers.encrypt(data.email, params.data);
			}
			if (helpers.exists(params.name)) {
				data.name = params.name;
			}
			if (helpers.exists(params.email)) {
				data.email = params.email;
			}
			if (helpers.exists(params.password)) {
				data.password = params.password;
			}
			data.save()
				.then(() => {
					response.json(helpers.api_response("Info added"));
				})
				.catch(e => {
					console.log(e);
					response.json(helpers.api_error("Something Went Wrong. Please try again."));
				});
		}
	});
});

router.get("/logs", (request, response) => {
	User.byId(request.user._id, (err, user) => {
		user.logs((err, logs) => {
			return response.json(helpers.api_response({logs: logs}));
		});
	});
});

router.use("/news", require("./news"));
module.exports = router;
