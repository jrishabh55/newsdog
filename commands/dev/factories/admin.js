const admin = require('../../../server/models/admins');

admin.create({
  name: 'rishabh jain',
  username: 'admin',
  email: 'email@jnexsoft.com',
  password: 'password',
  activated: true,
}).then(data => process.end()).catch(e => console.log(e));


