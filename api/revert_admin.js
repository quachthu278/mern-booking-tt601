import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const revertAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");

    const adminUser = await User.findOne({ username: "JIJI.MYTYWORY" });
    if (adminUser) {
      adminUser.username = "admin";
      adminUser.email = "admin@example.com"; // Optional: revert email too if needed
      await adminUser.save();
      console.log("Admin user reverted successfully.");
      console.log("Username: admin");
    } else {
      console.log("User 'JIJI.MYTYWORY' not found. Checking for 'admin'...");
      const existingAdmin = await User.findOne({ username: "admin" });
      if (existingAdmin) {
          console.log("User 'admin' already exists.");
      } else {
          console.log("No admin user found to revert.");
      }
    }

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

revertAdmin();
