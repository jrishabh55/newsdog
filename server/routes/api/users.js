const express = require("express");
const router = express.Router();
const passport = require("passport");

const model = require("../../models/users");
const News = require("../../models/news");
const Category = require("../../models/category");
const helpers = require("../../helpers");

router.get("/", (request, response) => response.send("admins get"));

router.get("/profile", (request, response) => {
  const user = {
    name: request.user.name,
    username: request.user.username,
    email: request.user.email,
    credits: request.user.credits,
    reference: request.user.reference,
    registered: request.created_at,
  };
  response.send(helpers.api_response({ user: user }));
});

router.use('/news', require('./news'));
module.exports = router;
