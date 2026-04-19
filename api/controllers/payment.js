import Payment from "../models/Payment.js";
import Booking from "../models/Booking.js";

// Create payment intent / stub
export const createPaymentIntent = async (req, res, next) => {
  const { bookingId, method, amount } = req.body;
  try {
    const newPayment = new Payment({
      bookingId,
      userId: req.user ? req.user.id : req.body.userId,
      amount,
      method,
    });
    const savedPayment = await newPayment.save();
    
    // In a real scenario, you would call Stripe or Momo API here to get client_secret
    
    res.status(200).json({
      payment: savedPayment,
      message: "Payment intent initialized.",
    });
  } catch (err) {
    next(err);
  }
};

export const updatePaymentStatus = async (req, res, next) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      req.params.id,
      { $set: { status: req.body.status, transactionId: req.body.transactionId } },
      { new: true }
    );
    
    // If successful, update booking status too
    if (req.body.status === "success") {
      await Booking.findByIdAndUpdate(updatedPayment.bookingId, { $set: { status: "confirmed" } });
    }
    
    res.status(200).json(updatedPayment);
  } catch (err) {
    next(err);
  }
};

export const getPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find(req.query).populate("userId").populate("bookingId");
    res.status(200).json(payments);
  } catch (err) {
    next(err);
  }
};
