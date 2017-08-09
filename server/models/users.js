const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require('../connection');
const bcrypt = require('bcrypt');
const randomString = require('randomstring');

const UsersSchema = new Schema({
  name: {type: String, required: true, lowercase: true},
  username: {type: String, required: true, unique: true, lowercase: true},
  email: {type: String, required: true, unique: true, lowercase: true},
  password: {type: String, required: true},
  credits: {type: Number, default: 0},
  activated: {type: Boolean, default: false},
  token: {type: String, required: true, unique: true},
  created_at: {type: Date, default: Date.now()},
  reference: {type: String},
  ip: {type: String, required: true}
});

UsersSchema.methods.verifyToken = function (token, callback) {
  callback(this.token !== token);
};

UsersSchema.statics.byId = function (id, callback) {
  return this.findOne({_id: id}, callback);
};

UsersSchema.statics.byUsername = function (username, callback) {
  return this.findOne({username: username}, callback);
};

UsersSchema.statics.byUsernameAndToken = function (username, token, callback) {
  return this.findOne({username: username, token: token}, callback);
};

UsersSchema.statics.byEmail = function (email, callback) {
  return this.findOne({email: email}, callback);
};

UsersSchema.methods.comparePass = (password, callback) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) throw err;
      return callback(undefined, isMatch);
    }
  );
};

UsersSchema.pre('validate', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });

});

UsersSchema.post('save', function (error, doc, next) {

  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(error);
  }
});


autoIncrement.initialize(connection);
UsersSchema.plugin(autoIncrement.plugin, 'User');

const User = module.exports = mongoose.model('User', UsersSchema);

module.exports.add = function (params, callback) {
  let user = new User({
    name: params.name,
    username: params.username,
    password: params.password,
    email: params.email,
    reference: params.reference ? params.reference : null,
    token: randomString.generate(64),
    ip: params.ip,
    credits: 0
  });
  user.save()
    .then((data) => {
      callback(undefined, data);
    })
    .catch((err) => {
      callback(err);
    });
};
