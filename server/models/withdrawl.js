const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersNewsSchema = new Schema({
	user_id: {type: Number, required: true},
	news_id: {type: Number, required: true},
});

UsersNewsSchema.statics.add = function (user_id, news_id, callback) {
	this.create({user_id: user_id, news_id: news_id}, function (err, data) {
		if (err) return callback(err);
		const User = require("./users");
		User.byId(user_id, (err, user) => {
			if (err) return callback(err);
			const News = require("./news");
			News.byId(news_id, (err, news) => {
				if (err) return callback(err);
				user.credits -= news.credits;
				user.save().then(() => {
					callback(undefined);
				}).catch(err => callback(err));
			});
		});
	});
};



module.exports = mongoose.model("UserNews", UsersNewsSchema);
