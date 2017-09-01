const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");

const CategorySchema = new Schema({
	name: {type: String, required: true},
	meta: {type: String, required: false},
});

autoIncrement.initialize(connection);
CategorySchema.plugin(autoIncrement.plugin, "Category");

CategorySchema.methods.findById = function (id) {
	return this.model("Category").find({_id: id});
};

CategorySchema.statics.all = function (callback) {
  return this.find({}, callback);
};

CategorySchema.methods.findByName = function (name) {
	return this.model("Category").find({username: name});
};

module.exports = mongoose.model("Category", CategorySchema);
