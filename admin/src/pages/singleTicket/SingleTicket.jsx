import "../../pages/single/single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleTicket = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await axios.get(`/tickets/${ticketId}`);
        setTicket(res.data);
      } catch (err) {
        console.error("Error fetching ticket", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTicket();
  }, [ticketId]);

  const handleReply = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const res = await axios.post(`/tickets/${ticketId}/messages`, {
        sender: "admin",
        text: newMessage,
      });
      setTicket(res.data);
      setNewMessage("");
    } catch (err) {
      console.error("Error replying to ticket", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!ticket) return <div>Ticket Not Found</div>;

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left" style={{ flex: 1, padding: "20px" }}>
            <h1 className="title">Thông tin Phiếu hỗ trợ</h1>
            <div className="item">
              <div className="details" style={{ width: "100%" }}>
                <h1 className="itemTitle">{ticket.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Người gửi (User ID):</span>
                  <span className="itemValue">{ticket.user}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Mô tả:</span>
                  <span className="itemValue">{ticket.description}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Trạng thái:</span>
                  <span className="itemValue">
                    <span 
                      style={{ 
                        padding: "5px 10px", 
                        borderRadius: "5px", 
                        background: ticket.status === "Open" ? "green" : ticket.status === "In Progress" ? "orange" : "gray",
                        color: "white", 
                        fontWeight: "bold" 
                      }}
                    >
                      {ticket.status}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom" style={{ margin: "20px", padding: "20px", boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)", borderRadius: "10px", background: "white" }}>
          <h1 className="title" style={{ color: "gray", marginBottom: "20px" }}>Trao đổi & Phản hồi</h1>
          
          {/* Chat Messages */}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "20px", maxHeight: "400px", overflowY: "auto", padding: "10px" }}>
            {ticket.messages?.map((msg, idx) => (
              <div 
                key={idx} 
                style={{ 
                  alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
                  background: msg.sender === "admin" ? "#e0f2fe" : "#f1f5f9",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  maxWidth: "60%"
                }}
              >
                <div style={{ fontSize: "12px", color: "gray", marginBottom: "5px", fontWeight: "bold" }}>
                  {msg.sender === "admin" ? "Quản trị viên" : "Khách hàng"} - {new Date(msg.createdAt).toLocaleString()}
                </div>
                <div>{msg.text}</div>
              </div>
            ))}
            {ticket.messages?.length === 0 && <span style={{color: "gray"}}>Chưa có cuộc thảo luận nào.</span>}
          </div>

          {/* Reply Box */}
          <form onSubmit={handleReply} style={{ display: "flex", gap: "10px" }}>
            <input 
              type="text" 
              value={newMessage} 
              onChange={(e) => setNewMessage(e.target.value)} 
              placeholder="Nhập nội dung phản hồi cho khách hàng..." 
              style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid lightgray", outline: "none" }}
            />
            <button type="submit" style={{ padding: "10px 20px", background: "#0071C2", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
