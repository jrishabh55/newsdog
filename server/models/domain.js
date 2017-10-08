const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");

const DomainSchema = new Schema({
	domain: {type: String, required: true, lowercase: true},
	active: {type: Boolean, default: true, required: true},
});

DomainSchema.statics.byId = function (id, callback) {
	return this.findOne({_id: id}).select(["domain", "active"]).exec(callback);
};

DomainSchema.statics.all = function (callback) {
	return this.find({}).select(["domain", "active"]).exec(callback);
};

DomainSchema.statics.del = function (id, callback) {
	return this.findOne({_id: id}).remove().exec(callback);
};


autoIncrement.initialize(connection);
DomainSchema.plugin(autoIncrement.plugin, "Domain");

module.exports = mongoose.model("Domain", DomainSchema);
