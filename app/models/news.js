var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  title       : { type: String, required: true },
  author      : { type: String, required: true },
  category    : { type: String, required: true },
  description : { type: String, required: true },
  text        : { type: String, required: true },
  link        : { type: String, required: true },
  image       : { type: String, required: true },
  image_alt   : { type: String, required: true },
  date        : { type: Date, default: Date.now }
});

var News = mongoose.model('News', newsSchema);
module.exports = News;