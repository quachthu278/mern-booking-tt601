import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Article = () => {
    const navigate = useNavigate();
    const { data, loading, error } = useFetch("/articles");
    const articles = Array.isArray(data) ? data : [];

    return (
        <div className="home" style={{ display: "flex", fontFamily: "Inter, sans-serif" }}>
            <Sidebar />
            <div className="homeContainer bg-surface text-on-surface relative" style={{ flex: 6, minHeight: '100vh', overflowX: 'hidden' }}>
                <Navbar />
                
                {/* Page Canvas */}
                <div className="pt-8 px-8 pb-12 max-w-screen-2xl mx-auto font-body">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                        <div>
                            <h2 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight" style={{ margin: 0 }}>Quản lý Bài viết</h2>
                            <p className="text-slate-500 font-body mt-1">Sáng tạo và quản lý các nội dung tin tức, blog du lịch của bạn.</p>
                        </div>
                        <button 
                            onClick={() => navigate("/articles/new")}
                            className="flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-primary-container/20 transition-all active:scale-95 border-none cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[20px] notranslate">edit_note</span>
                            <span>Viết bài mới</span>
                        </button>
                    </div>

                    {/* Filters & Stats Row - Fixed Grid to prevent overlap */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
                        <div className="lg:col-span-8 relative h-16 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center overflow-hidden group">
                            <span className="material-symbols-outlined absolute left-5 text-slate-300 group-hover:text-primary transition-colors notranslate">search</span>
                            <input className="w-full h-full pl-14 pr-6 bg-transparent border-none text-sm font-bold outline-none text-slate-700 placeholder:text-slate-300" placeholder="Tìm kiếm bài viết trên Voyage Blog..." type="text" />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                                <span className="text-[10px] font-black text-slate-400">⌘</span>
                                <span className="text-[10px] font-black text-slate-400">K</span>
                            </div>
                        </div>
                        <div className="lg:col-span-4 flex gap-3 h-16">
                           <div className="flex-1 bg-white px-6 h-full rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all overflow-hidden relative">
                               <div className="flex flex-col">
                                   <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] leading-none mb-1">DATA INSIGHT</span>
                                   <span className="text-sm font-black text-slate-800 uppercase leading-none">Tổng bài viết</span>
                               </div>
                               <span className="text-2xl font-black text-primary drop-shadow-sm">{articles.length}</span>
                               <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-full translate-x-4 -translate-y-4"></div>
                           </div>
                           <button className="w-16 h-16 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all border-none cursor-pointer flex items-center justify-center text-slate-400 hover:text-primary active:scale-90 shrink-0">
                               <span className="material-symbols-outlined text-[28px] notranslate">tune</span>
                           </button>
                        </div>
                    </div>

                    {/* Articles List */}
                    <div className="grid grid-cols-1 gap-6">
                        {loading ? (
                            <div className="py-20 text-center text-slate-400">Đang tải bài viết...</div>
                        ) : articles.length > 0 ? (
                            articles.map((article) => (
                                <div key={article._id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-6 hover:shadow-md transition-shadow group">
                                    <div className="w-48 h-32 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                                        <img src={article.image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex flex-wrap gap-2">
                                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${article.category === 'Kinh nghiệm' ? 'bg-amber-50 text-amber-600' : article.category === 'Tin tức' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-500'}`}>
                                                        {article.category || 'Tin tức'}
                                                    </span>
                                                    {article.tags?.map(tag => (
                                                        <span key={tag} className="text-[10px] font-bold px-2 py-0.5 bg-primary/5 text-primary rounded-full uppercase tracking-tighter">{tag}</span>
                                                    ))}
                                                    {article.metaTitle && article.metaDescription && (
                                                        <span className="text-[10px] font-bold px-2 py-0.5 bg-green-50 text-green-600 rounded-full uppercase tracking-tighter flex items-center gap-1">
                                                            <span className="material-symbols-outlined text-[12px] notranslate">done_all</span> SEO
                                                        </span>
                                                    )}
                                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${article.status === 'Published' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                                                        {article.status}
                                                    </span>
                                                </div>
                                                <div className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{new Date(article.createdAt).toLocaleDateString('vi-VN')}</div>
                                            </div>
                                            <h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors cursor-pointer" style={{margin: 0}}>{article.title}</h3>
                                            <p className="text-sm text-slate-500 line-clamp-2 mt-2 m-0 leading-relaxed">{article.content.replace(/<[^>]*>?/gm, '').slice(0, 150)}...</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-slate-200 border border-white overflow-hidden shadow-sm">
                                                    <img src="https://i.ibb.co/MBtjqXQ/no-avatar.gif" alt="author" className="w-full h-full object-cover" />
                                                </div>
                                                <span className="text-xs font-bold text-slate-600">{article.author}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all border-none cursor-pointer">
                                                    <span className="material-symbols-outlined text-sm notranslate">edit</span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-error hover:bg-error/5 rounded-lg transition-all border-none cursor-pointer">
                                                    <span className="material-symbols-outlined text-sm notranslate">delete</span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-on-surface hover:bg-slate-100 rounded-lg transition-all border-none cursor-pointer">
                                                    <span className="material-symbols-outlined text-sm notranslate">visibility</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-24 bg-surface-container-low rounded-3xl border-2 border-dashed border-slate-200 text-center">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-black/5 flex items-center justify-center mx-auto mb-6 transform rotate-3">
                                     <span className="material-symbols-outlined text-4xl text-primary-container notranslate">article</span>
                                </div>
                                <h3 className="text-xl font-bold text-on-surface mb-2" style={{margin: 0}}>Bắt đầu viết blog thôi!</h3>
                                <p className="text-slate-500 text-sm max-w-xs mx-auto mb-8">Chia sẻ những kinh nghiệm du lịch quý báu của bạn để thu hút thêm nhiều khách hàng tiềm năng.</p>
                                <button 
                                    onClick={() => navigate("/articles/new")}
                                    className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform border-none cursor-pointer"
                                >
                                    Tạo bài viết đầu tiên
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
