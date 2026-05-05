import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Category = () => {
    const { data, loading, error, reFetch } = useFetch("/categories");
    const categories = Array.isArray(data) ? data : [];

    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        icon: "category",
        status: "Active"
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleOpenModal = (cat = null) => {
        if (cat) {
            setIsEditing(true);
            setCurrentCategory(cat);
            setFormData({
                name: cat.name,
                description: cat.description,
                icon: cat.icon || "category",
                status: cat.status
            });
        } else {
            setIsEditing(false);
            setFormData({
                name: "",
                description: "",
                icon: "category",
                status: "Active"
            });
        }
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`/categories/${currentCategory._id}`, formData);
            } else {
                await axios.post("/categories", formData);
            }
            setShowModal(false);
            reFetch();
        } catch (err) {
            console.error(err);
            alert("Có lỗi xảy ra khi lưu danh mục.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
            try {
                await axios.delete(`/categories/${id}`);
                reFetch();
            } catch (err) {
                console.error(err);
                alert("Lỗi khi xóa danh mục.");
            }
        }
    };

    return (
        <div className="home" style={{ display: "flex", fontFamily: "Inter, sans-serif" }}>
            <Sidebar />
            <div className="homeContainer bg-slate-50/50 text-on-surface relative" style={{ flex: 6, minHeight: '100vh', overflowX: 'hidden' }}>
                <Navbar />
                
                <div className="pt-8 px-8 pb-12 max-w-screen-2xl mx-auto font-body">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                        <div>
                            <h2 className="text-3xl font-black text-slate-800 font-headline tracking-tighter" style={{ margin: 0 }}>Quản lý Danh mục</h2>
                            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">Management & Organization</p>
                        </div>
                        <button 
                            onClick={() => handleOpenModal()}
                            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95 border-none cursor-pointer text-sm"
                        >
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Thêm Danh mục Mới</span>
                        </button>
                    </div>

                    {/* Filters & Stats Row - Fixed Grid to prevent overlap */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="lg:col-span-8 relative h-16 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center overflow-hidden group">
                            <span className="material-symbols-outlined absolute left-5 text-slate-300 group-hover:text-primary transition-colors">category_search</span>
                            <input className="w-full h-full pl-14 pr-6 bg-transparent border-none text-sm font-bold outline-none text-slate-700 placeholder:text-slate-300" placeholder="Tìm kiếm danh mục tour..." type="text" />
                        </div>
                        <div className="lg:col-span-4 flex gap-3 h-16">
                           <div className="flex-1 bg-white px-6 h-full rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all overflow-hidden relative">
                               <div className="flex flex-col">
                                   <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] leading-none mb-1">INVENTORY</span>
                                   <span className="text-sm font-black text-slate-800 uppercase leading-none">Phân loại</span>
                               </div>
                               <span className="text-2xl font-black text-primary drop-shadow-sm">{categories.length}</span>
                               <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-full translate-x-4 -translate-y-4"></div>
                           </div>
                           <button className="w-16 h-16 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all border-none cursor-pointer flex items-center justify-center text-slate-400 hover:text-primary active:scale-90 shrink-0">
                               <span className="material-symbols-outlined text-[28px]">tune</span>
                           </button>
                        </div>
                    </div>

                    {/* Grid List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {loading ? (
                            <div className="col-span-full py-20 flex flex-col items-center justify-center">
                                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                                <p className="mt-4 text-slate-400 font-bold text-sm tracking-widest">ĐANG TẢI DỮ LIỆU...</p>
                            </div>
                        ) : categories.length > 0 ? (
                            categories.map((cat) => (
                                <div key={cat._id} className="bg-white rounded-3xl p-6 group transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary flex items-center justify-center shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <span className="material-symbols-outlined text-[32px]">{cat.icon || 'category'}</span>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${cat.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400'}`}>
                                                {cat.status === 'Active' ? 'Hoạt động' : 'Tắt'}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 mt-0 tracking-tight">{cat.name}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6 m-0 h-[40px] flex-1">{cat.description || "Chưa có mô tả cho danh mục này."}</p>
                                    
                                    <div className="pt-4 border-t border-slate-50 flex gap-2">
                                        <button 
                                            onClick={() => handleOpenModal(cat)}
                                            className="flex-1 py-2.5 px-3 bg-slate-50 hover:bg-primary hover:text-white rounded-xl text-[11px] font-black transition-all flex items-center justify-center gap-2 border-none cursor-pointer text-slate-500"
                                        >
                                            <span className="material-symbols-outlined text-[16px]">edit_note</span> SỬA
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(cat._id)}
                                            className="w-10 h-10 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white rounded-xl transition-all border-none cursor-pointer flex items-center justify-center"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">delete_sweep</span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-32 bg-white rounded-[40px] border-2 border-dashed border-slate-100 text-center shadow-sm">
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                                    <span className="material-symbols-outlined text-5xl">category_search</span>
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 m-0 mb-1 tracking-tight">Chưa có danh mục nào</h4>
                                <p className="text-slate-400 text-sm mb-8">Hãy nhấn nút bên dưới để tạo danh mục đầu tiên của bạn.</p>
                                <button 
                                    onClick={() => handleOpenModal()}
                                    className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all border-none cursor-pointer"
                                >
                                    Tạo Danh Mục Ngay
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* MODAL FORM - PREMIUM VERSION */}
                {showModal && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        <style>{`
                            .voyage-force-grid-container { 
                                display: grid !important; 
                                grid-template-columns: 3fr 1fr !important; 
                                gap: 24px !important; 
                                width: 100% !important; 
                                position: static !important;
                                margin-bottom: 24px !important;
                            }
                            .voyage-force-input-field { 
                                width: 100% !important; 
                                position: static !important; 
                                display: block !important; 
                                box-sizing: border-box !important; 
                                margin: 0 !important;
                                padding: 16px 20px !important;
                                height: auto !important;
                                border: 1px solid #e2e8f0 !important;
                                border-radius: 20px !important;
                                background-color: rgba(248, 250, 252, 0.5) !important;
                                font-weight: 700 !important;
                            }
                        `}</style>
                        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500" onClick={() => setShowModal(false)}></div>
                        
                        <div className="bg-white/95 backdrop-blur-sm w-full max-w-lg rounded-[40px] shadow-[0_32px_120px_-15px_rgba(0,0,0,0.3)] relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-500 border border-white flex flex-col">
                            {/* Header Section */}
                            <div className="px-10 pt-10 pb-8 bg-gradient-to-br from-slate-50/80 to-white">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="space-y-1">
                                        <h3 className="text-3xl font-black text-slate-800 m-0 tracking-tighter leading-none">
                                            {isEditing ? "Cập nhật" : "Thêm mới"}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                                            <p className="text-[11px] font-black text-primary uppercase tracking-[0.2em] opacity-60 m-0 leading-none">
                                                {isEditing ? "EDIT VOYAGE CATEGORY" : "NEW VOYAGE FOLDER"}
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => setShowModal(false)} className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 hover:bg-slate-50 text-slate-400 hover:text-slate-800 cursor-pointer transition-all flex items-center justify-center group active:scale-90">
                                        <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform">close</span>
                                    </button>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="px-10 pb-10 space-y-8">
                                <div className="space-y-8 animate-in fade-in slide-in-from-top-2 duration-500">
                                    {/* Name & Icon Row - NUCLEAR OVERRIDE */}
                                    <div className="voyage-force-grid-container">
                                        <div className="space-y-2.5">
                                            <div className="flex items-center gap-2 mb-1">
                                                <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] pl-1 block">Tên danh mục</label>
                                                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" title="NUCLEAR FIX: Blue Dot Active"></div>
                                            </div>
                                            <input 
                                                id="categoryNameInput" 
                                                required 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                className="voyage-force-input-field" 
                                                placeholder="VD: Tour Khám phá, Nghỉ dưỡng..." 
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.12em] pl-1 block truncate">Icon ID</label>
                                            <input 
                                                id="categoryIconInput" 
                                                value={formData.icon} 
                                                onChange={handleChange} 
                                                className="voyage-force-input-field text-center" 
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Description */}
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">Mô tả tóm tắt</label>
                                        <textarea id="description" rows="3" value={formData.description} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 font-bold text-sm outline-none focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/30 transition-all resize-none shadow-inner" placeholder="Nhóm các chuyến tham quan khám phá văn hóa, lịch sử và con người..."></textarea>
                                    </div>

                                    {/* Status Segmented Control */}
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest pl-1">Trạng thái hiển thị</label>
                                        <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-100/50">
                                            <button 
                                                type="button"
                                                onClick={() => setFormData(prev => ({...prev, status: 'Active'}))}
                                                className={`px-4 py-3 rounded-xl text-[11px] font-black transition-all border-none cursor-pointer flex items-center justify-center gap-2 ${formData.status === 'Active' ? 'bg-white text-green-600 shadow-lg shadow-green-600/5 ring-1 ring-slate-100' : 'text-slate-400 hover:text-slate-500'}`}
                                            >
                                                <span className={`material-symbols-outlined text-[16px] ${formData.status === 'Active' ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
                                                HOẠT ĐỘNG
                                            </button>
                                            <button 
                                                type="button"
                                                onClick={() => setFormData(prev => ({...prev, status: 'Inactive'}))}
                                                className={`px-4 py-3 rounded-xl text-[11px] font-black transition-all border-none cursor-pointer flex items-center justify-center gap-2 ${formData.status === 'Inactive' ? 'bg-white text-slate-400 shadow-lg shadow-slate-400/5 ring-1 ring-slate-100' : 'text-slate-400 hover:text-slate-500'}`}
                                            >
                                                <span className={`material-symbols-outlined text-[16px] ${formData.status === 'Inactive' ? 'opacity-100' : 'opacity-0'}`}>visibility_off</span>
                                                TẠM TẮT
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                                    <button 
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="order-2 sm:order-1 flex-1 py-4 rounded-2xl text-[11px] font-black text-slate-400 hover:text-slate-600 hover:bg-slate-50 border-none cursor-pointer transition-all active:scale-95 tracking-widest"
                                    >
                                        HUỶ BỎ
                                    </button>
                                    <button 
                                        className="order-1 sm:order-2 flex-[2] py-4 bg-primary text-white rounded-2xl text-[11px] font-black shadow-[0_15px_30px_-5px_rgba(var(--primary-rgb),0.3)] hover:scale-[1.02] hover:shadow-primary/40 active:scale-95 transition-all border-none cursor-pointer flex items-center justify-center gap-3 tracking-[0.1em]"
                                    >
                                        <span>{isEditing ? "CẬP NHẬT NGAY" : "XÁC NHẬN TẠO MỚI"}</span>
                                        <span className="material-symbols-outlined text-[18px]">{isEditing ? "verified" : "rocket_launch"}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;
