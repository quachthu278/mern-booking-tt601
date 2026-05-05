import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";

const Payment = () => {
    const { data, loading, error } = useFetch("/bookings");
    const [searchTerm, setSearchTerm] = React.useState("");
    const [statusFilter, setStatusFilter] = React.useState("Tất cả");

    // Chỉ dùng Array methods nếu data thực sự là một mảng
    const allBookings = Array.isArray(data) ? data : [];

    // Filter data client-side
    const filteredBookings = allBookings.filter(b => {
        const matchesSearch = b.user?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             b._id?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "Tất cả" || 
                             (statusFilter === "Đã thanh toán" && ["Confirmed", "Completed", "Checked-in"].includes(b.status)) ||
                             (statusFilter === "Chưa thanh toán" && b.status === "Pending") ||
                             (statusFilter === "Đã hoàn tiền" && b.status === "Cancelled");
        return matchesSearch && matchesStatus;
    });

    const totalRevenue = allBookings.filter(b => ["Confirmed", "Completed", "Checked-in"].includes(b.status)).reduce((acc, curr) => acc + (curr.totalPrice || 0), 0) || 0;
    const successCount = allBookings.filter(b => ["Confirmed", "Completed", "Checked-in"].includes(b.status)).length || 0;
    const pendingRevenue = allBookings.filter(b => b.status === "Pending").reduce((acc, curr) => acc + (curr.totalPrice || 0), 0) || 0;
    const pendingCount = allBookings.filter(b => b.status === "Pending").length || 0;

    // Calculate Weekly Data for Chart (Mon-Sun)
    const getWeeklyData = () => {
        const days = ["Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "CN"];
        const revenuePerDay = [0, 0, 0, 0, 0, 0, 0];
        const pendingPerDay = [0, 0, 0, 0, 0, 0, 0];
        
        allBookings.forEach(b => {
            const date = new Date(b.createdAt);
            let dayIndex = date.getDay() - 1; // 0=Mon, 6=Sun
            if (dayIndex === -1) dayIndex = 6; // Sunday fix
            
            if (["Confirmed", "Completed", "Checked-in"].includes(b.status)) {
                revenuePerDay[dayIndex] += b.totalPrice || 0;
            } else if (b.status === "Pending") {
                pendingPerDay[dayIndex] += b.totalPrice || 0;
            }
        });

        const maxVal = Math.max(...revenuePerDay, ...pendingPerDay, 1);
        return days.map((day, i) => ({
            label: day,
            revHeight: (revenuePerDay[i] / maxVal) * 100,
            pendHeight: (pendingPerDay[i] / maxVal) * 100,
            revenue: revenuePerDay[i]
        }));
    };

    const weeklyStats = getWeeklyData();

    return (
        <div className="home" style={{ display: "flex", fontFamily: "Inter, sans-serif" }}>
            <Sidebar />
            <div className="homeContainer bg-surface text-on-surface" style={{ flex: 6, minHeight: '100vh' }}>
                <Navbar />
                
                {/* Main Content Area from Template */}
                <div className="pt-8 pb-12 px-8 font-body">
                    {/* Header Section */}
                    <div className="mb-8 flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface" style={{ margin: 0 }}>Quản lý Thanh toán</h1>
                            <p className="text-slate-500 font-body mt-1">Theo dõi và quản lý các luồng doanh thu từ khách hàng.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-surface-container-lowest text-on-surface font-semibold rounded-lg flex items-center gap-2 hover:bg-surface-container-high transition-colors" style={{ border: 'none', cursor: 'pointer' }}>
                                <span className="material-symbols-outlined text-xl" data-icon="file_download">file_download</span>
                                <span>Xuất báo cáo</span>
                            </button>
                        </div>
                    </div>

                    {/* Summary Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Total Revenue */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-6xl" data-icon="account_balance_wallet">account_balance_wallet</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold font-inter uppercase tracking-wider text-slate-500">Tổng doanh thu</span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]" data-icon="trending_up">trending_up</span>
                                    +12.5%
                                </span>
                            </div>
                            <div className="text-3xl font-extrabold font-headline text-primary tracking-tight">{totalRevenue.toLocaleString('vi-VN')}₫</div>
                            <div className="mt-2 text-xs text-slate-400 font-body">Từ các giao dịch thành công</div>
                        </div>

                        {/* Successful Transactions */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-6xl" data-icon="check_circle">check_circle</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold font-inter uppercase tracking-wider text-slate-500">Giao dịch thành công</span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]" data-icon="trending_up">trending_up</span>
                                    +8.2%
                                </span>
                            </div>
                            <div className="text-3xl font-extrabold font-headline text-on-surface tracking-tight">{successCount}</div>
                            <div className="mt-2 text-xs text-slate-400 font-body">Tổng số giao dịch thành công</div>
                        </div>

                        {/* Pending Payments */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group border-l-4 border-tertiary">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-6xl" data-icon="pending">pending</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold font-inter uppercase tracking-wider text-slate-500">Đang chờ xử lý</span>
                                <span className="px-2 py-1 bg-tertiary-fixed text-tertiary text-[10px] font-bold rounded-full flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]" data-icon="schedule">schedule</span>
                                    24h qua
                                </span>
                            </div>
                            <div className="text-3xl font-extrabold font-headline text-tertiary tracking-tight">{pendingRevenue.toLocaleString('vi-VN')}₫</div>
                            <div className="mt-2 text-xs text-slate-400 font-body">{pendingCount} giao dịch chưa xác nhận</div>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="bg-surface-container-low p-4 rounded-xl mb-6 flex flex-wrap items-center gap-4">
                        <div className="flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Mã Giao dịch / Khách</label>
                            <input 
                                className="w-full bg-white border-none rounded-lg text-sm px-4 py-2 shadow-sm focus:ring-2 focus:ring-primary/20" 
                                placeholder="Tìm theo tên hoặc mã..." 
                                type="text" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="w-48">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Phương thức</label>
                            <select className="w-full bg-white border-none rounded-lg text-sm px-4 py-2 shadow-sm focus:ring-2 focus:ring-primary/20">
                                <option>Tất cả</option>
                                <option>Visa / Mastercard</option>
                                <option>Chuyển khoản</option>
                                <option>Ví điện tử</option>
                            </select>
                        </div>
                        <div className="w-48">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Trạng thái</label>
                            <select 
                                className="w-full bg-white border-none rounded-lg text-sm px-4 py-2 shadow-sm focus:ring-2 focus:ring-primary/20"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option>Tất cả</option>
                                <option>Đã thanh toán</option>
                                <option>Chưa thanh toán</option>
                                <option>Đã hoàn tiền</option>
                            </select>
                        </div>
                        <div className="w-48">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Khoảng ngày</label>
                            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm h-[36px]">
                                <span className="material-symbols-outlined text-sm text-slate-400" data-icon="calendar_today">calendar_today</span>
                                <span className="text-sm">01/10 - 15/10</span>
                            </div>
                        </div>
                        <div className="self-end pb-1">
                            <button className="bg-primary text-white w-10 h-10 rounded-lg hover:scale-105 transition-transform flex items-center justify-center border-none cursor-pointer">
                                <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                            </button>
                        </div>
                    </div>

                    {/* Lịch sử thanh toán Section */}
                    <div className="mb-4">
                        <h2 className="text-xl font-bold font-headline">Lịch sử thanh toán</h2>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-high border-none">
                                    <th className="px-6 py-4 text-[11px] font-bold font-inter uppercase tracking-widest text-slate-500">Mã giao dịch</th>
                                    <th className="px-6 py-4 text-[11px] font-bold font-inter uppercase tracking-widest text-slate-500">Khách hàng</th>
                                    <th className="px-6 py-4 text-[11px] font-bold font-inter uppercase tracking-widest text-slate-500">Tour</th>
                                    <th className="px-6 py-4 text-[11px] font-bold font-inter uppercase tracking-widest text-slate-500">Ngày</th>
                                    <th className="px-6 py-4 text-[11px] font-bold font-inter uppercase tracking-widest text-slate-500">Phương thức</th>
                                    <th className="px-6 py-4 text-[11px] font-bold font-inter uppercase tracking-widest text-slate-500">Số tiền</th>
                                    <th className="px-6 py-4 text-[11px] font-bold font-inter uppercase tracking-widest text-slate-500">Trạng thái</th>
                                    <th className="px-6 py-4 text-[11px] font-bold font-inter uppercase tracking-widest text-slate-500 text-right">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {loading ? (
                                    <tr><td colSpan="8" className="px-6 py-4 text-center">Đang tải dữ liệu...</td></tr>
                                ) : filteredBookings.length > 0 ? (
                                    filteredBookings.slice().reverse().map((booking) => (
                                        <tr key={booking._id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-bold text-primary">#{booking._id.slice(-5).toUpperCase()}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                                                        {booking.user ? booking.user.substring(0, 2).toUpperCase() : "NA"}
                                                    </div>
                                                    <div className="text-sm font-semibold">{booking.user}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm max-w-[150px] truncate">{booking.productType} - {booking.productId.slice(-4)}</td>
                                            <td className="px-6 py-4 text-sm text-slate-500">{new Date(booking.createdAt).toLocaleDateString("vi-VN")}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-lg text-slate-400" data-icon="credit_card">credit_card</span>
                                                    <span className="text-xs font-medium">Hệ thống</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold">{booking.totalPrice?.toLocaleString('vi-VN')}₫</td>
                                            <td className="px-6 py-4">
                                                {booking.status === "Pending" && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-1.5"></span>Chưa thanh toán</span>}
                                                {["Confirmed", "Completed", "Checked-in"].includes(booking.status) && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>Đã thanh toán</span>}
                                                {booking.status === "Cancelled" && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5"></span>Đã hủy</span>}
                                            </td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <button className="text-primary hover:text-blue-800 font-semibold text-xs transition-colors bg-transparent border-none cursor-pointer">Chi tiết</button>
                                                <button className="text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer flex-inline align-middle">
                                                    <span className="material-symbols-outlined text-lg" data-icon="print">print</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr><td colSpan="8" className="px-6 py-20 text-center text-slate-400">Không tìm thấy giao dịch nào phù hợp.</td></tr>
                                )}
                            </tbody>
                        </table>
                        
                        {/* Pagination */}
                        <div className="px-6 py-4 bg-surface-container-low flex justify-between items-center">
                            <div className="text-xs text-slate-500 font-medium">Hiển thị danh sách của {filteredBookings.length} giao dịch</div>
                            <div className="flex gap-1" style={{ alignItems: 'center' }}>
                                <button className="p-2 bg-white rounded border border-outline-variant/30 text-slate-400 hover:text-primary transition-colors flex items-center justify-center cursor-pointer">
                                    <span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
                                </button>
                                <button className="px-3 py-1 bg-primary text-white rounded text-xs font-bold border-none cursor-pointer" style={{ height: 'max-content' }}>1</button>
                                <button className="px-3 py-1 bg-white border border-outline-variant/30 rounded text-xs font-medium hover:bg-slate-50 cursor-pointer" style={{ height: 'max-content' }}>2</button>
                                <button className="px-3 py-1 bg-white border border-outline-variant/30 rounded text-xs font-medium hover:bg-slate-50 cursor-pointer" style={{ height: 'max-content' }}>3</button>
                                <button className="p-2 bg-white rounded border border-outline-variant/30 text-slate-400 hover:text-primary transition-colors flex items-center justify-center cursor-pointer">
                                    <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Extra Section: Payment Method Performance (Bento Style) */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-headline font-bold text-lg m-0">Biểu đồ doanh thu tuần</h3>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-primary rounded-full"></span>
                                        <span className="text-xs text-slate-500">Đã nhận</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-tertiary-fixed-dim rounded-full"></span>
                                        <span className="text-xs text-slate-500">Đang chờ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 w-full flex items-end justify-between gap-4 px-4 pt-4">
                                {weeklyStats.map((dayData, idx) => (
                                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full group/bar relative">
                                        <div className="w-full flex items-end gap-1 h-full">
                                            <div className="bg-primary/20 w-1/2 rounded-t-sm transition-all duration-500" style={{ height: `${dayData.pendHeight}%` }}></div>
                                            <div className="bg-primary w-1/2 rounded-t-sm transition-all duration-500" style={{ height: `${dayData.revHeight}%` }}></div>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">{dayData.label}</span>
                                        {/* Tooltip on Hover */}
                                        <div className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                            {dayData.revenue.toLocaleString()}₫
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-primary-container rounded-xl p-6 text-white flex flex-col justify-between shadow-sm">
                            <div>
                                <h3 className="font-headline font-bold text-lg mb-2 text-white">Quản lý hóa đơn</h3>
                                <p className="text-xs text-white/70 leading-relaxed mb-6">Xuất hóa đơn điện tử hoặc in biên lai cho khách hàng và đối tác.</p>
                            </div>
                            <div className="space-y-3" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <button className="w-full py-2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-lg text-sm font-semibold transition-colors text-white border-none cursor-pointer">Lịch sử hóa đơn đã xuất</button>
                                <button className="w-full py-2 bg-white text-primary rounded-lg text-sm font-bold shadow-lg shadow-black/10 hover:scale-[1.02] transition-transform border-none cursor-pointer flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm" data-icon="receipt_long">receipt_long</span>
                                    Tạo hóa đơn mới
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;
