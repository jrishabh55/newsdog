const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");

const WithdrawalLogs = new Schema({
	withdraw_request_id: { type: Number, required: true, unique: true },
	user_id: { type: Number, required: true },
	accepted: { type: Boolean, required: true, default: true },
	info: { type: String, required: true },
	amount: { type: Number, required: true },
	created_at: { type: Date, default: Date.now() },
	updated_at: { type: Date, default: Date.now() }
});

WithdrawalLogs.statics.byId = function (id, callback) {
	this.findOne({_id: id}).exec(callback);
};

WithdrawalLogs.statics.byWRId = function (id, callback) {
	this.findOne({withdraw_request_id: id}).exec(callback);
};

WithdrawalLogs.statics.byUId = function (id, callback) {
	this.find({user_id: id}).exec(callback);
};

WithdrawalLogs.statics.all = function (callback) {
	this.find({}).exec(callback);
};

WithdrawalLogs.statics.byType = function (type, callback) {
	this.find({accepted: type}).exec(callback);
};

autoIncrement.initialize(connection);
WithdrawalLogs.plugin(autoIncrement.plugin, "WithdrawalLogs");

module.exports = mongoose.model("WithdrawalLogs", WithdrawalLogs);
