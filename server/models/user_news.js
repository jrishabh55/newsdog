const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersNewsSchema = new Schema({
  user_id: {type: Number, required: true},
  news_id: {type: Number, required: true},
});

UsersNewsSchema.statics.add = function (user_id, news_id, callback) {
  data = this.create({user_id: user_id, news_id: news_id}, function (err, data) {
    if (err) return callback(err);
    const User = require('./users');
    User.findAndUpdate();
  });
};



module.exports = mongoose.model('UserNews', UsersNewsSchema);
