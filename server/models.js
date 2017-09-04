const models = {
	Admin: require("./models/admins"),
	Category: require("./models/category"),
	Tag: require("./models/tag"),
	News: require("./models/news"),
	Users: require("./models/users"),
	UserNews: require("./models/user_news")
};

module.exports = models;
