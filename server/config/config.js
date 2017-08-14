require("dotenv").config();
module.exports = {
	secret : process.env.APP_SECRET,
	db : {
		host : process.env.DB_HOST,
		username : process.env.DB_USERNAME,
		password : process.env.DB_PASSWORD,
		name : process.env.DB_NAME
	}
};
