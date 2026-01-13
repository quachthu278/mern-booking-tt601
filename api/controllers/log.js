import Log from "../models/Log.js";

export const createLog = async (req, res, next) => {
  const newLog = new Log(req.body);

  try {
    const savedLog = await newLog.save();
    res.status(200).json(savedLog);
  } catch (err) {
    next(err);
  }
};

export const getLogs = async (req, res, next) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.status(200).json(logs);
  } catch (err) {
    next(err);
  }
};
