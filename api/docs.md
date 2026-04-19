# Tài liệu Cấu trúc & Chức năng Hệ thống Quản trị (Booking Admin)

Tài liệu này tổng hợp danh sách tất cả các trang, đường dẫn (URL) và nhóm chức năng đã được xây dựng và kết nối trong ứng dụng Quản trị viên, dựa trên cấu hình Router mới nhất.

---

## 🔐 1. Xác thực & Phân quyền (Authentication)

*   **`/login`** - **Trang Đăng nhập**: Nơi quản trị viên hoặc nhân viên xác thực thông tin đăng nhập vào hệ thống.
*   **`/register`** - **Trang Đăng ký**: Cho phép tạo các tài khoản cấp Quản trị viên nội bộ mới.

---

## 📊 2. Bảng điều khiển Trung tâm (Dashboard)

*   **`/`** - **Trang Chủ (Home)**: Bức tranh toàn cảnh, tóm tắt các số liệu như Tổng doanh thu, Tổng số người dùng, Thống kê đơn đặt chỗ cùng các lối tắt thao tác nhanh (Tạo Tour, Cài đặt).

---

## 🗃️ 3. Quản lý Hệ thống Cốt lõi (Core Management)

Các hoạt động lõi sinh ra doanh thu trong mảng Booking.

### Khách hàng (Users)
*   **`/users`** - **Danh sách Khách hàng**: Liệt kê toàn bộ người dùng đã đăng ký trên hệ thống.
*   **`/users/:userId`** - **Chi tiết Khách hàng**: Xem thông tin cụ thể (Email, SĐT) và lịch sử hoạt động của người dùng cụ thể.
*   **`/users/new`** - **Thêm Khách hàng mới**: Form nhập liệu tạo thủ công hồ sơ người dùng mới.

### Chuyến tham quan & Hoạt động (Tours)
*   **`/tours`** - **Danh sách Tour**: Tổng hợp tất cả các gói Tour nội địa, quốc tế đang hoạt động.
*   **`/tours/:productId`** - **Chi tiết/Tùy chỉnh Tour**: Giao diện cập nhật hình ảnh, giá cả cho một tour có sẵn.
*   **`/tours/new`** - **Tạo Tour mới**: Điền thông tin chuẩn bị mở bán tour mới (Có upload ảnh minh họa & cấu hình tính năng nổi bật).

### Đặt chỗ (Bookings - Đơn hàng)
*   **`/bookings`** - **Danh sách Đặt chỗ**: Nơi theo dõi các giao dịch từ khách hàng (chờ xác nhận, hoàn tất, đã duyệt).
*   **`/bookings/:productId`** - **Chi tiết Biên lai/Đặt phòng**: Kiểm tra dòng tiền và yêu cầu đặc biệt của khách hàng để xử lý trạng thái.
*   **`/bookings/new`** - **Tạo lệnh Đặt chỗ**: Quản trị viên tự tay book phòng/book dịch vụ cho khách khi họ yêu cầu trực tiếp qua Hotline.

---

## 🛒 4. Tính năng Mở rộng & Phụ trợ

*   **`/stats`** - **Báo cáo Thống kê**: Trang xem lại toàn bộ doanh thu với các chỉ số phân tích, biểu đồ sâu hơn 6 tháng gần nhất.
*   **`/payments`** - **Dòng tiền & Thanh toán**: Đối soát lịch sử nạp rút, xác thực giao dịch Momo/Banking/Stripe.
*   **`/categories`** - **Danh mục hệ thống**: Quản lý nhóm phân loại dịch vụ (VD: Khách sạn 5 sao, Tour giá rẻ, Hoạt động ngoài trời).

---

## 📰 5. Truyền thông & Tối ưu SEO (Nội dung)

*   **`/articles`** - **Quản lý Bài viết/Blog**: Danh sách các bài tin tức du lịch, kinh nghiệm phượt.
*   **`/articles/new`** - **Soạn thảo Bài viết**: Trình soạn thảo chuyên nghiệp có kèm chuẩn tối ưu Meta Title, Description và Ảnh bìa để đăng bài kéo tương tác cho Website chính.

---

## ⚙️ 6. Cấu hình Cá nhân & Cài đặt

*   **`/profile`** - **Hồ sơ Cá nhân**: Trang thông tin cá nhân của Quản trị viên đang vận hành hệ thống.
*   **`/settings`** - **Cài đặt Tổng**: Các cấu hình hệ thống chuyên sâu (như Tùy chọn thay đổi mật khẩu, phân quyền,...).

---

> ⚠️ **Bảo mật (Security):** Tắt cả các Router và Link trong nhóm từ số `2` đến `6` đều yêu cầu xác thực (`ProtectedRoute`). Bất cứ ai chưa đăng nhập đều bị điều hướng văng trở lại màn hình Đăng nhập (Login).
