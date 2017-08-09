const mongoose = require('mongoose');
const db = require('./config/config').db;
const connection = `mongodb://${db.username}:${db.password}@${db.host}/${db.name}`;

module.exports = mongoose.connect(connection, {useMongoClient: true});
