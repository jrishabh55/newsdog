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

CategorySchema.statics.findById = function (id, callback) {
  return this.findOne({_id: id}).select(['name', 'meta']).exec(callback);
};

CategorySchema.statics.all = function (callback) {
  return this.find({}).select(['name', 'meta']).exec(callback);
};

CategorySchema.statics.findByName = function (name, callback) {
  return this.findOne({username: name}).select(['name', 'meta']).exec(callback);
};

module.exports = mongoose.model("Category", CategorySchema);
