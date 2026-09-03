const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  condition: { type: String, enum: ['New', 'Used', 'Certified'], default: 'Used' },
  mileage: { type: Number, default: 0 },
  availability: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
