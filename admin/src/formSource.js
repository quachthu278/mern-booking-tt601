export const userInputs = [
  {
    id: "username",
    label: "Tên người dùng",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: "phone",
    label: "Số điện thoại",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: "password",
    label: "Mật khẩu",
    type: "password",
  },
  {
    id: "country",
    label: "Quốc gia",
    type: "text",
    placeholder: "Việt Nam",
  },
  {
    id: "city",
    label: "Thành phố",
    type: "text",
    placeholder: "Hà Nội",
  },
];

export const tourInputs = [
  { id: "tourCode", label: "Mã Tour", type: "text", placeholder: "DN01" },
  { id: "title", label: "Tên Tour", type: "text", placeholder: "Khám Phá Đà Nẵng 3N2Đ" },
  { id: "duration", label: "Thời gian", type: "text", placeholder: "3 ngày 2 đêm" },
  { id: "price", label: "Giá (VNĐ)", type: "number", placeholder: "3490000" },
  { id: "videoUrl", label: "YouTube Video Link", type: "text", placeholder: "https://www.youtube.com/watch?v=..." },
  { id: "highlights", label: "Điểm nổi bật (Cách nhau bằng dấu phẩy)", type: "text", placeholder: "Bà Nà Hills, Cầu Vàng, Biển Mỹ Khê" },
];

export const bookingInputs = [
  { id: "user", label: "ID Người dùng", type: "text", placeholder: "Mã ID Người dùng" },
  { id: "productType", label: "Loại Sản Phẩm", type: "text", placeholder: "Ví dụ: Khách sạn, Chuyến bay..." },
  { id: "productId", label: "ID Sản phẩm", type: "text", placeholder: "Mã ID Sản phẩm" },
  { id: "checkIn", label: "Ngày nhận (Check In)", type: "date", placeholder: "" },
  { id: "checkOut", label: "Ngày trả (Check Out)", type: "date", placeholder: "" },
  { id: "totalPrice", label: "Tổng Giá", type: "number", placeholder: "100" },
  { id: "specialRequests", label: "Yêu cầu đặc biệt", type: "text", placeholder: "Ghi chú thêm" },
];

export const hotelInputs = [
  { id: "name", label: "Tên khách sạn", type: "text", placeholder: "Khách sạn của tôi" },
  { id: "type", label: "Loại hình", type: "text", placeholder: "khách sạn, biệt thự..." },
  { id: "city", label: "Thành phố", type: "text", placeholder: "Đà Nẵng" },
  { id: "address", label: "Địa chỉ", type: "text", placeholder: "123 Đường Điện Biên Phủ" },
  { id: "distance", label: "Khoảng cách đến TTTP (m)", type: "text", placeholder: "500" },
  { id: "title", label: "Tiêu đề", type: "text", placeholder: "Khách sạn tốt nhất" },
  { id: "desc", label: "Mô tả", type: "text", placeholder: "Nhập mô tả..." },
  { id: "cheapestPrice", label: "Giá rẻ nhất", type: "text", placeholder: "100" },
];

export const roomInputs = [
  { id: "title", label: "Tiêu đề phòng", type: "text", placeholder: "Phòng 2 giường" },
  { id: "desc", label: "Mô tả", type: "text", placeholder: "Giường đôi lớn, 1 phòng tắm" },
  { id: "price", label: "Giá tiền", type: "number", placeholder: "100" },
  { id: "maxPeople", label: "Số người tối đa", type: "number", placeholder: "2" },
];

export const flightInputs = [
  { id: "flightNumber", label: "Số hiệu chuyến bay", type: "text", placeholder: "VN123" },
  { id: "airline", label: "Hãng hàng không", type: "text", placeholder: "Vietnam Airlines" },
  { id: "origin", label: "Điểm đi", type: "text", placeholder: "Hà Nội" },
  { id: "destination", label: "Điểm đến", type: "text", placeholder: "Đà Nẵng" },
  { id: "departureTime", label: "Thời gian khởi hành", type: "datetime-local", placeholder: "" },
  { id: "arrivalTime", label: "Thời gian đến", type: "datetime-local", placeholder: "" },
  { id: "price", label: "Giá vé", type: "number", placeholder: "1000000" },
  { id: "capacity", label: "Số lượng ghế", type: "number", placeholder: "200" },
];

export const carInputs = [
  { id: "brand", label: "Hãng xe", type: "text", placeholder: "Toyota" },
  { id: "model", label: "Mẫu xe (Model)", type: "text", placeholder: "Camry" },
  { id: "type", label: "Loại xe (Sedan, SUV...)", type: "text", placeholder: "Sedan" },
  { id: "pricePerDay", label: "Giá thuê mỗi ngày", type: "number", placeholder: "500000" },
  { id: "seats", label: "Số lượng ghế", type: "number", placeholder: "5" },
  { id: "transmission", label: "Hộp số (Tự động/Sàn)", type: "text", placeholder: "Tự động" },
];

export const taxiInputs = [
  { id: "company", label: "Hãng taxi/đưa đón", type: "text", placeholder: "Grab" },
  { id: "carModel", label: "Mẫu xe", type: "text", placeholder: "Kia Morning" },
  { id: "driverName", label: "Tên tài xế", type: "text", placeholder: "Nguyễn Văn A" },
  { id: "price", label: "Giá cước", type: "number", placeholder: "50000" },
  { id: "maxPassengers", label: "Số khách tối đa", type: "number", placeholder: "4" },
  { id: "from", label: "Điểm đón", type: "text", placeholder: "Sân bay Đà Nẵng" },
  { id: "to", label: "Điểm đến", type: "text", placeholder: "Khách sạn Mường Thanh" },
];

export const activityInputs = [
  { id: "title", label: "Tiêu đề Hoạt động", type: "text", placeholder: "Tour tham quan Thành Phố" },
  { id: "city", label: "Thành phố", type: "text", placeholder: "Hà Nội" },
  { id: "desc", label: "Mô tả", type: "text", placeholder: "Một hoạt động tuyệt vời" },
  { id: "price", label: "Giá tiền", type: "number", placeholder: "200000" },
  { id: "duration", label: "Thời lượng", type: "text", placeholder: "4 tiếng" },
  { id: "provider", label: "Đơn vị cung cấp", type: "text", placeholder: "Travel Co" },
];

export const couponInputs = [
  { id: "code", label: "Mã giảm giá", type: "text", placeholder: "SAVE10" },
  { id: "discountType", label: "Loại (phần trăm/cố định)", type: "text", placeholder: "percentage" },
  { id: "discountValue", label: "Giá trị giảm", type: "number", placeholder: "10" },
  { id: "expiryDate", label: "Ngày hết hạn", type: "date", placeholder: "" },
  { id: "usageLimit", label: "Giới hạn sử dụng", type: "number", placeholder: "100" },
];

export const deliveryInputs = [
  { id: "product", label: "Tên Sản Phẩm", type: "text", placeholder: "Gói Tour Du Lịch" },
  { id: "customer", label: "Tên Khách Hàng", type: "text", placeholder: "Nguyễn Văn B" },
  { id: "status", label: "Trạng thái", type: "text", placeholder: "Đang chờ" },
];