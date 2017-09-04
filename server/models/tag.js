const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");

const TagSchema = new Schema({
  name: {type: String, required: true},
  meta: {type: String, required: false},
});

TagSchema.statics.byId = function (id, callback) {
  return this.findOne({_id: id}).select(['name', 'meta']).exec(callback);
};

TagSchema.statics.all = function (callback) {
  return this.find({}).select(['name', 'meta']).exec(callback);
};

TagSchema.statics.byName = function (name, callback) {
  return this.findOne({username: name}).select(['name', 'meta']).exec(callback);
};

autoIncrement.initialize(connection);
TagSchema.plugin(autoIncrement.plugin, "Tag");

module.exports = mongoose.model("Tag", TagSchema);
