const mongoose = require('mongoose');
const Trip = require('../models/travlr'); 
const Model = mongoose.model('trips'); 

// Lists all the trips
const tripsList = async(req, res) => {
    try {
        const trips = await Model.find().exec();
        if (!trips.length) {
            return res.status(404).json({ message: "No trips found" });
        }
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
};

// Finds a trip by code
const tripsFindByCode = async(req, res) => {
    if (!req.params.tripCode) {
        return res.status(400).json({ message: "Trip code is required" });
    }

    try {
        const trip = await Model.findOne({'code': req.params.tripCode}).exec();
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
