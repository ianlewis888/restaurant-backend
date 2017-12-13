var mongoose = require('mongoose');

// Blockquote schema
var blockquotesSchema = module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  citation: {
    type: String,
    required: true
  }
});
var Blockquotes = module.exports = mongoose.model('Blockquotes', blockquotesSchema);
