const mongoose = require('mongoose');

const resortSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  location: { type: String, required: true }
});

module.exports = mongoose.model('Resort', resortSchema);
