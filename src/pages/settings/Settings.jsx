import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
    const { data, loading, error } = useFetch("/settings");
    const [info, setInfo] = useState({});
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (data) {
            setInfo(data);
        }
    }, [data]);

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setInfo((prev) => ({ ...prev, [e.target.id]: value }));
        setSaved(false);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("/api/settings", info);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (err) {
            console.log(err);
            alert("Lỗi khi cập nhật cài đặt!");
        }
    };

    if (loading) return <div className="p-20 text-center font-bold text-slate-300 animate-pulse font-body">Đang tải cấu hình hệ thống...</div>;

    return (
        <div className="settings flex min-h-screen bg-[#f1f5f9] font-body">
            <Sidebar />
            <div className="settingsContainer flex-1 flex flex-col">
                <Navbar />
                
                <div className="p-10 max-w-7xl mx-auto w-full font-body">
                    {/* Header Section: Professional Typography */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-10">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold font-headline text-slate-900 tracking-tight m-0">Cấu hình Hệ thống</h1>
                            <p className="text-slate-500 text-sm font-medium opacity-80">Quản lý nhận diện thương hiệu, thông tin liên lạc và vận hành tổng thể.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            {saved && (
                                <span className="text-green-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 animate-bounce">
                                    <span className="material-symbols-outlined text-sm filled notranslate">check_circle</span>
                                    Đã lưu thành công!
                                </span>
                            )}
                            <button 
                                type="button" 
                                onClick={handleClick}
                                className="bg-[#003B95] hover:bg-[#002b6b] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-[#003B95]/10 flex items-center gap-3 border-none cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-lg notranslate">publish</span>
                                Lưu thay đổi
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                        {/* Main Interaction Area */}
                        <div className="xl:col-span-8 space-y-10">
                            
                            {/* Card: Identity */}
                            <div className="bg-white rounded-3xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-md">
                                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003B95] flex items-center justify-center">
                                        <span className="material-symbols-outlined filled notranslate">domain</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold font-headline text-slate-800 m-0 leading-none">Thương hiệu & Website</h3>
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1.5 leading-none">Website Identity</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-bold font-label text-slate-500 uppercase tracking-[0.15em] pl-1">Tên hiển thị Website</label>
                                            <input
                                                type="text"
                                                id="siteName"
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-sm focus:bg-white focus:border-[#003B95] transition-all outline-none"
                                                value={info.siteName || ""}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-bold font-label text-slate-500 uppercase tracking-[0.15em] pl-1">Đường dẫn Logo (URL)</label>
                                            <input
                                                type="text"
                                                id="logo"
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-sm focus:bg-white focus:border-[#003B95] transition-all outline-none"
                                                value={info.logo || ""}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold font-label text-slate-500 uppercase tracking-[0.15em] pl-1">Mô tả SEO tổng quan</label>
                                        <textarea
                                            id="description"
                                            rows="3"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-sm focus:bg-white focus:border-[#003B95] transition-all outline-none resize-none"
                                            value={info.description || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Card: Contact Operations */}
                            <div className="bg-white rounded-3xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:shadow-md">
                                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                                        <span className="material-symbols-outlined filled notranslate">support_agent</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold font-headline text-slate-800 m-0 leading-none">Vận hành & Hỗ trợ</h3>
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1.5 leading-none">Operations & Contact</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold font-label text-slate-500 uppercase tracking-[0.15em] pl-1">Hotline Liên hệ</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-sm focus:bg-white focus:border-[#003B95] transition-all outline-none"
                                            value={info.phone || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold font-label text-slate-500 uppercase tracking-[0.15em] pl-1">Email nhận Booking</label>
                                        <input
                                            type="email"
                                            id="bookingEmail"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-sm focus:bg-white focus:border-[#003B95] transition-all outline-none"
                                            value={info.bookingEmail || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[11px] font-bold font-label text-slate-500 uppercase tracking-[0.15em] pl-1">Địa chỉ văn phòng</label>
                                        <input
                                            type="text"
                                            id="address"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-sm focus:bg-white focus:border-[#003B95] transition-all outline-none"
                                            value={info.address || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Status & Preview */}
                        <div className="xl:col-span-4 space-y-10">
                            
                            {/* Card: Branding Preview */}
                            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="material-symbols-outlined text-[80px] filled notranslate">token</span>
                                </div>
                                <h3 className="text-base font-bold font-headline m-0 mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                    Xem trước Logo
                                </h3>
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[160px] shadow-inner">
                                    {info.logo ? (
                                        <img src={info.logo} alt="Branding" className="max-h-24 object-contain" />
                                    ) : (
                                        <div className="text-center opacity-20 italic space-y-2">
                                            <span className="material-symbols-outlined text-4xl notranslate">image_not_supported</span>
                                            <p className="text-[10px] font-bold uppercase tracking-widest m-0">No logo found</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mt-6 flex flex-col items-center gap-1 opacity-40 italic">
                                    <p className="text-[10px] m-0 font-bold tracking-tight uppercase leading-none">Bản xem trước Logo</p>
                                    <p className="text-[8px] m-0 font-medium leading-none">Kích thước tối ưu: 512x512px</p>
                                </div>
                            </div>

                            {/* Card: Advanced Config */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                                <h3 className="text-base font-bold font-headline text-slate-800 m-0 mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                                    Cấu hình Nâng cao
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#003B95] m-0">Maintenance Mode</p>
                                            <p className="text-[11px] font-medium text-slate-500 m-0">Đóng website bảo trì</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                id="maintenanceMode" 
                                                className="sr-only peer"
                                                checked={info.maintenanceMode || false}
                                                onChange={handleChange}
                                            />
                                            <div className="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003B95]"></div>
                                        </label>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold font-label text-slate-500 uppercase tracking-[0.15em] pl-1">Văn bản bản quyền (Footer)</label>
                                        <input
                                            type="text"
                                            id="footerText"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-xs focus:bg-white focus:border-[#003B95] transition-all outline-none"
                                            value={info.footerText || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold font-label text-slate-500 uppercase tracking-widest pl-1">AI API Key (Gemini)</label>
                                        <input
                                            type="password"
                                            id="geminiApiKey"
                                            placeholder="••••••••••••••••••••••••"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 font-medium text-xs focus:bg-white focus:border-[#003B95] transition-all outline-none"
                                            value={info.geminiApiKey || ""}
                                            onChange={handleChange}
                                        />
                                        <p className="text-[10px] text-slate-400 font-medium px-1 m-0">Bỏ trống để dùng Key mặc định mặc định (.env).</p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-50 opacity-50 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                            Server API Active
                                        </div>
                                        <div>v1.2.4 PRO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
