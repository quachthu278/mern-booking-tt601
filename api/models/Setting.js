import mongoose from "mongoose";

const SettingSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: "MERN Booking",
    },
    adminEmail: {
      type: String,
      default: "admin@example.com",
    },
    maintenanceMode: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Setting", SettingSchema);
