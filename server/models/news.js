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

NewsSchema.methods.findByAuthor = function (author) {
	return this.find({author: author});
};

NewsSchema.methods.findByCategory = function (category) {
	return this.find({category: category});
};

NewsSchema.statics.all = function (callback) {
	return this.find({hidden: false}, callback);
};

NewsSchema.statics.withHidden = function (callback) {
	return this.find({}, callback);
};

NewsSchema.statics.byUserId = function (id, callback) {
	const UserNews = require("../models/user_news");
	const News = require("../models/news");
	UserNews.find({user_id : id}).select("news_id").exec((err, data) => {
		if(err) return callback(err);

		let news_id = [];

		data.forEach((d) => {
			news_id.push(d.news_id);
		});

		News.withHidden()
			.where("_id")
			.in(news_id)
			.exec((err, data) => {
				if(err) return callback(err);
				callback(undefined, data);
			});

	});

};

module.exports = mongoose.model("News", NewsSchema);
