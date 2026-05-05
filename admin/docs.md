# Tài liệu Hệ thống: Danh sách các chức năng chính

Tài liệu này tổng hợp toàn bộ các chức năng (features) đang có mặt trong hệ thống Quản trị (Admin Dashboard) và các Backend API của ứng dụng đặt chỗ du lịch.

## 1. Chức năng Quản trị viên (Admin Dashboard)

Hệ thống quản trị cung cấp giao diện tương tác dành cho Admin với các nhóm chức năng sau:

### 1.1 Xác thực & Phân quyền (Authentication)
*   **Đăng nhập (Login):** Đăng nhập vào hệ thống quản trị.
*   **Đăng ký (Register):** Tạo tài khoản quản trị mới.
*   **Đăng xuất (Logout):** Đăng xuất khỏi hệ thống an toàn.
*   **Bảo vệ Route (Protected Routes):** Bảo vệ yêu cầu quyền truy cập đã được xác thực cho toàn bộ các trang nội bộ của admin.

### 1.2 Bảng điều khiển (Dashboard)
*   **Trang chủ tổng quan (Home/Dashboard):** Hiển thị tổng quan báo cáo.
*   **Giao diện Dark/Light Mode:** Tính năng chuyển đổi giao diện sáng (Light Mode) và tối (Dark Mode).

### 1.3 Quản lý Dịch vụ (Services Management)
*   **Tour Du lịch (Tours):** Danh sách, Thêm mới, Chỉnh sửa/Chi tiết tour.
*   **Khách sạn (Hotels):** Danh sách, Thêm mới, Chỉnh sửa/Chi tiết khách sạn.
*   **Phòng (Rooms):** Danh sách, Thêm mới, Chỉnh sửa/Chi tiết phòng.
*   **Chuyến bay (Flights):** Danh sách, Thêm mới, Chỉnh sửa/Chi tiết chuyến bay.
*   **Thuê Xe Xứ Tự lái (Cars):** Danh sách, Thêm mới, Chỉnh sửa/Chi tiết xe tự lái.
*   **Taxi (Taxis):** Danh sách, Thêm mới, Chỉnh sửa/Chi tiết dịch vụ Taxi.
*   **Hoạt động & Trải nghiệm (Activities):** Danh sách, Thêm mới, Chỉnh sửa/Chi tiết các hoạt động giải trí.

### 1.4 Quản lý Khuyến mãi & Vận tải (Coupons & Delivery)
*   **Mã giảm giá (Coupons):** Danh sách, Thêm mới, Chi tiết mã ưu đãi/giảm giá.
*   **Vận chuyển (Delivery):** Danh sách, Thêm mới, Chi tiết dịch vụ vận chuyển.

### 1.5 Quản lý Đặt chỗ (Bookings Management)
*   **Danh sách Đặt chỗ (Bookings List):** Liệt kê thông tin tất cả các giao dịch đặt chỗ của người dùng.
*   **Thêm Đặt chỗ Mới (New Booking):** Admin có thể tạo thủ công trạng thái/vé đặt chỗ cho khách hàng.
*   **Chi tiết Đặt chỗ (Single Booking):** Kiểm tra trạng thái thanh toán và thông tin của từng lượt đặt chỗ.

### 1.6 Hành chính & Người dùng (User Management)
*   **Cá nhân (Profile):** Xem chi tiết thông tin, cài đặt hồ sơ quản trị viên.
*   **Danh sách Tài khoản (Users List):** Quản lý danh sách người dùng trong hệ thống.
*   **Thêm Người dùng Mới (New User):** Cấp tài khoản mới hoặc quản lý user.
*   **Hồ sơ Người dùng (Single User):** Xem chi tiết và thao tác với hồ sơ của một tài khoản/người dùng cụ thể.

### 1.7 Chăm sóc khách hàng (Customer Support & Reviews)
*   **Đánh giá (Reviews):** Xem và quản lý các đánh giá dịch vụ từ khách hàng.
*   **Hỗ trợ (Support Tickets):** Danh sách các yêu cầu hỗ trợ và trang chi tiết (Single Ticket) để phản hồi khách hàng.

### 1.8 Báo cáo & Thống kê (Stats)
*   **Báo cáo số liệu (Stats/Analytics):** Xem các thống kê kinh doanh, theo dõi số liệu và biểu đồ dữ liệu nâng cao.

### 1.9 Mở rộng: Thanh toán (Payments), Danh mục (Categories) & Bài viết (Articles)
*   **Quản lý Thanh toán (Payments):** Theo dõi đối soát giao dịch và thông tin cổng thanh toán.
*   **Quản lý Danh mục (Categories):** Cấu hình, thêm mới và quản lý các loại danh mục phân loại dịch vụ.
*   **Quản lý Bài viết (Articles):** Tạo mới (New Article), xem danh sách các tin tức/blogs trên hệ thống.

### 1.10 Cấu hình Hệ thống (System Settings)
*   **Cài đặt (Settings):** Giao diện quản lý thiết lập chung, thay đổi thông tin website, cấu hình AI Model và quản lý API Key.

---

## 2. Hệ thống API (Backend Modules)
Tương ứng với trang Quản trị, hệ thống cấu thành từ các endpoint và service được hiện thực ở Backend bao gồm:
*   **auth:** Xử lý logic đăng nhập, đăng ký, xác thực token.
*   **users:** API quản trị thông tin người dùng (Lấy, Cập nhật, Khóa người dùng,...).
*   **tours / hotels / rooms / cars / flights / taxis / activities:** API đa dạng hóa quản lý cấu hình các loại hình dịch vụ theo module.
*   **bookings / tickets:** Quản lý mọi yêu cầu đặt vé và đặt phòng/chỗ.
*   **delivery:** Quản lý vận chuyển và giao dịch logistic.
*   **coupons:** API chuyên xử lý mã giảm giá (tạo/kiểm tra/áp dụng).
*   **categories:** Phân loại định nghĩa loại hình dịch vụ.
*   **reviews:** API xử lý hệ thống Đánh giá và Xếp hạng sản phẩm của người dùng.
*   **articles:** Module xử lý bài viết dạng content/blog.
*   **Support Tickets:** API dành cho quản lý hệ thống hỗ trợ vé tương tác (Support Tickets) nhằm trả lời kháng nghị và yêu cầu hỗ trợ từ khách hàng.
*   **stats / logs / health:** API kiểm tra trạng thái hoạt động (healthcheck), lưu trữ log và truy vấn số liệu thống kê.
*   **settings / ai:** API cung cấp cấu hình hệ thống bao gồm tích hợp Prompt/Model AI từ xa.
