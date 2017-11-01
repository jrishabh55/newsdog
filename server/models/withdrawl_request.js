const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");
const log = require("./withdrawal_logs");

const WithdrawalRequest = new Schema({
	user_id: { type: Number, required: true },
	type: { type: String, required: true },
	paid: { type: Boolean, required: true, default: false },
	paid_date: { type: Date },
	data: { type: String, required: false },
	amount: { type: Number, required: true },
	created_at: { type: Date, default: Date.now() },
	updated_at: { type: Date }
});

WithdrawalRequest.statics.byId = function (id, callback) {
	return this.findOne({_id: id}).exec(callback);
};

WithdrawalRequest.statics.all = function (callback) {
	return this.find({}).exec(callback);
};

WithdrawalRequest.statics.byType = function (type, callback) {
	return this.find({type: type}).exec(callback);
};

WithdrawalRequest.methods.log = function (accepted, amount, info) {
	const data = {
		withdraw_request_id: this._id,
		user_id: this.user_id,
		accepted: accepted,
		info: info,
		amount: amount
	};

	return log.create(data);
};

WithdrawalRequest.methods.logs = function (cb) {
	return log.byWRId(this._id, cb);
};

WithdrawalRequest.methods.pay = function () {
	if(this.paid === true) {
		return false;
	} else {
		this.paid = true;
		this.paid_date = Date.now();
		return this.save()
			.then(s => {
				console.log(s);
				return true;
			})
			.catch(err => {
				console.log(err);
				return false;
			});
	}
};

autoIncrement.initialize(connection);
WithdrawalRequest.plugin(autoIncrement.plugin, "WithdrawalRequest");

module.exports = mongoose.model("WithdrawalRequest", WithdrawalRequest);
