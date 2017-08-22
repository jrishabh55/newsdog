const express = require("express");
const passport = require("passport");
const router = express.Router();
const helpers = require("../helpers");
const Admin = require("../models/admins");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

//Admin login
router.post("/admin/login", (request, response) => {
  let params = request.body;

  if (!helpers.exists(params.username) && !helpers.exists(params.password)) {
    response.status(401).json(helpers.api_error("Invalid parameters"));
    return;
  }
  Admin.byUsername(params.username, (err, user) => {
    if (err) {
      response.status(401).json(helpers.api_error(err, 200));
    } else if (!user) {
      response.status(401).json(helpers.api_error("No User"));
    } else {
      user.comparePass(params.password, (err, isMatch) => {

        if (err)
          throw err;
        if (isMatch) {
          const token = jwt.sign(user, config.secret, {expiresIn: 3600});
          const u = {
            name: user.name,
            username: user.username,
            email: user.email,
            access_level: user.access_level,
            created_at: user.created_at
          };

          response.json(helpers.api_response({token: `Bearer ${token}`, user: u}));
        } else {
          response.json(helpers.api_error("Incorrect Password"));
        }
      });
    }
  });
});

router.use("/admin", passport.authenticate('jwt', {session: false}), require("./api/admin"));

//Users Route
router.use("/users", require("./api/users"));

//News Routes

module.exports = router;
