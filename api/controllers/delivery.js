import Delivery from "../models/Delivery.js";

export const createDelivery = async (req, res, next) => {
  const newDelivery = new Delivery(req.body);

  try {
    const savedDelivery = await newDelivery.save();
    res.status(200).json(savedDelivery);
  } catch (err) {
    next(err);
  }
};

export const updateDelivery = async (req, res, next) => {
  try {
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDelivery);
  } catch (err) {
    next(err);
  }
};

export const deleteDelivery = async (req, res, next) => {
  try {
    await Delivery.findByIdAndDelete(req.params.id);
    res.status(200).json("Delivery has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getDelivery = async (req, res, next) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    res.status(200).json(delivery);
  } catch (err) {
    next(err);
  }
};

export const getDeliveries = async (req, res, next) => {
  try {
    const deliveries = await Delivery.find();
    res.status(200).json(deliveries);
  } catch (err) {
    next(err);
  }
};
