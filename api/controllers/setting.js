import Setting from "../models/Setting.js";

export const getSettings = async (req, res, next) => {
  try {
    let settings = await Setting.findOne();
    if (!settings) {
      const newSettings = new Setting();
      settings = await newSettings.save();
    }
    res.status(200).json(settings);
  } catch (err) {
    next(err);
  }
};

export const updateSettings = async (req, res, next) => {
  try {
    let settings = await Setting.findOne();
    if (!settings) {
        const newSettings = new Setting(req.body);
        settings = await newSettings.save();
    } else {
        settings = await Setting.findByIdAndUpdate(
            settings._id,
            { $set: req.body },
            { new: true }
        );
    }
    res.status(200).json(settings);
  } catch (err) {
    next(err);
  }
};
