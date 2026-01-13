import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Delivery", DeliverySchema);
