// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InsertContact = new Schema({
  name: String,
  company: String,
  email: Object,
  phone: String,
  address: String,
  group: String,
  image: Object
});

module.exports = mongoose.model('Insert', InsertContact);





