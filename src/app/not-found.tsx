import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />

            <div className="relative z-10 text-center px-6">
                {/* 404 Number */}
                <div className="relative mb-8">
                    <span className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900 leading-none select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            404
                        </span>
                    </div>
                </div>

                <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    Trang không tìm thấy
                </h1>
                <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
                    Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/30 transition-all hover:scale-[1.02] hover:shadow-blue-500/40 inline-flex items-center justify-center gap-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative">← Về trang chủ</span>
                    </Link>
                    <Link
                        href="/danh-gia-san"
                        className="group bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all hover:scale-[1.02] inline-flex items-center justify-center"
                    >
                        Xem bảng xếp hạng
                    </Link>
                </div>
            </div>
        </section>
    );
}
