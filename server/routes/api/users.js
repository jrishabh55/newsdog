const express = require("express");
const router = express.Router();
const helpers = require("../../helpers");
const User = require("../../models/users");

router.get("/", (request, response) => response.send("admins get"));

router.get("/profile", (request, response) => {
  const user = {
    name: request.user.name,
    username: request.user.username,
    email: request.user.email,
    credits: request.user.credits,
    reference: request.user.reference,
    registered: request.created_at,
    info: request.user.ref,
  };
  response.send(helpers.api_response({ user: user }));
});

router.post("/withdraw", (request, response) => {
  const params = request.body;
  if(!helpers.exists(params.amount)) {
    response.status(422).json(helpers.api_error("Invalid Parameters",422)).end();
  }else {

  }
});

router.post('/info', (request, response) => {
  const params = request.body;

  if(!helpers.exists(params.data)) {
    response.status(422).json(helpers.api_error("Invalid Parameters",422)).end();
  }else {
    const data = params.data;
    try {
      const password = request.user.email;
      const msg = helpers.decrypt(password, data);
      if(!helpers.exists(msg)) {
        response.json(helpers.api_error("Invalid Data")).end();
        return;
      }
    }catch(e) {
      console.log(e);
      response.json(helpers.api_error("Invalid Data")).end();
      return;
    }

    User.findOne({_id: request.user._id}, (err, data) => {
      if(err) {
        console.log(err);
        response.json(helpers.api_error('Something Went Wrong. Please try again'));
      }
      else if(data) {
        data.ref = params.data;
        data.save()
          .then(() => {
            response.json(helpers.api_response('Info added'));
          })
          .catch(e => {
            console.log(e);
            response.json(helpers.api_error('Something Went Wrong. Please try again'));
          });
      }

    });
  }
});

router.use('/news', require('./news'));
module.exports = router;
