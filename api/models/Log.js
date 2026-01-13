import mongoose from "mongoose";

const LogSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["INFO", "WARNING", "ERROR"],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Log", LogSchema);
