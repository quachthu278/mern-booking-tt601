Tài liệu này tổng hợp toàn bộ các API endpoint (tính năng) hiện có trong hệ thống backend. 

* **Base URL**: `http://localhost:8800` (mặc định)
* **Middleware Auth**:
  * `verifyToken`: Yêu cầu người dùng đã đăng nhập (có access_token cookie hợp lệ)
  * `verifyUser`: Người dùng chỉ có quyền thao tác trên dữ liệu của chính họ, hoặc là admin.
  * `verifyAdmin`: Yêu cầu người gọi là admin hợp lệ.

---

##  1. Authentication (`/api/auth`)
Quản lý đăng ký, đăng nhập.
* `POST /api/auth/register` - Đăng ký tài khoản mới.
* `POST /api/auth/login` - Đăng nhập tài khoản.* `POST /api/auth/google` - Đăng nhập/Đăng ký bằng tài khoản Google.
* `POST /api/auth/facebook` - Đăng nhập/Đăng ký bằng tài khoản Facebook.

##  2. Users (`/api/users`)
Quản lý người dùng.
* `GET /api/users/checkauthentication` - Kiểm tra người dùng đã đăng nhập chưa (`verifyToken`).
* `GET /api/users/checkuser/:id` - Kiểm tra quyền của người dùng (tự thân hoặc admin) (`verifyUser`).
* `GET /api/users/checkadmin/:id` - Kiểm tra quyền admin (`verifyAdmin`).
* `GET /api/users/` - Lấy danh sách tất cả người dùng (`verifyAdmin`).
* `GET /api/users/:id` - Lấy thông tin tài khoản theo ID (`verifyUser`).
* `PUT /api/users/:id` - Cập nhật thông tin một người dùng (`verifyUser`).
* `DELETE /api/users/:id` - Xóa tài khoản người dùng (`verifyUser`).

## 🏨 3. Hotels & Stays (`/api/hotels`)
Quản lý thông tin khách sạn và chỗ nghỉ (Stays).
* `GET /api/hotels/` - Lấy danh sách khách sạn (có filter, limit, v.v.).
* `GET /api/hotels/find/:id` - Lấy thông tin chi tiết của 1 khách sạn theo ID.
* `GET /api/hotels/countByCity` - Đếm số lượng khách sạn theo các thành phố.
* `GET /api/hotels/countByType` - Đếm số lượng khách sạn theo các loại (hotel, apartment, resort, villa...).
* `GET /api/hotels/room/:id` - Lấy danh sách các phòng thuộc 1 khách sạn cụ thể.
* `POST /api/hotels/` - Tạo khách sạn mới (`verifyAdmin`).
* `PUT /api/hotels/:id` - Cập nhật thông tin khách sạn (`verifyAdmin`).
* `DELETE /api/hotels/:id` - Xóa khách sạn (`verifyAdmin`).

## 4. Rooms (`/api/rooms`)
Quản lý phòng nghỉ.
* `GET /api/rooms/` - Lấy danh sách tất cả các phòng.
* `GET /api/rooms/:id` - Lấy thông tin chi tiết một phòng.
* `POST /api/rooms/:hotelid` - Tạo phòng mới và gán vào một khách sạn (`verifyAdmin`).
* `PUT /api/rooms/:id` - Cập nhật thông tin của phòng (`verifyAdmin`).
* `PUT /api/rooms/availability/:id` - Cập nhật trạng thái phòng (đặt phòng, lịch không khả dụng).
* `DELETE /api/rooms/:id` - Xóa phòng (`verifyAdmin`).

##  5. Delivery (`/api/delivery`)
Quản lý đơn giao hàng/dịch vụ vận chuyển.
* `GET /api/delivery/` - Lấy danh sách tất cả đơn giao hàng (`verifyAdmin`).
* `GET /api/delivery/:id` - Lấy thông tin 1 đơn giao hàng (`verifyAdmin`).
* `POST /api/delivery/` - Tạo mới một đơn giao hàng (`verifyAdmin`).
* `PUT /api/delivery/:id` - Cập nhật thông tin đơn giao hàng (`verifyAdmin`).
* `DELETE /api/delivery/:id` - Xóa đơn giao hàng (`verifyAdmin`).

##  6. Notifications (`/api/notifications`)
Quản lý thông báo trong hệ thống.
* `GET /api/notifications/` - Lấy danh sách thông báo (`verifyAdmin`).
* `POST /api/notifications/` - Tạo thông báo mới (`verifyAdmin`).
* `PUT /api/notifications/:id/read` - Đánh dấu thông báo là đã đọc (`verifyAdmin`).

## 7. Stats & Dashboard (`/api/stats` & `/api/logs` & `/api/health` & `/api/settings`)
Quản lý trạng thái, log và cài đặt của hệ thống.
* `GET /api/stats/` - Lấy dữ liệu thống kê tổng hợp (doanh thu, số lượng user...) (`verifyAdmin`).
* `GET /api/logs/` - Xem danh sách nhật ký (logs) hệ thống (`verifyAdmin`).
* `POST /api/logs/` - Tạo log mới (`verifyAdmin`).
* `GET /api/health/` - Lấy trạng thái hoạt động (health status) của hệ thống (`verifyAdmin`).
* `GET /api/settings/` - Lấy dữ liệu cài đặt hệ thống (`verifyAdmin`).
* `PUT /api/settings/` - Cập nhật cài đặt hệ thống (`verifyAdmin`).

