import mongoose from "mongoose";

const TaxiSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  airport: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
  freeCancellation: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

export default mongoose.model("Taxi", TaxiSchema);
