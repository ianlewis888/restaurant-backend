var mongoose = require('mongoose');

var mongoURL = 'mongodb://localhost/restaurant-backend';
mongoose.connect(mongoURL, {useMongoClient: true});
var db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
