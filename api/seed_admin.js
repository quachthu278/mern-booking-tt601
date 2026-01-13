import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");

    const existingAdmin = await User.findOne({ username: "admin" });
    if (existingAdmin) {
      console.log("Admin user already exists.");
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync("password", salt);

    const newAdmin = new User({
      username: "admin",
      email: "admin@example.com",
      country: "Vietnam",
      city: "Hanoi",
      phone: "0123456789",
      password: hash,
      isAdmin: true,
    });

    await newAdmin.save();
    console.log("Admin user created successfully.");
    console.log("Username: admin");
    console.log("Password: password");

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedAdmin();
