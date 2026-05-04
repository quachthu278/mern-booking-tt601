export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
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
    headerName: "Số điện thoại",
    width: 100,
  },
  {
    field: "isBlocked",
    headerName: "Trạng thái",
    width: 130,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.isBlocked ? "blocked" : "active"}`}>
          {params.row.isBlocked ? "Bị khóa" : "Hoạt động"}
        </div>
      );
    },
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
  { field: "price", headerName: "Giá", width: 120 },
];

export const bookingColumns = [
  { field: "_id", headerName: "ID Đặt chỗ", width: 220 },
  { field: "user", headerName: "Người dùng", width: 150 },
  { field: "productType", headerName: "Loại sản phẩm", width: 120 },
  {
    field: "checkIn",
    headerName: "Check-In",
    width: 120,
    renderCell: (params) => {
      return params.row.checkIn ? new Date(params.row.checkIn).toLocaleDateString('vi-VN') : "";
    }
  },
  {
    field: "checkOut",
    headerName: "Check-Out",
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
  { field: "totalPrice", headerName: "Tổng giá", width: 100 },
];

export const reviewColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "user", headerName: "Người dùng (ID)", width: 200 },
  { field: "product", headerName: "Sản phẩm (ID)", width: 200 },
  { field: "rating", headerName: "Đánh giá", width: 100 },
  { field: "comment", headerName: "Bình luận", width: 300 },
];

export const ticketColumns = [
  { field: "_id", headerName: "Mã hỗ trợ", width: 220 },
  { field: "user", headerName: "Người dùng (ID)", width: 200 },
  { field: "title", headerName: "Tiêu đề", width: 250 },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "updatedAt",
    headerName: "Cập nhật cuối",
    width: 150,
    renderCell: (params) => {
      return params.row.updatedAt ? new Date(params.row.updatedAt).toLocaleDateString('vi-VN') : "";
    }
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "name", headerName: "Tên", width: 200 },
  { field: "type", headerName: "Loại", width: 100 },
  { field: "city", headerName: "Thành phố", width: 150 },
  { field: "cheapestPrice", headerName: "Giá rẻ nhất", width: 120 },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "title", headerName: "Tiêu đề", width: 200 },
  { field: "desc", headerName: "Mô tả", width: 250 },
  { field: "price", headerName: "Giá", width: 100 },
  { field: "maxPeople", headerName: "Số người tối đa", width: 120 },
];

export const flightColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "flightNumber", headerName: "Số hiệu", width: 100 },
  { field: "airline", headerName: "Hãng bay", width: 150 },
  { field: "origin", headerName: "Từ", width: 120 },
  { field: "destination", headerName: "Đến", width: 120 },
  { field: "price", headerName: "Giá", width: 100 },
];

export const carColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "brand", headerName: "Hãng", width: 120 },
  { field: "model", headerName: "Kiểu xe", width: 150 },
  { field: "type", headerName: "Loại", width: 120 },
  { field: "pricePerDay", headerName: "Giá/Ngày", width: 100 },
];

export const taxiColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "company", headerName: "Công ty", width: 150 },
  { field: "carModel", headerName: "Dòng xe", width: 150 },
  { field: "driverName", headerName: "Tài xế", width: 150 },
  { field: "price", headerName: "Giá", width: 100 },
];

export const activityColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "title", headerName: "Tên hoạt động", width: 250 },
  { field: "city", headerName: "Thành phố", width: 150 },
  { field: "price", headerName: "Giá", width: 100 },
  { field: "duration", headerName: "Thời lượng", width: 120 },
];

export const couponColumns = [
  { field: "code", headerName: "Mã", width: 150 },
  { field: "discountValue", headerName: "Giá trị", width: 100 },
  { field: "discountType", headerName: "Loại", width: 120 },
  { 
    field: "isActive", 
    headerName: "Trạng thái", 
    width: 120, 
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.isActive ? "active" : "blocked"}`}>
          {params.row.isActive ? "Hiệu lực" : "Hết hạn"}
        </div>
      );
    } 
  },
];

export const deliveryColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "product", headerName: "Sản phẩm", width: 200 },
  { field: "customer", headerName: "Khách hàng", width: 150 },
  { field: "status", headerName: "Trạng thái", width: 120 },
];


