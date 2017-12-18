var db = require('../db_config/db_config');
var data = require('./data');
var Blockquotes = require('../models/blockquotes');
var ContactInfo = require('../models/contact_info');
var Menu = require('../models/menu');
var mongoose = require('mongoose');

// Create contactInfo collection
function createContact() {
  var contactInfo = data.contact;
  db.createCollection("contactInfo", function(err, collection) {
    if (err) throw err;
  });

  for (var key in contactInfo) {
    var collection = db.collection("contactInfo");
    collection.insert(contactInfo[key]);
  }
}

// Create menuItems collection
function createMenuItems() {
  var menus = data.menus;
  db.createCollection("menuItems", function(err, collection) {
    if (err) throw err;
  });

  for (var key in menus) {
    var menuItemCollection = db.collection("menuItems");

    menus[key].forEach(function(menu) {
      var menuName = key;
      var section = menu.name;

      menu.items.forEach(function(item) {
        var dbItem = { "menuName": menuName, "section": section };
        for (var key in item) { dbItem[key] = item[key]; }

        menuItemCollection.insert(dbItem);
        console.log("Inserted Item:", dbItem);
      });
    });
  }
}

module.exports.createContact = createContact;
module.exports.createMenuItems = createMenuItems;
