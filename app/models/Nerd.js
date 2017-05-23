// grab the mongoose module
var mongoose = require('mongoose');

var InsertContact = mongoose.Schema({
  name: String,
  company: String,
  email: Object,
  phone: String,
  address: String,
  group: String,
  image: Object
});

module.exports = mongoose.model('Nerd', InsertContact);






