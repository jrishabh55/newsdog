const express = require("express");
const router = express.Router();

const model = require("../../models/news");
const helpers = require("../../helpers");
const Category = require('../../models/category');


router.get("", (request, response) => {
  model.all((err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response(data));
  });
});

router.get("/read", (request, response) => {
  model.byUserId(request.user._id, (err, data) => {
    if (err) response.json(helpers.api_error("An error occurred."));
    else response.json(helpers.api_response(data));
  });
  response.end();
});

router.post("/read", (request, response) => {

  let params = request.body;
  if (!helpers.exists(params.news_id)) {
    response.json(helpers.api_error("Invalid Parameters."));
    return;
  }

  model.findOne({_id: params.news_id}, (err, news) => {
    if (err) response.json(helpers.api_error("An Error occurred."));
    if (news) {
      const UserNews = require("../../models/user_news");
      UserNews.create({user_id: request.user._id, news_id: params.id}, (err, data) => {
        if (err) response.json(helpers.api_error("An Error occurred."));
        else response.json(helpers.api_response("Read Successful"));
      });
      return;
    }
    response.json(helpers.api_error("An Error occurred."));
    response.end();

  });
});

router.get('/categories', (request, response) => {
  Category.all((err, data) => {
    if (err) {
      response.json(helpers.api_error("Something Went Wrong"));
      response.end();
      return;
    }

    response.json(helpers.api_response({categories: data}));
    response.end();
  });
});


module.exports = router;
