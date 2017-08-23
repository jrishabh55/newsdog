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
    else response.json(helpers.api_response({news: data}));
  });
});

router.get("/news/categories", (request, response) => {
  Category.find({}, (err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({categories: data}));
  });
});
router.get("/news/:category", (request, response) => {
  News.find({category_id: request.params.category || 0}, (err, data) => {
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
