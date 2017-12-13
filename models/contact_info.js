var mongoose = require('mongoose');

// Contact info schema
var contactSchema = module.exports = new mongoose.Schema({
  method: {
    type: String,
    required: true
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});
var ContactInfo = module.exports = mongoose.model('ContactInfo', contactSchema);