## 🤖 8. AI Assistant / Chatbot (`/api/ai`)
Giao tiếp với Trợ lý AI du lịch 24/7.
* `POST /api/ai/chat` - Endpoint để gửi tin nhắn gợi ý hành trình và nhận phản hồi từ AI.

## 🗂️ 9. Categories (`/api/categories`)
Quản lý danh mục.
* `GET /api/categories/` - Lấy danh sách danh mục.
* `GET /api/categories/:id` - Lấy 1 danh mục.
* `POST /api/categories/` - Tạo danh mục mới (`verifyAdmin`).
* `PUT /api/categories/:id` - Cập nhật danh mục (`verifyAdmin`).
* `DELETE /api/categories/:id` - Xóa danh mục (`verifyAdmin`).

## 🎡 10. Tours & Attractions (`/api/tours`)
Quản lý các chuyến tham quan, hoạt động vui chơi (Attractions).
* `GET /api/tours/` - Lấy danh sách tour/hoạt động tham quan.
* `GET /api/tours/find/:id` - Lấy 1 tour chi tiết.
* `GET /api/tours/countByCity` - Đếm tour theo thành phố.
* `POST /api/tours/` - Tạo tour mới (`verifyAdmin`).
* `PUT /api/tours/:id` - Cập nhật tour (`verifyAdmin`).
* `DELETE /api/tours/:id` - Xóa tour (`verifyAdmin`).

##  11. Bookings (`/api/bookings`)
Quản lý lệnh đặt chỗ / đơn hàng.
* `GET /api/bookings/` - Lấy tất cả lệnh đặt chỗ (`verifyAdmin`).
* `GET /api/bookings/:id` - Lấy thông tin chi tiết lệnh đặt chỗ (`verifyToken`).
* `POST /api/bookings/` - Đặt phòng/tạo đơn hàng mới (`verifyToken`).
* `PUT /api/bookings/:id/status` - Cập nhật trạng thái đơn hàng (`verifyAdmin`).
* `DELETE /api/bookings/:id` - Xóa lệnh đặt chỗ (`verifyAdmin`).

## 💳 12. Payments (`/api/payments`)
Quản lý thanh toán & giao dịch.
* `GET /api/payments/` - Lấy danh sách lịch sử thanh toán (`verifyAdmin`).
* `POST /api/payments/create-intent` - Đầu vào khởi tạo phiên thanh toán (`verifyToken`).
* `PUT /api/payments/:id` - Webhook/Cập nhật kết quả thanh toán (`verifyToken`).

##  13. Articles (`/api/articles`)
Quản lý bài viết blog (chuẩn SEO).
* `GET /api/articles/` - Lấy toàn bộ bài viết.
* `GET /api/articles/:id` - Lấy chi tiết 1 bài.
* `POST /api/articles/` - Đăng bài viết mới (`verifyAdmin`).
* `PUT /api/articles/:id` - Tùy chỉnh cập nhật bài viết (`verifyAdmin`).
* `DELETE /api/articles/:id` - Xóa bài viết (`verifyAdmin`).

## ✈️ 14. Flights (`/api/flights`)
Quản lý các chuyến bay.
* `GET /api/flights/` - Lấy danh sách chuyến bay.
* `GET /api/flights/find/:id` - Lấy chi tiết chuyến bay.
* `POST /api/flights/` - Tạo chuyến bay mới (`verifyAdmin`).
* `PUT /api/flights/:id` - Cập nhật chuyến bay (`verifyAdmin`).
* `DELETE /api/flights/:id` - Xóa chuyến bay (`verifyAdmin`).

## 🚗 15. Car Rentals (`/api/cars`)
Quản lý dịch vụ thuê xe.
* `GET /api/cars/` - Lấy danh sách xe cho thuê.
* `GET /api/cars/find/:id` - Lấy thông tin chi tiết xe.
* `POST /api/cars/` - Thêm xe mới (`verifyAdmin`).
* `PUT /api/cars/:id` - Cập nhật thông tin xe (`verifyAdmin`).
* `DELETE /api/cars/:id` - Xóa xe (`verifyAdmin`).

## 🚕 16. Airport Taxis (`/api/taxis`)
Quản lý dịch vụ taxi đưa đón sân bay.
* `GET /api/taxis/` - Lấy danh sách taxi sân bay.
* `GET /api/taxis/find/:id` - Lấy chi tiết taxi.
* `POST /api/taxis/` - Tạo mới dịch vụ taxi (`verifyAdmin`).
* `PUT /api/taxis/:id` - Cập nhật dịch vụ taxi (`verifyAdmin`).
* `DELETE /api/taxis/:id` - Xóa dịch vụ taxi (`verifyAdmin`).
