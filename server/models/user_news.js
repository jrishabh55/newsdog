const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersNewsSchema = new Schema({
	user_id: {type: Number, required: true},
	news_id: {type: Number, required: true},
});

module.exports = mongoose.model("UserNews", UsersNewsSchema);
