const express = require("express");
const router = express.Router();

const model = require("../../models/news");
const helpers = require("../../helpers");
const categories = require('../../models/category');

router.get("", (request, response) => {
	model.all((err, data) => {
		if (err) response.json(helpers.api_error(err));
		else response.json(helpers.api_response(data));
	});
});

router.get('categories', (request, response) => {
  categories.all((err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response(data));
  });
});

module.exports = router;
