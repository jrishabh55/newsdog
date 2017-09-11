const express = require("express");
const router = express.Router();
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
    info: request.user.ref,
  };
  response.send(helpers.api_response({ user: user }));
});

router.post('/info', (request, response) => {
  const params = request.body;

  if(!helpers.exists(params.data)) {
    response.status(422).json(helpers.api_error("Invalid Parameters",422)).end();
  }else {
    const data = params.data;
    try {
      const password = request.user.email;
      helpers.decrypt(password, data);
    }catch(e) {
      response.json(helpers.api_error("Invalid Data")).end();
      return;
    }

    request.user.ref = data;
    request.user.save();
    response.json(helpers.api_response('Info added'));
  }
});

router.use('/news', require('./news'));
module.exports = router;
