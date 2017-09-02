const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");

const NewsSchema = new Schema({
  title: {type: String, required: true, lowercase: true},
  desc: {type: String, required: true},
  author: {type: String, required: true, lowercase: true},
  hidden: {type: Boolean, default: false},
  thumbnail: {
    url1: {type: String, required: true},
    url2: {type: String, required: false},
    url3: {type: String, required: false},
  },
  credits: {type: Number, default: 0},
  time: {type: Number, required: true, default: 1000},
  category: {type: Number, required: true},
  meta: {
    votes: {type: Number, default: 0},
    favs: {type: Number, default: 0},
  },
  created_at: {type: Date, default: Date.now()},
});

autoIncrement.initialize(connection);
NewsSchema.plugin(autoIncrement.plugin, "News");

NewsSchema.statics.byId = function (id, callback) {
  this.findOne({_id: id}, callback);
};

NewsSchema.statics.byAuthor = function (author, callback, withHidden = false) {
  return this.find({author: author, hidden: withHidden}, callback);
};

NewsSchema.statics.byCategory = function (category, callback, withHidden = false) {
  return this.find({category: category, hidden: withHidden}, callback);
};

NewsSchema.statics.all = function (callback, withHidden = false) {
  return this.find({hidden: withHidden}, callback);
};

NewsSchema.statics.byUserId = function (id, callback) {
  const UserNews = require("../models/user_news");
  const News = require("../models/news");
  UserNews.find({user_id: id}).select("category").exec((err, data) => {
    if (err) return callback(err);

    let news_id = [];

    data.forEach((d) => {
      news_id.push(d.category);
    });

    News.withHidden()
      .where("_id")
      .in(news_id)
      .exec((err, data) => {
        if (err) return callback(err);
        callback(undefined, data);
      });

  });

};

module.exports = mongoose.model("News", NewsSchema);
