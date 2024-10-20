const mongoose = require('mongoose');
const Trip = require('../models/travlr'); 
const Resort = require('../models/resort');

// Lists all the trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().exec();
    if (!trips.length) {
      return res.status(404).json({ message: "No trips found" });
    }
    return res.status(200).json(trips);
  } catch (err) {
    console.error("Error fetching trips:", err);
    return res.status(500).json({ message: "Server error", error: err });
  }
};


// Finds a trip by code
const tripsFindByCode = async (req, res) => {
  if (!req.params.tripCode) {
    return res.status(400).json({ message: "Trip code is required" });
  }

  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    return res.status(200).json(trip);
  } catch (err) {
    console.error("Error finding trip by code:", err);
    return res.status(500).json({ message: "Server error", error: err });
  }
};



// Add a Trip
const tripsAddTrip = async (req, res) => {
  try {
    // Ensure resort exists
    const resort = await Resort.findById(req.body.resort);
    if (!resort) {
      return res.status(404).json({ message: 'Resort not found' });
    }

    const newTrip = new Trip({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,  
      perPerson: parseFloat(req.body.perPerson),  // Convert to float
      image: req.body.image,
      description: req.body.description,
    });

    const savedTrip = await newTrip.save();
    return res.status(201).json(savedTrip);
  } catch (err) {
    console.error('Error adding trip:', err);
    return res.status(500).json({ message: 'Failed to add trip', error: err });
  }
};

// Update a Trip
const tripsUpdateTrip = async (req, res) => {
  try {
    if (req.body.resort) {
      const resort = await Resort.findById(req.body.resort);
      if (!resort) {
        return res.status(404).json({ message: 'Resort not found' });
      }
    }

    const updatedTrip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,  
        perPerson: parseFloat(req.body.perPerson),  // Convert to float
        image: req.body.image,
        description: req.body.description,
      },
      { new: true }  
    ).exec();

    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found.' });
    }

    return res.status(200).json(updatedTrip);
  } catch (err) {
    console.error('Error updating trip:', err);
    return res.status(500).json({ message: 'An error occurred while updating the trip.', error: err });
  }
};


module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
};
