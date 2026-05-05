import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./tour.scss";

const sampleItinerary = [
  { day: "Ngày 1", title: "Hà Nội - Hạ Long", desc: "Xe đón tại phố cổ, khởi hành đi Quảng Ninh...", meals: "Sáng/Trưa/Tối" },
  { day: "Ngày 2", title: "Khám phá Vịnh", desc: "Chèo thuyền Kayak, thăm hang Sửng Sốt...", meals: "Sáng/Trưa" },
];

const TourAdmin = () => {
  const [activeTab, setActiveTab] = useState("tour");
  const [showItinerary, setShowItinerary] = useState(true);

  return (
    <div className="tour-admin">
      <Sidebar />
      <div className="tourContainer">
        <Navbar />

        <div className="tour-header">
          <div>
            <h1>Tour Management</h1>
            <p>Quản lý toàn bộ hành trình, lịch khởi hành và vận hành tour.</p>
          </div>
          <div className="tablist">
            {[
              { id: "tour", label: "Tour" },
              { id: "schedule", label: "Departure/Price" },
              { id: "operations", label: "Operations" },
              { id: "booking", label: "Booking" },
              { id: "marketing", label: "Marketing" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "tour" && (
          <section className="panel">
            <h2>Tour Information</h2>
            <button className="toggleButton" onClick={() => setShowItinerary(!showItinerary)}>
              {showItinerary ? "Ẩn Itinerary" : "Hiện Itinerary"}
            </button>

            {showItinerary && (
              <div className="itinerary-list">
                {sampleItinerary.map((item) => (
                  <div key={item.day} className="itinerary-card">
                    <span className="itinerary-day">{item.day}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <p>
                      <b>Bữa ăn:</b> {item.meals}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === "schedule" && (
          <section className="panel">
            <h2>Departure & Pricing</h2>
            <p>Thiết lập lịch khởi hành (tuần, ngày) và cấu hình giá trẻ em / người lớn / em bé / phụ phí.</p>
          </section>
        )}

        {activeTab === "operations" && (
          <section className="panel">
            <h2>Operations</h2>
            <ul>
              <li>Rooming List (Export Excel)</li>
              <li>Quản lý HDV (Guide assignment)</li>
              <li>Quản lý nhà cung cấp (Supplier management)</li>
            </ul>
          </section>
        )}

        {activeTab === "booking" && (
          <section className="panel">
            <h2>Booking & Payment</h2>
            <ul>
              <li>Tiến độ thanh toán: Deposit / Balance</li>
              <li>Voucher / E-ticket QR code</li>
              <li>Hủy & hoàn tiền theo chính sách</li>
            </ul>
          </section>
        )}

        {activeTab === "marketing" && (
          <section className="panel">
            <h2>Marketing & CRM</h2>
            <ul>
              <li>Chiến dịch mã giảm giá, ưu đãi</li>
              <li>Điều hành đánh giá và hình ảnh khách</li>
              <li>Quản lý yêu cầu tour thiết kế riêng</li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default TourAdmin;
