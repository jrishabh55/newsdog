const express = require("express");
const router = express.Router();
const passport = require("passport");

const model = require("../../models/users");
const News = require("../../models/news");
const helpers = require("../../helpers");

router.get("/", (request, response) => response.send("users get"));


router.post("/register", (request, response) => {
	let params = request.body;
	params.ip = request.ip;

	model.add(params, (err, user) => {
		if (err) {
			response.json(helpers.api_error(err.message));
		} else {
			response.json(helpers.api_response(user));
		}
	});
});

router.get("/profile", passport.authenticate("token", {session: false}), (request, response) => {
	const data = {};
	data.user = {
		name: request.user.name,
		username: request.user.username,
		email: request.user.email,
		credits: request.user.credits,
		reference: request.user.reference,
		registered: request.created_at,
	};
	response.send(helpers.api_response(data));
});

router.get("/news/read", passport.authenticate("token", {session: false}), (request, response) => {
	News.byUserId(1, (err, data) => {
		if (err) response.json(helpers.api_error("An error occurred."));
		else response.json(helpers.api_response(data));
	});
	response.end();
});

router.post("/news/read", passport.authenticate("token", {session: false}), (request, response) => {

	let params = request.body;
	if (!helpers.exists(params.news_id)) {
		response.json(helpers.api_error("Invalid Parameters."));
		return;
	}

	let UserNews = require("../../models/user_news");

	UserNews.create({user_id: request.user.id, news_id: params.id}, (err, data) => {
		if (err) response.json(helpers.api_error("An Error occurred."));
		else response.json(helpers.api_response("Read Successful"));
	});
});

module.exports = router;
