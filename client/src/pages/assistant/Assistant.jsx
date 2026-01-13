import "./assistant.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Assistant = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm your Smart Travel Assistant. Ask me anything about your trip!",
            sender: "bot",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        // Simulate AI response
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: generateResponse(input),
                sender: "bot",
            };
            setMessages((prev) => [...prev, botResponse]);
            setLoading(false);
        }, 1500);
    };

    const generateResponse = (query) => {
        const q = query.toLowerCase();
        if (q.includes("hotel") || q.includes("stay")) {
            return "We have great hotels in London, Madrid, and Berlin. Check out our Featured section!";
        } else if (q.includes("food") || q.includes("eat")) {
            return "For food, I recommend trying local street food. In Vietnam, Banh Mi and Pho are must-tries!";
        } else if (q.includes("weather")) {
            return "It's always a good idea to check the forecast before you go. Generally, spring and autumn are great times to travel.";
        } else {
            return "That's an interesting question! I'm still learning, but I suggest searching for that in our search bar or checking our blog.";
        }
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="assistantContainer">
                <div className="chatWindow">
                    <div className="messages">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
                            >
                                <div className="messageContent">{msg.text}</div>
                            </div>
                        ))}
                        {loading && <div className="message bot"><div className="messageContent">Typing...</div></div>}
                    </div>
                    <div className="inputArea">
                        <input
                            type="text"
                            placeholder="Ask me something..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Assistant;
