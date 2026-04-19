import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["hotel", "tour"],
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Category", CategorySchema);
