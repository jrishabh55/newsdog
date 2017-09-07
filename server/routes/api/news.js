const express = require("express");
const router = express.Router();

const model = require("../../models/news");
const helpers = require("../../helpers");
const Category = require('../../models/category');



router.get("/read", (request, response) => {
  model.byUserId(request.user._id, (err, data) => {
    if (err) response.json(helpers.api_error("An error occurred.")).end();
    else response.json(helpers.api_response({newses: data})).end();
  });
});

router.post("/read", (request, response) => {

  let params = request.body;
  if (!helpers.exists(params.id)) {
    response.json(helpers.api_error("Invalid Parameters.")).end();
    return;
  }

  model.findOne({_id: params.id}, (err, news) => {
    if (err) {
      console.log(err);
      response.json(helpers.api_error("An Error occurred.")).end();
      return;
    }
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

router.get('/categories/:id', (request, response) => {
  const params = request.params;
  if(!helpers.exists(params.id)) {
    response.status(422).json(helpers.api_error("Invalid Parameters."), 422).end();
    return;
  }

  model.byCategory(params.id, (err, data) => {
    if (err) {
      response.json(helpers.api_error("Something Went Wrong"));
      response.end();
      return;
    }
    response.json(helpers.api_response({news: data}));
    response.end();
  }).sort({_id: -1});
});

router.get('/tags/:id', (request, response) => {
  // TODO find news via tags API
  response.json(helpers.api_response("To be built"));
});

router.get("/:page?", (request, response) => {

  const params = request.params;
  page = 1;
  if(helpers.exists(params.page)) {
    page = +params.page;
  }


  model.all((err, data) => {
    if (err) response.json(helpers.api_error(err));
    else {

      data = JSON.parse(JSON.stringify(data));

      for (let i = 0; i < data.length; i++) {
        data[i].style = 0;
        if (helpers.exists(data[i].thumbnail.url1)) {
          data[i].style++;
        }
        if (helpers.exists(data[i].thumbnail.url2)) {
          data[i].style++;
        }
        if (helpers.exists(data[i].thumbnail.url3)) {
          data[i].style++;
        }
      }

      response.json(helpers.api_response(data));
    }
  }).sort({_id: -1}).skip((page - 1)*8).limit(8);

});


module.exports = router;
