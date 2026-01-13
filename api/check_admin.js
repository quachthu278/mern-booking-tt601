import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const checkAdmins = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");

    const admins = await User.find({ isAdmin: true });
    const allUsers = await User.find({});

    console.log(`Total users: ${allUsers.length}`);
    console.log(`Admin users: ${admins.length}`);

    if (admins.length > 0) {
      console.log("Admin users found:");
      admins.forEach((admin) => {
        console.log(`- Username: ${admin.username}, Email: ${admin.email}`);
      });
    } else {
      console.log("No admin users found.");
      if (allUsers.length > 0) {
        console.log("Existing users (can be promoted to admin):");
        allUsers.forEach((user) => {
          console.log(`- Username: ${user.username}, Email: ${user.email}, ID: ${user._id}`);
        });
      }
    }

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

checkAdmins();
