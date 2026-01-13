import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithAI = async (req, res, next) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json("Message is required");
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "You are a helpful travel assistant for a hotel booking website. You answer in Vietnamese." }],
        },
        {
          role: "model",
          parts: [{ text: "Xin chào! Tôi là trợ lý du lịch của bạn. Tôi có thể giúp gì cho bạn hôm nay?" }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
  } catch (err) {
    next(err);
  }
};
