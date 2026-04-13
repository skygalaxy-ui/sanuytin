# Tái cấu trúc Layout Blog: Tiêu chuẩn "Financial Advisory" (Pro Max)

Dựa trên phân tích từ hình ảnh bạn cung cấp và code hiện tại, layout blog đang gặp phải tình trạng **rời rạc, thiếu cấu trúc (containment) và lạm dụng màu chữ "Raw Blue" (xanh nước biển thô)**. Việc này rất kiêng kỵ trong thiết kế web tài chính (Forex/Crypto) vì nó làm giảm đi sự cao cấp và mức độ uy tín (Institutional Trust).

Dưới đây là kế hoạch tư vấn chi tiết cùng với các đoạn code cài đặt (Tailwind CSS) để biến trang Blog của bạn thành chuẩn cao cấp nhất.

---

## 1. Vấn Đề Giao Diện Hiện Tại
1. **Thiếu Card bọc (Containment):** Nội dung bài viết và các Widget bên Sidebar đang nằm chơi vơi trực tiếp trên nền đen không có khối (box), tạo cảm giác trống rỗng và dính líu vào nhau (nhìn bị lộn xộn).
2. **Typography (Chữ nghĩa) Chưa Hierarchy:** Tiêu đề H1 (Điểm tin thị trường...) đang quá chật chội (`leading-[1.3]`). Font chữ dồn nén. Phân cấp giữa chữ thẻ "Tin tức", Ngày và Giờ chưa thông thoáng.
3. **Màu Sắc Thiếu Chuyên Nghiệp:** Thanh menu "Bài Viết Liên Quan" và "Mục Lục" dùng trực tiếp chữ cấu hình màu xanh (`text-primary`), trông giống các diễn đàn cũ từ 10 năm trước.
4. **Metadata Nhạt Nhòa:** Cụm ngày tháng, Kiểm chứng chuyên gia chưa tạo được hiệu ứng Neo niềm tin (Anchor of Trust) trên một nền nổi bật.

---

## 2. Giải Pháp Nâng Cấp Tới Hạn (UI/UX Tối Ưu)

Chúng ta sẽ áp dụng pattern thiết kế **Glassmorphism Container** kết hợp **Floating Sidebars**. Thay vì để mọi thứ thả nổi, ta chia tách thành 2 Column khép kín sang trọng.

### Bước 1: Bao bọc Article bằng Card Sang Trọng
Sửa lại phần thân `<article className="lg:col-span-8 min-w-0">` trong file `ArticleClient.tsx` thành:

```tsx
{/* Định dạng lại khối nội dung chính với Khung Card viền kính */}
<article className="lg:col-span-8 min-w-0 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 md:p-8 lg:p-10 shadow-2xl backdrop-blur-md">
    <header className="mb-8 md:mb-10 text-center">
        {/* Cụm Tag nổi */}
        <div className="flex items-center justify-center mb-6">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-[0.2em] rounded-full">
                {post.category || "Cập Nhật Mới"}
            </span>
        </div>
        
        {/* Tiêu đề dãn dòng và to lớn hơn */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-slate-50 mb-6 leading-[1.15] tracking-tight">
            {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-slate-400">
            <VerifiedBadge />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <span className="flex items-center gap-1.5"><Calendar size={14} />{formatDate(post.published_at)}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{readTime} phút đọc</span>
        </div>
    </header>
    {/* ...Nội dung dưới... */}
</article>
```

### Bước 2: Tái thiết Sidebar (Bài Viết Liên Quan & Mục Lục)

Xóa sổ việc lạm dụng màu xanh (`text-primary`). Thay vào đó chữ phải là màu trắng/xám (`text-slate-200`) và chỉ đổi màu Xanh hoặc Cam/Vàng khi `Hover` (Di chuột).
Đồng thời, mỗi Block (Bài viết liên quan, Broker Finder) nên nằm trong một Card riêng biệt.

Sửa phần `<aside>` của bạn:

```tsx
{/* ===== Sidebar Định Dạng Widget Mới ===== */}
<aside className="lg:col-span-4 hidden lg:block">
    <div className="sticky top-28 space-y-6">

        {/* Khối Bài Viết Liên Quan - Bọc Card */}
        {relatedPosts.length > 0 && (
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500 mb-5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    ĐÁNG ĐỌC NHẤT
                </h4>
                <div className="space-y-4">
                    {relatedPosts.slice(0, 5).map(rPost => (
                        <Link key={rPost.id} href={`/tin-tuc/${rPost.slug}`} className="group flex gap-4 items-center">
                            <div className="w-[84px] h-[60px] rounded-lg overflow-hidden flex-shrink-0 border border-slate-800 group-hover:border-blue-500/40 transition-colors">
                                {/* Thumbnail */}
                            </div>
                            <h5 className="flex-1 min-w-0 text-[14px] leading-snug text-slate-200 group-hover:text-amber-500 transition-colors line-clamp-3 font-medium">
                                {rPost.title}
                            </h5>
                        </Link>
                    ))}
                </div>
            </div>
        )}

        {/* Khối Mục Lục - Bọc Card */}
        {toc.length > 0 && (
            <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                <SidebarToc toc={toc} activeSection={activeSection} />
            </div>
        )}

    </div>
</aside>
```

### Bước 3: Sửa CSS cho Table of Content (SidebarToc component)
Tránh việc Mục lục bị xanh lòe loẹt, hãy giữ nó màu Slate mặc định và chỉ Blue khi đang ở vùng Active. Trong hàm SidebarToc, sủa thẻ `<a>` thành:

```tsx
<a
    key={item.id}
    href={`#${item.id}`}
    className={`flex items-start gap-3 py-2 transition-all leading-relaxed ${
        activeSection === item.id
        ? "text-blue-400 font-bold ml-1" // Nhảy sang màu xanh, đẩy lùi nhẹ vào 1px
        : "text-slate-400 hover:text-slate-200 text-[14px]"
    }`}
>
    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${activeSection === item.id ? "bg-blue-400" : "bg-slate-700"}`} />
    <span className="line-clamp-2">{item.text}</span>
</a>
```

### Lợi ích sau khi áp dụng:
1. **Premium & Đáng tin cậy:** Khối Box Card (p-8, bo tròn 3xl) tạo biên giới cắt lớp tách biệt hoàn toàn người dùng khỏi khoảng không màu đen, khiến cho tổng thể thiết kế chắc chắn như một khối bê tông (giống như các app Ngân hàng hay giao dịch Institutional).
2. **Loại bỏ sự nhức mắt:** Chữ Xanh lam ("Raw blue") trên nền đen thuần cực kỳ khó chịu cho thị giác, nay được thay thế bằng hệ chữ xám nhạt (`slate-300`, `slate-400`). Xanh lam giờ đây chỉ đóng vai trò Đánh Dấu (Highlight active menu). 
