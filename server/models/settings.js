const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");

const Settings = new Schema({
	name: { type: String, required: true, unique: true },
	value: { type: String, required: true, unique: true }
});

Settings.statics.add = function (name, value) {
	return this.create({
		name: name,
		value: value
	});
};

Settings.statics.all = function (cb) {
	return this.create({}, cb);
};

Settings.statics.get = function (name, cb) {
	return this.findOne({name: name}).exec(cb);
};

autoIncrement.initialize(connection);
Settings.plugin(autoIncrement.plugin, "Settings");

module.exports = mongoose.model("Settings", Settings);
