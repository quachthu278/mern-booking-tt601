import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const updateAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");

    const adminUser = await User.findOne({ username: "admin" });
    if (adminUser) {
      adminUser.username = "JIJI.MYTYWORY";
      adminUser.email = "meomao9876@gmail.com";
      await adminUser.save();
      console.log("Admin user updated successfully.");
      console.log("New Username: JIJI.MYTYWORY");
    } else {
      console.log("User 'admin' not found. Checking for 'JIJI.MYTYWORY'...");
      const newAdmin = await User.findOne({ username: "JIJI.MYTYWORY" });
      if (newAdmin) {
          console.log("User 'JIJI.MYTYWORY' already exists.");
      } else {
          console.log("No admin user found to update.");
      }
    }

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

updateAdmin();
