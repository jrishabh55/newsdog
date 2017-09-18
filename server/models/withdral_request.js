const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");

const WithdrawalRequest = new Schema({
	type: { type: String, required: true },
	paid: { type: Boolean, required: true },
	data: { type: String, required: true },
	amount: { type: Number, required: true },
	created_at: { type: Date, default: Date.now() },
	updated_at: { type: Date },
	paid_date: { type: Date }
});

WithdrawalRequest.pre('save', function (next) {
	next();
});


WithdrawalRequest.statics.byId = function (id, callback) {
	this.findOne({_id: id}).exec(callback);
};

WithdrawalRequest.statics.all = function (callback) {
	this.find({}).exec(callback);
};

WithdrawalRequest.statics.byType= function (type, callback) {
	this.find({type: type}).exec(callback);
};

WithdrawalRequest.methods.pay = function () {
	if(this.paid === true) {
		return false;
	} else {
		this.paid = true;
		this.paid_date = Date.now();
		return this.save()
			.then(s => true)
			.catch(err => false);
	}
};

autoIncrement.initialize(connection);
WithdrawalRequest.plugin(autoIncrement.plugin, "WithdrawalRequest");

module.exports = mongoose.model("WithdrawalRequest", WithdrawalRequest);
