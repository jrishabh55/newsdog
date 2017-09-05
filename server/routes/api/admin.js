const express = require("express");
const router = express.Router();
const model = require("../../models/admins");
const News = require("../../models/news");
const User = require("../../models/users");
const Category = require("../../models/category");
const Tag = require("../../models/tag");
const helpers = require("../../helpers");
const passport = require("passport");
const jwt = require("jsonwebtoken");

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
    response.status(422).json(helpers.api_error('Invalid parameters', 422));
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

router.get("/news", (request, response) => {
  News.all((err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({newses: data}));
  });
});

router.post("/news/add", (request, response) => {
  let params = request.body;

  if (
    !helpers.exists(params.title) ||
    !helpers.exists(params.desc) ||
    !helpers.exists(params.author) ||
    !helpers.exists(params.credits) ||
    !helpers.exists(params.category) ||
    !helpers.exists(params.time)
  ) {
    response.status(422).json(helpers.api_error('Invalid parameters', 422));
  }

  let data = {
    title: params.title,
    author: params.author,
    credits: params.credits,
    category: params.category,
    desc: params.desc,
    time: params.time,
    'thumbnail.url1': params.thumb1
    ,
  };
  if (params.thumb2 !== '') {
    data['thumbnail.url2'] = params.thumb2;
  }
  if (params.thumb3 !== '') {
    data['thumbnail.url2'] = params.thumb3;
  }

  News.create(data, (err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({news: data}));
  });
});

router.get("/news/:id/view", (request, response) => {
  const id = request.params.id;
  News.byId(id, (err, news) => {

    if (err) {
      response.status(417).json(helpers.api_error("Something Went wrong. Please try again"), 471);
      response.end();
      console.error(err);
      return;
    }
    if (news) {
      response.json(helpers.api_response({news: news}));
      response.end();
    } else {
      response.status(404).json(helpers.api_error('Item not found', 404));
      response.end();
    }
  });
});

router.post("/news/:id/view", (request, response) => {
  const params = request.body;
  const news_id = request.params.id;

  if (
    !helpers.exists(params.title) ||
    !helpers.exists(params.desc) ||
    !helpers.exists(params.author) ||
    !helpers.exists(params.credits) ||
    !helpers.exists(params.category) ||
    !helpers.exists(params.time)
  ) {
    response.status(422).json(helpers.api_error('Invalid parameters', 422));
  }

  let data = {
    title: params.title,
    author: params.author,
    credits: params.credits,
    category: params.category,
    desc: params.desc,
    time: params.time,
    'thumbnail.url1': params.thumb1

  };
  if (params.thumb2 !== '') {
    data['thumbnail.url2'] = params.thumb2;
  }
  if (params.thumb3 !== '') {
    data['thumbnail.url3'] = params.thumb3;
  }

  News.update(news_id, data, (err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({news: data}));
  });
});

router.get("/news/tags", (request, response) => {
  Tag.all((err, tags) => {
    if (err) {
      console.log(err);
      response.json(helpers.api_error(err)).end();
      return;
    }
    response.json(helpers.api_response({tags: tags})).end();
  });
});

router.post("/news/tag/add", (request, response) => {
  const params = request.body;
  if (!helpers.exists(params.name)) {
    response.json(helpers.api_error("Invalid parameters")).end();
    return;
  }
  Tag.create({name: params.name}, (err, tag) => {
    if (err) {
      console.log(err);
      response.status(422).json(helpers.api_error('Invalid parameters', 422));
      return;
    }
    response.json(helpers.api_response({tag: tag}));
  });
});

router.post("/news/tag/delete", (request, response) => {
  const params = request.body;

  if (!helpers.exists(params.id)) {
    response.status(422).json(helpers.api_error('Invalid parameters', 422));
  }

  Tag.deleteOne({_id: params.id}, (err, data) => {
    if (err) {
      response.json(helpers.api_error(err));
      response.end();
    }
    response.json(helpers.api_response("Deleted")).end();
  });

});

router.get("/news/categories", (request, response) => {
  Category.all((err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({categories: data}));
  });
});

router.post("/news/category/delete", (request, response) => {
  const params = request.body;

  if (!helpers.exists(params.id)) {
    response.json(helpers.api_error('Invalid parameters', 422));
  }

  Category.deleteOne({_id: params.id}, (err, data) => {
    if (err) {
      response.json(helpers.api_error(err));
      response.end();
    }
    response.json(helpers.api_response("Deleted")).end();
  });

});

router.post("/news/category/add", (request, response) => {
  let params = request.body;

  if (!helpers.exists(params.name)) {
    response.json(helpers.api_error('Invalid Parameters'));
    return;
  }

  Category.create({name: params.name}, (err, category) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({category: category}));
  });
});

router.get("/news/:category", (request, response) => {
  News.find({category_id: request.body.category || 0}, (err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({newses: data}));
  });
});

router.get("/profile", (request, response) => {
  response.json(helpers.api_response(request.user));
});

router.get("/users", (request, response) => {
  User.find({}).select(['username', 'email', 'credits', 'created_at']).exec((err, data) => {
    if (err)
      response.json(helpers.api_error('Some error accrued', 200));

    response.json(helpers.api_response({users: data}));
  });
});

module.exports = router;
