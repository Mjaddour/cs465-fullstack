const mongoose = require('mongoose');

// Define the trip 
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: mongoose.Schema.Types.ObjectId, ref: 'Resort', required: true },  // Reference to Resort
    perPerson: { type: Number, required: true },  // Changed from String to Number
    image: { type: String, required: true },
    description: { type: String, required: true }
});
const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;