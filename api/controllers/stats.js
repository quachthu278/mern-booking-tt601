import User from "../models/User.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import Delivery from "../models/Delivery.js";

export const getStats = async (req, res, next) => {
  try {
    const users = await User.countDocuments();
    const hotels = await Hotel.countDocuments();
    const rooms = await Room.countDocuments();
    const deliveries = await Delivery.countDocuments();

    res.status(200).json({
      users,
      hotels,
      rooms,
      deliveries,
    });
  } catch (err) {
    next(err);
  }
};
