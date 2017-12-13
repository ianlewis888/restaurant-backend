var mongoose = require('mongoose');
var assert = require('assert');
var express = require('express');
var app = express();
var db = require('./db_config/db_config');

// Mongoose Models
var Blockquotes = require('./models/blockquotes');
var ContactInfo = require('./models/contact_info');

// var phone = new ContactInfo({method: "phone", value: {
//   "countryCode":"1",
//   "areaCode": "555",
//   "localNumber": "876-9846"
// }});
// phone.save(function(err) {
//   if(err) throw err;
// });

// API Endpoints
app.get('/', function(req, res) {
  res.send('working');
});

app.get('/api/blockquotes', function(req, res) {
  Blockquotes.find({}, function(err, data) {
    if (err) throw err;
    res.json(data);
  });
});

app.get('/api/contact_info', function(req, res) {
  ContactInfo.find({}, function(err, data) {
    if (err) throw err;
    res.json(data);
  });
});

// Initialize app
app.listen(5000);
