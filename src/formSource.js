export const userInputs = [
  {
    id: "username",
    label: "Username",
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
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "country",
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "USA",
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
  { id: "user", label: "User ID", type: "text", placeholder: "User ID" },
  { id: "productType", label: "Product Type", type: "text", placeholder: "Hotel, Flight..." },
  { id: "productId", label: "Product ID", type: "text", placeholder: "Product ID" },
  { id: "checkIn", label: "Check In Date", type: "date", placeholder: "" },
  { id: "checkOut", label: "Check Out Date", type: "date", placeholder: "" },
  { id: "totalPrice", label: "Total Price", type: "number", placeholder: "100" },
  { id: "specialRequests", label: "Special Requests", type: "text", placeholder: "Notes" },
];

export const flightInputs = [
  { id: "airline", label: "Hãng hàng không", type: "text", placeholder: "Vietnam Airlines" },
  { id: "flightNumber", label: "Số hiệu chuyến bay", type: "text", placeholder: "VN123" },
  { id: "origin", label: "Điểm khởi hành", type: "text", placeholder: "Hà Nội (HAN)" },
  { id: "destination", label: "Điểm đến", type: "text", placeholder: "Hồ Chí Minh (SGN)" },
  { id: "departureTime", label: "Giờ khởi hành", type: "datetime-local", placeholder: "" },
  { id: "arrivalTime", label: "Giờ đến nơi", type: "datetime-local", placeholder: "" },
  { id: "price", label: "Giá vé (VNĐ)", type: "number", placeholder: "1500000" },
  { id: "capacity", label: "Sức chứa (số ghế)", type: "number", placeholder: "180" },
];

export const carInputs = [
  { id: "brand", label: "Hãng xe", type: "text", placeholder: "Toyota" },
  { id: "model", label: "Model xe", type: "text", placeholder: "Camry 2.5Q" },
  { id: "type", label: "Loại xe", type: "text", placeholder: "Sedan / SUV / Van" },
  { id: "pricePerDay", label: "Giá thuê / ngày (VNĐ)", type: "number", placeholder: "800000" },
  { id: "seats", label: "Số chỗ ngồi", type: "number", placeholder: "5" },
  { id: "transmission", label: "Hộp số (Automatic/Manual)", type: "text", placeholder: "Automatic" },
];