import { useState } from "react";
import axios from "axios";
import "./chat.css";

const Chat = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Xin chào! Tôi là trợ lý du lịch AI. Bạn cần giúp gì không?",
            sender: "bot",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await axios.post("/ai/chat", { message: input });
            const botResponse = {
                id: Date.now() + 1,
                text: res.data.reply,
                sender: "bot",
            };
            setMessages((prev) => [...prev, botResponse]);
        } catch (err) {
            const errorResponse = {
                id: Date.now() + 1,
                text: "Xin lỗi, tôi đang gặp sự cố kết nối. Vui lòng thử lại sau.",
                sender: "bot",
            };
            setMessages((prev) => [...prev, errorResponse]);
        }
        setLoading(false);
    };

    return (
        <div className="chatWrapper">
            {!isOpen && (
                <button className="chatToggleBtn" onClick={() => setIsOpen(true)}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                    </svg>
                </button>
            )}
            {isOpen && (
                <div className="chatContainer">
                    <div className="chatHeader">
                        <h3>Trợ lý du lịch AI</h3>
                        <button className="closeBtn" onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="chatMessages">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
                            >
                                <div className="messageContent">{msg.text}</div>
                            </div>
                        ))}
                        {loading && <div className="message bot"><div className="messageContent">Đang suy nghĩ...</div></div>}
                    </div>
                    <div className="chatInputArea">
                        <input
                            type="text"
                            placeholder="Hỏi tôi bất cứ điều gì..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button onClick={handleSend} disabled={loading}>Gửi</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
