import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import deliveryRoute from "./routes/delivery.js";
import notificationsRoute from "./routes/notifications.js";
import logsRoute from "./routes/logs.js";
import healthRoute from "./routes/health.js";
import statsRoute from "./routes/stats.js";
import settingsRoute from "./routes/settings.js";
import aiRoute from "./routes/ai.js";
import categoriesRoute from "./routes/categories.js";
import toursRoute from "./routes/tours.js";
import bookingsRoute from "./routes/bookings.js";
import paymentsRoute from "./routes/payments.js";
import articlesRoute from "./routes/articles.js";
import flightsRoute from "./routes/flights.js";
import carsRoute from "./routes/cars.js";
import taxisRoute from "./routes/taxis.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", false);

const connect = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("Connected to mongoDB.");
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/delivery", deliveryRoute);
app.use("/api/notifications", notificationsRoute);
app.use("/api/logs", logsRoute);
app.use("/api/health", healthRoute);
app.use("/api/stats", statsRoute);
app.use("/api/settings", settingsRoute);
app.use("/api/ai", aiRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/tours", toursRoute);
app.use("/api/bookings", bookingsRoute);
app.use("/api/payments", paymentsRoute);
app.use("/api/articles", articlesRoute);
app.use("/api/flights", flightsRoute);
app.use("/api/cars", carsRoute);
app.use("/api/taxis", taxisRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false, 
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const startServer = async () => {
  try {
    if (!process.env.MONGO) {
      throw new Error("Missing MONGO in .env");
    }

    await connect();

    app.listen(8800, () => {
      console.log("Connected to backend. API running at http://localhost:8800");
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
