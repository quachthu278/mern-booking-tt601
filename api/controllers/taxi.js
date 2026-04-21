import Taxi from "../models/Taxi.js";

export const createTaxi = async (req, res, next) => {
  const newTaxi = new Taxi(req.body);
  try {
    const savedTaxi = await newTaxi.save();
    res.status(200).json(savedTaxi);
  } catch (err) {
    next(err);
  }
};

export const updateTaxi = async (req, res, next) => {
  try {
    const updatedTaxi = await Taxi.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTaxi);
  } catch (err) {
    next(err);
  }
};

export const deleteTaxi = async (req, res, next) => {
  try {
    await Taxi.findByIdAndDelete(req.params.id);
    res.status(200).json("Taxi has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getTaxi = async (req, res, next) => {
  try {
    const taxi = await Taxi.findById(req.params.id);
    res.status(200).json(taxi);
  } catch (err) {
    next(err);
  }
};

export const getTaxis = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const taxis = await Taxi.find({
      ...others,
      price: { $gt: min || 1, $lt: max || 99999999 },
    }).limit(limit);
    res.status(200).json(taxis);
  } catch (err) {
    next(err);
  }
};
