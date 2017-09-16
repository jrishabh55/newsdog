const helpers = require('./helpers');
const crypto1 = require('crypto');
let password = 'kh@g.c';
let data = '{ "number": "28934729387 ", "name" : "982374923847", "ifsc" : "982734923749", "bankname" : "82368"}';
//password = crypto1.createHash('sha256').update(password).digest("hex");

console.log(helpers.encrypt(password, data));