const express = require("express");
const passport = require("passport");
const router = express.Router();
const helpers = require("../helpers");
const Admin = require("../models/admins");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

//Admin login
router.post("/admin/login", (request, response) => {
  let params = request.body;
  if (!helpers.exists(params.username) || !helpers.exists(params.password)) {
    response.status(401).json(helpers.api_error("Invalid parameters"));
    console.log('Invalid Parameters');
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

//Users Login
router.post('/login', (request, response) => {
  const params = request.body;
  if((!helpers.exists(params.username) && !helpers.exists(params.email)) || !helpers.exists(params.password)) {
    response.json(helpers.api_error("Invalid Parameters"));
    response.end();
    return;
  }

  const findBy = (err, user) => {
    if(err) {
      console.log(err);
      response.json(helpers.api_error('Something Went Wrong.'));
      response.end();
      return;
    }
    if(!user) {
      response.json(helpers.api_error("No User find"));
      response.end();
      return;
    }

    if(!user.isActive()) {
      response.json(helpers.api_error("User is not active"));
      response.end();
      return;
    }

    user.comparePass(params.password, (err, isMatch) => {
      if(err) {
        console.error(err);
        response.json(helpers.api_error("Something bad happened"));
        response.end();
        return;
      }
      if(isMatch) {

        const u = {
          name: user.name,
          username: user.username,
          email: user.email,
          token: user.token,
          created_at: user.created_at,
          credits: user.credits
        };

        response.json(helpers.api_response({ user: u }));
        response.end();
      }else {
        response.json(helpers.api_error('Invalid Password'));
        response.end();
      }
    })

  };

  if(params.email){
    User.byEmail(params.email, findBy);
  }else {
    User.byUsername(params.username, findBy);
  }

});

//Users Route
router.post("/register", (request, response) => {
  let params = request.body;

  let errors = [];

  if (!helpers.exists(params.name)) {
    errors.push('name');
  }
  if (!helpers.exists(params.username)) {
    errors.push('username');
  }
  if (!helpers.exists(params.email)) {
    errors.push('email');
  }
  if (!helpers.exists(params.password)) {
    errors.push('password');
  }

  let e = [];
  if (errors.length > 0) {
    errors.forEach((par) => {
      e.push(`Parameter ${par} is required.`)
    });
  }

  if (e.length > 0) {
    response.json(helpers.api_error(e));
    return;
  }

  params.ip = request.ip;

  model.add(params, (err, user) => {
    if (err) {
      response.json(helpers.api_error(err.message));
    } else {
      response.json(helpers.api_response(user));
    }
  });
});

router.use("/users", passport.authenticate('token', { session: false }), require("./api/users"));

module.exports = router;
