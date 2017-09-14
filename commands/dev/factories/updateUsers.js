const users = require('../../../server/models/users');
const helpers = require("../../../server/helpers");
const crypto = require('crypto');

users.find({}, (err, data) => {
  if (err) {
    console.log(err);
    process.abort();
  }else {
    const text = '{"Bank Name": "name", "ifsc":"", "ifsc","accountType":"accountType", "Accont Number":"Account Number"}';
    try{
      for(let i=0; i < data.length; i++) {
        password = data[i].email;
        data[i].ref = helpers.encrypt(password, text);
        data[i].save().then(() => {
          console.log(i, "Updated");
          if(i === data.length -1 ) {
            console.log('done');
            process.abort();
          }
        });
      }
    }catch (e) {
      console.log(e);
      process.abort();
    }
  }
});
