var mongoose = require('mongoose');

// Menu schema
var menuSchema = module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  items: {
    type: [],
    required: true
  }
});

var Menu = module.exports = mongoose.model('Menu', menuSchema);
