const crypto = require('crypto-js');
const crypto1 = require('crypto');

let helpers = {
  exists: (val) => !(val === null || val === undefined || (typeof val === 'string' && val.trim() === "") || (typeof val !== 'number' && val.length < 1)),
  api_error: (error, code = 401, data = null) => {
    return {status: "error", error: error, code: code, data: data};
  },
  api_response: (data = null, code = 200) => {
    return {status: "ok", code: code, data: data};
  },
  encrypt: (password, text) => {
    password = crypto1.createHash('sha256').update(password).digest("hex");
    if(typeof text !== 'string') {
      text = JSON.stringify(text);
    }
    return crypto.AES.encrypt(text, password).toString();
  },

  decrypt: (password, text) => {
    password = crypto1.createHash('sha256').update(password).digest("hex");
    return crypto.AES.decrypt(text, password).toString(crypto.enc.Utf8);
  }
};

module.exports = helpers;
