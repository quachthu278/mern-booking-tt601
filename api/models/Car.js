import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  gearbox: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  luggage: {
    type: Number,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  desc: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model("Car", CarSchema);
