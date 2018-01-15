var mongoose = require('mongoose');
var express = require('express');
var init = require('./initialize/init_commands.js');
var app = express();
var db = require('./db_config/db_config');

// Mongoose Models
var Blockquotes = require('./models/blockquotes');
var ContactInfo = require('./models/contact_info');

// Initialize Collections
var blockquotesCollection = db.collection("blockquotes");
var contactInfoCollection = db.collection("contactInfo");
var menuItemsCollection = db.collection("menuItems");
var hoursCollection = db.collection("hours");

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API Endpoints
app.get('/', function(req, res) {
  res.send('working');
});

// Return all data
app.get('/api/all', function(req, res) {
  var responseData = {};
  findAll(menuItemsCollection).then(function(menuData) {
    responseData["menuItems"] = menuData;
    return findAll(contactInfoCollection).then(function(contactData) {
      responseData["contactInfo"] = contactData;
      return findAll(blockquotesCollection).then(function(blockquotesData) {
        responseData["blockquotes"] = blockquotesData;
        return findAll(hoursCollection).then(function(hoursData) {
          responseData["hours"] = hoursData;
          res.json(responseData);
        });
      });
    });
  }).catch(function(err) {
    res.send(err);
  });
});

// Return blockquotes
app.get('/api/blockquotes', function(req, res) {
  findAll(blockquotesCollection).then(function(data) {
    res.json(data);
  }).catch(function(err) {
    res.send(err);
  });
});

// Return contact info
app.get('/api/contact_info', function(req, res) {
  findAll(contactInfoCollection).then(function(data) {
    res.json(data);
  }).catch(function(err) {
    res.send(err);
  });
});

// Return menu items
app.get('/api/menu_items', function(req, res) {
  findAll(menuItemsCollection).then(function(data) {
    res.json(data);
  }).catch(function(err) {
    res.send(err);
  });
});

// Fetch all data
function findAll(collection) {
  return new Promise(function(resolve, reject) {
    collection.find({}, function(err, data) {
      if (err)
        reject(err);
      data.toArray().then(function(d) {
        resolve(d);
      });
    });
  });
}

// Initialize app
app.listen(5000);
