import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
    const { data: tourData } = useFetch("/tours");
    const { data: bookingData } = useFetch("/bookings");
    const { data: userData } = useFetch("/users");

    // Calculate total revenue from bookings
    const totalRevenue = Array.isArray(bookingData) 
        ? bookingData.filter(b => ["Confirmed", "Completed", "Checked-in"].includes(b.status))
                     .reduce((acc, curr) => acc + (curr.totalPrice || 0), 0)
        : 0;

    return (
        <div className="home" style={{ display: "flex", fontFamily: "Inter, sans-serif" }}>
            <Sidebar />
            <div className="homeContainer bg-surface text-on-surface" style={{ flex: 6, minHeight: '100vh' }}>
                <Navbar />

                <main className="pt-8 pb-12 px-8 font-body">
                    {/* Welcome Header */}
                    <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Hệ thống đang hoạt động
                            </div>
                            <h1 className="text-4xl font-extrabold font-headline tracking-tighter text-on-surface" style={{ margin: 0 }}>Chào buổi sáng, Admin!</h1>
                            <p className="text-slate-500 font-body mt-2">Hôm nay hệ thống của bạn có những cập nhật mới từ các tour du lịch.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2 border-none cursor-pointer">
                                <span className="material-symbols-outlined text-lg">add_circle</span>
                                <span>Tạo Tour Mới</span>
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid - Modern Bento Style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {/* Total Revenue Stat */}
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                           <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                <span className="material-symbols-outlined text-8xl text-primary">payments</span>
                           </div>
                           <div className="flex justify-between items-start mb-4">
                               <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                                   <span className="material-symbols-outlined">account_balance_wallet</span>
                               </div>
                               <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
                           </div>
                           <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Tổng doanh thu</div>
                           <div className="text-2xl font-black font-headline text-on-surface">{totalRevenue.toLocaleString('vi-VN')}₫</div>
                        </div>

                        {/* Tours Stat */}
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                <span className="material-symbols-outlined text-8xl text-primary">explore</span>
                           </div>
                           <div className="flex justify-between items-start mb-4">
                               <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                   <span className="material-symbols-outlined">map</span>
                               </div>
                           </div>
                           <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Chuyến tham quan</div>
                           <div className="text-2xl font-black font-headline text-on-surface">{tourData?.length || 0}</div>
                        </div>

                        {/* Bookings Stat */}
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                <span className="material-symbols-outlined text-8xl text-primary">confirmation_number</span>
                           </div>
                           <div className="flex justify-between items-start mb-4">
                               <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                                   <span className="material-symbols-outlined">book_online</span>
                               </div>
                           </div>
                           <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Đơn đặt chỗ</div>
                           <div className="text-2xl font-black font-headline text-on-surface">{bookingData?.length || 0}</div>
                        </div>

                        {/* Users Stat */}
                        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                <span className="material-symbols-outlined text-8xl text-primary">group</span>
                           </div>
                           <div className="flex justify-between items-start mb-4">
                               <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                                   <span className="material-symbols-outlined">person</span>
                               </div>
                           </div>
                           <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Khách hàng</div>
                           <div className="text-2xl font-black font-headline text-on-surface">{userData?.length || 0}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Chart Section */}
                        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-slate-100">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                                    <h3 className="text-xl font-bold font-headline" style={{margin: 0}}>Phân tích doanh thu</h3>
                                </div>
                                <select className="bg-surface-container-low border-none rounded-lg px-3 py-1.5 text-xs font-bold outline-none">
                                    <option>6 tháng gần nhất</option>
                                    <option>3 tháng gần nhất</option>
                                </select>
                            </div>
                            <Chart aspect={2.5 / 1} />
                        </div>

                        {/* Side Section: Quick Actions / Tips */}
                        <div className="space-y-6">
                            <div className="bg-primary text-white p-6 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden">
                                <span className="material-symbols-outlined text-6xl absolute -right-2 -bottom-2 opacity-20 rotate-12">trending_up</span>
                                <h3 className="text-lg font-bold font-headline mb-2" style={{margin: 0}}>Mẹo tối ưu!</h3>
                                <p className="text-primary-fixed/80 text-xs leading-relaxed mb-6">Trang Tin tức của bạn đang có lượt truy cập cao. Hãy thêm nhiều bài viết về các địa danh đang HOT.</p>
                                <button className="px-4 py-2 bg-white text-primary rounded-xl text-xs font-bold hover:scale-105 transition-transform border-none cursor-pointer">Viết bài ngay</button>
                            </div>

                            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-slate-100">
                                <h3 className="text-sm font-bold font-headline uppercase leading-widest text-slate-400 mb-4" style={{margin: 0}}>Lối tắt hệ thống</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="p-3 rounded-2xl bg-surface-container-low hover:bg-primary-container/10 transition-colors flex flex-col items-center gap-2 border-none cursor-pointer group">
                                        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">settings</span>
                                        <span className="text-[10px] font-bold text-on-surface">Cài đặt</span>
                                    </button>
                                    <button className="p-3 rounded-2xl bg-surface-container-low hover:bg-primary-container/10 transition-colors flex flex-col items-center gap-2 border-none cursor-pointer group">
                                        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">description</span>
                                        <span className="text-[10px] font-bold text-on-surface">Bài viết</span>
                                    </button>
                                    <button className="p-3 rounded-2xl bg-surface-container-low hover:bg-primary-container/10 transition-colors flex flex-col items-center gap-2 border-none cursor-pointer group">
                                        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">category</span>
                                        <span className="text-[10px] font-bold text-on-surface">Danh mục</span>
                                    </button>
                                    <button className="p-3 rounded-2xl bg-surface-container-low hover:bg-primary-container/10 transition-colors flex flex-col items-center gap-2 border-none cursor-pointer group">
                                        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">analytics</span>
                                        <span className="text-[10px] font-bold text-on-surface">Báo cáo</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest Transactions Table Section */}
                    <div className="mt-10 bg-surface-container-lowest rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-8 py-6 border-b border-slate-50 flex items-center gap-3">
                             <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                             <h3 className="text-xl font-bold font-headline" style={{margin: 0}}>Giao dịch mới nhất</h3>
                        </div>
                        <div className="px-4 pb-4">
                            <Table />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
