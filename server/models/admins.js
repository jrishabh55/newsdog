const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require("../connection");
const bcrypt = require("bcrypt");

const AdminSchema = new Schema({
	name: {type: String, required: true, lowercase: true},
	username: {type: String, required: true, unique: true, lowercase: true},
	password: {type: String, required: true},
	activated: {type: Boolean, default: false},
	email: {type: String, required: true, unique: true, lowercase: true},
	created_at: {type: Date, default: Date.now()},
	access_level: {
		admin: {type: Boolean, default: true},
	},
});

AdminSchema.pre("save", function (next) {
	if (!this.isModified("password")) {
		return next();
	}

	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}

		bcrypt.hash(this.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}
			this.password = hash;
			return next();
		});
	});
});

AdminSchema.methods.comparePass = function (candidate, callback) {
	bcrypt.compare(candidate, this.password, (err, isMatch) => {
		if (err) return callback(err);
		callback(undefined, isMatch);
	});
};

AdminSchema.statics.byId = function (id, callback) {
	return this.findOne({_id: id}, callback);
};

AdminSchema.statics.byUsername = function (username, callback) {
	return this.findOne({username: username}, callback);
};

AdminSchema.statics.byEmail = function (email, callback) {
	return this.findOne({email: email}, callback);
};

autoIncrement.initialize(connection);
AdminSchema.plugin(autoIncrement.plugin, "Admin");
module.exports = mongoose.model("Admin", AdminSchema);
