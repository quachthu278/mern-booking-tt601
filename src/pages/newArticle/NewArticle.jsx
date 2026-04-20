import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewArticle = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        title: "",
        slug: "",
        category: "Tin tức",
        content: "",
        metaTitle: "",
        metaDescription: "",
        keywords: "",
        tags: "",
        status: "Published"
    });
    const [activeTab, setActiveTab] = useState("content");
    const [file, setFile] = useState("");
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const insertText = (before, after) => {
        const textarea = document.getElementById("content");
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selected = text.substring(start, end);
        const newText = text.substring(0, start) + before + selected + after + text.substring(end);
        setInfo(prev => ({ ...prev, content: newText }));
        textarea.focus();
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            let list = "";
            if (file) {
                setUploading(true);
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");
                const uploadRes = await axios.post(
                    "https://api.cloudinary.com/v1_1/booking-tt601/image/upload",
                    data
                );
                list = uploadRes.data.url;
            }

            const newArticle = {
                ...info,
                image: list,
                tags: info.tags.split(",").map(tag => tag.trim())
            };

            await axios.post("/articles", newArticle);
            navigate("/articles");
        } catch (err) {
            console.log(err);
            alert("Có lỗi xảy ra khi tạo bài viết.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="home" style={{ display: "flex", fontFamily: "Inter, sans-serif" }}>
            <Sidebar />
            <div className="homeContainer bg-slate-50/50 text-on-surface" style={{ flex: 6, minHeight: '100vh' }}>
                <Navbar />
                
                <div className="px-8 py-6 max-w-5xl mx-auto font-body">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => navigate("/articles")}
                                className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-xl notranslate">arrow_back</span>
                            </button>
                            <div>
                                <h2 className="text-2xl font-bold font-headline tracking-tight" style={{margin: 0}}>Soạn thảo bài viết</h2>
                                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider m-0">Create new article</p>
                            </div>
                        </div>

                        {/* Status Toggle */}
                        <div className="flex bg-white p-1 rounded-full border border-slate-200 shadow-sm">
                            <button 
                                type="button"
                                onClick={() => setInfo(prev => ({...prev, status: 'Published'}))}
                                className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all border-none cursor-pointer ${info.status === 'Published' ? 'bg-primary text-white shadow-md' : 'text-slate-400 hover:bg-slate-50'}`}
                            >
                                Công khai
                            </button>
                            <button 
                                type="button"
                                onClick={() => setInfo(prev => ({...prev, status: 'Draft'}))}
                                className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all border-none cursor-pointer ${info.status === 'Draft' ? 'bg-slate-700 text-white shadow-md' : 'text-slate-400 hover:bg-slate-50'}`}
                            >
                                Bản nháp
                            </button>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex gap-1 mb-8 border-b border-slate-200">
                        <button 
                            type="button"
                            onClick={() => setActiveTab("content")}
                            className={`px-6 py-3 text-sm font-bold transition-all border-none cursor-pointer relative ${activeTab === 'content' ? 'text-primary' : 'text-slate-400 opacity-60'}`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px] notranslate">description</span>
                                Nội dung chính
                            </div>
                            {activeTab === 'content' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />}
                        </button>
                        <button 
                            type="button"
                            onClick={() => setActiveTab("seo")}
                            className={`px-6 py-3 text-sm font-bold transition-all border-none cursor-pointer relative ${activeTab === 'seo' ? 'text-primary' : 'text-slate-400 opacity-60'}`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px] notranslate">search_check</span>
                                Tối ưu SEO
                            </div>
                            {activeTab === 'seo' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />}
                        </button>
                    </div>

                    <form onSubmit={handleCreate}>
                        {activeTab === "content" ? (
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                {/* Left Column - Inputs */}
                                <div className="md:col-span-4 space-y-6">
                                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Tiêu đề</label>
                                                <input id="title" required onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-bold" placeholder="Nhập tiêu đề..." />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Chuyên mục</label>
                                                <select id="category" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-slate-100 bg-slate-50 focus:bg-white outline-none text-sm font-bold">
                                                    <option value="Tin tức">Tin tức du lịch</option>
                                                    <option value="Kinh nghiệm">Kinh nghiệm</option>
                                                    <option value="Khác">Khác</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Đường dẫn (Slug)</label>
                                                <input id="slug" required onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-slate-100 bg-slate-50 focus:bg-white outline-none text-xs" placeholder="slug-bai-viet" />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold uppercase text-slate-400 mb-1 block">Tags (nhảy dấu phẩy)</label>
                                                <input id="tags" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-slate-100 bg-slate-50 focus:bg-white outline-none text-xs" placeholder="Tag 1, Tag 2..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 mb-3 block">Ảnh đại diện</label>
                                        <div className="relative group overflow-hidden rounded-xl border-2 border-dashed border-slate-200 hover:border-primary/50 transition-colors">
                                            <div className="aspect-video flex items-center justify-center bg-slate-50">
                                                {file ? (
                                                    <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="text-center">
                                                        <span className="material-symbols-outlined text-4xl text-slate-300 notranslate">add_photo_alternate</span>
                                                        <p className="text-[10px] font-bold text-slate-400 mt-2">Click để tải ảnh</p>
                                                    </div>
                                                )}
                                            </div>
                                            <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} className="absolute inset-0 opacity-0 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Editor Toolset */}
                                <div className="md:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                                    {/* Simulated Toolbar */}
                                    <div className="flex items-center gap-1 p-2 border-b border-slate-100 bg-slate-50/50">
                                        <button type="button" onClick={() => insertText("**", "**")} className="p-2 rounded hover:bg-white hover:shadow-sm text-slate-600 transition-all border-none cursor-pointer"><span className="material-symbols-outlined text-[18px] notranslate">format_bold</span></button>
                                        <button type="button" onClick={() => insertText("_", "_")} className="p-2 rounded hover:bg-white hover:shadow-sm text-slate-600 transition-all border-none cursor-pointer"><span className="material-symbols-outlined text-[18px] notranslate">format_italic</span></button>
                                        <button type="button" onClick={() => insertText("<u>", "</u>")} className="p-2 rounded hover:bg-white hover:shadow-sm text-slate-600 transition-all border-none cursor-pointer"><span className="material-symbols-outlined text-[18px] notranslate">format_underlined</span></button>
                                        <div className="w-[1px] h-4 bg-slate-200 mx-1" />
                                        <button type="button" onClick={() => insertText("\n### ", "")} className="p-2 rounded hover:bg-white hover:shadow-sm text-slate-600 transition-all border-none cursor-pointer"><span className="material-symbols-outlined text-[18px] notranslate">format_h3</span></button>
                                        <button type="button" onClick={() => insertText("\n- ", "")} className="p-2 rounded hover:bg-white hover:shadow-sm text-slate-600 transition-all border-none cursor-pointer"><span className="material-symbols-outlined text-[18px] notranslate">format_list_bulleted</span></button>
                                        <div className="w-[1px] h-4 bg-slate-200 mx-1" />
                                        <button type="button" onClick={() => insertText("[", "](url)")} className="p-2 rounded hover:bg-white hover:shadow-sm text-slate-600 transition-all border-none cursor-pointer"><span className="material-symbols-outlined text-[18px] notranslate">link</span></button>
                                        <button type="button" onClick={() => insertText("> ", "")} className="p-2 rounded hover:bg-white hover:shadow-sm text-slate-600 transition-all border-none cursor-pointer"><span className="material-symbols-outlined text-[18px] notranslate">format_quote</span></button>
                                    </div>
                                    <textarea 
                                        id="content"
                                        required
                                        value={info.content}
                                        onChange={handleChange}
                                        className="w-full flex-1 p-6 outline-none border-none resize-none text-sm leading-7 min-h-[500px]"
                                        placeholder="Kể lại những chuyến đi tuyệt vời của bạn..."
                                    ></textarea>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined notranslate">network_check</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold" style={{margin:0}}>Cấu hình SEO</h3>
                                            <p className="text-xs text-slate-400">Tối ưu hóa khả năng hiển thị của bạn trên các công cụ tìm kiếm.</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Meta Title</label>
                                            <input id="metaTitle" onChange={handleChange} className="w-full px-4 py-3 border border-slate-100 bg-slate-50 focus:bg-white rounded-xl outline-none text-sm" placeholder="SEO Title..." />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Meta Description</label>
                                            <textarea id="metaDescription" onChange={handleChange} rows="4" className="w-full px-4 py-3 border border-slate-100 bg-slate-50 focus:bg-white rounded-xl outline-none text-sm leading-relaxed" placeholder="Mô tả tóm tắt..."></textarea>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Từ khóa chính</label>
                                            <input id="keywords" onChange={handleChange} className="w-full px-4 py-3 border border-slate-100 bg-slate-50 focus:bg-white rounded-xl outline-none text-sm" placeholder="từ khóa..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Floating Footer Action */}
                        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8 z-50">
                            <div className="bg-white/90 backdrop-blur-md p-3 px-8 rounded-full shadow-2xl border border-slate-200 flex justify-between items-center">
                                <div className="hidden md:flex items-center gap-2">
                                     <span className="material-symbols-outlined text-green-500 text-[18px] notranslate">auto_fix_high</span>
                                     <span className="text-[11px] font-bold text-slate-500">Tự động lưu nháp bản mới nhất</span>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        type="button"
                                        onClick={() => navigate("/articles")}
                                        className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors border-none cursor-pointer"
                                    >
                                        Hủy bỏ
                                    </button>
                                    <button 
                                        disabled={uploading}
                                        className="px-10 py-2.5 bg-primary text-white rounded-full text-xs font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border-none cursor-pointer disabled:opacity-50"
                                    >
                                        {uploading ? "Đang xử lý..." : "Lưu & Xuất bản bài viết"}
                                        {!uploading && <span className="material-symbols-outlined text-[16px] notranslate">rocket_launch</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewArticle;
