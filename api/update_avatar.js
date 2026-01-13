import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const updateAvatar = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");

    const adminUser = await User.findOne({ username: "admin" });
    if (adminUser) {
      adminUser.img = "https://velle.vn/wp-content/uploads/2025/06/anh-trai-anime-17.jpg";
      await adminUser.save();
      console.log("Admin avatar updated successfully.");
    } else {
      console.log("User 'admin' not found.");
    }

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

updateAvatar();
