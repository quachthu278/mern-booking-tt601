import Notification from "../models/Notification.js";

export const createNotification = async (req, res, next) => {
  const newNotification = new Notification(req.body);

  try {
    const savedNotification = await newNotification.save();
    res.status(200).json(savedNotification);
  } catch (err) {
    next(err);
  }
};

export const getNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (err) {
    next(err);
  }
};

export const markAsRead = async (req, res, next) => {
    try {
        const updatedNotification = await Notification.findByIdAndUpdate(
            req.params.id,
            { $set: { read: true } },
            { new: true }
        );
        res.status(200).json(updatedNotification);
    } catch (err) {
        next(err);
    }
}
