const express = require("express");
const router = express.Router();
const model = require("../../models/admins");
const News = require("../../models/news");
const User = require("../../models/users");
const Category = require("../../models/category");
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
    return response.json(helpers.api_error("Invalid Parameters"));
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

router.get("/news/categories", (request, response) => {
  Category.all((err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({categories: data}));
  });
});

router.post("/news/category/add", (request, response) => {
  let params = request.body;

  if(!helpers.exists(params.name)) {
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
