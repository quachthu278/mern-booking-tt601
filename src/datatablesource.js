export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Người dùng",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Quốc gia",
    width: 100,
  },
  {
    field: "city",
    headerName: "Thành phố",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Điện thoại",
    width: 100,
  },
];

export const tourColumns = [
  { field: "tourCode", headerName: "Mã Tour", width: 100 },
  {
    field: "title",
    headerName: "Tên Tour",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photos?.[0] || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  { field: "duration", headerName: "Thời gian", width: 150 },
  { field: "price", headerName: "Giá (VNĐ)", width: 120 },
];

export const bookingColumns = [
  { field: "_id", headerName: "Mã đặt chỗ", width: 220 },
  { field: "user", headerName: "Khách hàng", width: 150 },
  { field: "productType", headerName: "Loại sản phẩm", width: 130 },
  {
    field: "checkIn",
    headerName: "Ngày nhận",
    width: 120,
    renderCell: (params) => {
      return params.row.checkIn ? new Date(params.row.checkIn).toLocaleDateString('vi-VN') : "";
    }
  },
  {
    field: "checkOut",
    headerName: "Ngày trả",
    width: 120,
    renderCell: (params) => {
      return params.row.checkOut ? new Date(params.row.checkOut).toLocaleDateString('vi-VN') : "";
    }
  },
  { field: "status", headerName: "Trạng thái", width: 120, renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    }
  },
  { field: "totalPrice", headerName: "Tổng tiền (VNĐ)", width: 130 },
];


export const reviewColumns = [
  { field: "_id", headerName: "Mã đánh giá", width: 220 },
  { field: "user", headerName: "Người dùng", width: 200 },
  { field: "productId", headerName: "Mã Sản Phẩm", width: 200 },
  {
    field: "rating",
    headerName: "Điểm đánh giá",
    width: 120,
    renderCell: (params) => {
      return (
        <div style={{ color: "#f59e0b", fontWeight: "bold" }}>
          {params.row.rating} ⭐
        </div>
      );
    },
  },
  { field: "comment", headerName: "Nội dung bình luận", width: 350 },
];

export const ticketColumns = [
  { field: "_id", headerName: "Mã phiếu hỗ trợ", width: 220 },
  { field: "user", headerName: "Người gửi", width: 200 },
  { field: "title", headerName: "Tiêu đề", width: 250 },
  { field: "status", headerName: "Trạng thái", width: 130, renderCell: (params) => {
      let color = "gray";
      let label = params.row.status;
      if (params.row.status === "Open") { color = "green"; label = "Mở"; }
      if (params.row.status === "In Progress") { color = "orange"; label = "Đang xử lý"; }
      if (params.row.status === "Closed") { color = "red"; label = "Đã đóng"; }
      return <div style={{ color, fontWeight: "bold" }}>{label}</div>;
    }
  },
];

export const flightColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  { field: "airline", headerName: "Hãng bay", width: 150 },
  { field: "flightNumber", headerName: "Số hiệu", width: 100 },
  { field: "origin", headerName: "Từ", width: 150 },
  { field: "destination", headerName: "Đến", width: 150 },
  {
    field: "departureTime",
    headerName: "Khởi hành",
    width: 160,
    renderCell: (params) =>
      params.row.departureTime
        ? new Date(params.row.departureTime).toLocaleString("vi-VN")
        : "",
  },
  { field: "price", headerName: "Giá vé (VNĐ)", width: 130 },
  { field: "capacity", headerName: "Số ghế", width: 90 },
  { field: "bookedSeats", headerName: "Đã đặt", width: 90 },
];

export const carColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  { field: "brand", headerName: "Hãng xe", width: 120 },
  { field: "model", headerName: "Model", width: 150 },
  { field: "type", headerName: "Loại xe", width: 120 },
  { field: "pricePerDay", headerName: "Giá/ngày (VNĐ)", width: 140 },
  { field: "seats", headerName: "Số chỗ", width: 90 },
  { field: "transmission", headerName: "Hộp số", width: 120 },
  {
    field: "available",
    headerName: "Còn xe",
    width: 90,
    renderCell: (params) => (
      <div style={{ color: params.row.available ? "green" : "red", fontWeight: "bold" }}>
        {params.row.available ? "Có" : "Không"}
      </div>
    ),
  },
];
