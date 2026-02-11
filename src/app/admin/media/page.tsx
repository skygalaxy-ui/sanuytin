"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
    Loader2, Search, Upload, Trash2, Image as ImageIcon,
    Grid, List, Copy, Check, ArrowUpDown, Info, X
} from "lucide-react";
import { uploadImage, listStorageImages, deleteStorageImage, type MediaFile } from "@/lib/supabase";

export default function MediaLibraryPage() {
    const [images, setImages] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedImage, setSelectedImage] = useState<MediaFile | null>(null);
    const [dragOver, setDragOver] = useState(false);
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const loadImages = useCallback(async () => {
        setLoading(true);
        const data = await listStorageImages('post-images');
        setImages(data);
        setLoading(false);
    }, []);

    useEffect(() => { loadImages(); }, [loadImages]);

    const handleUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        setUploading(true);
        let count = 0;
        for (const file of Array.from(files)) {
            if (file.size > 5 * 1024 * 1024) {
                alert(`${file.name} quá lớn (tối đa 5MB)`);
                continue;
            }
            const url = await uploadImage(file, 'post-images');
            if (url) count++;
        }
        setUploading(false);
        if (count > 0) loadImages();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        handleUpload(e.dataTransfer.files);
    };

    const handleDelete = async (img: MediaFile) => {
        if (!confirm(`Xóa ảnh "${img.name}"?`)) return;
        const ok = await deleteStorageImage(img.name, 'post-images');
        if (ok) {
            setImages(images.filter(i => i.name !== img.name));
            if (selectedImage?.name === img.name) setSelectedImage(null);
        }
    };

    const copyUrl = (url: string) => {
        navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        setTimeout(() => setCopiedUrl(null), 2000);
    };

    const filteredImages = images.filter(img =>
        img.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatSize = (bytes: number) => {
        if (!bytes) return "—";
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Thư viện ảnh</h1>
                    <p className="text-sm text-gray-500 mt-1">{images.length} ảnh • Quản lý tất cả media cho bài viết</p>
                </div>
                <div>
                    <input type="file" ref={fileInputRef} accept="image/*" multiple onChange={(e) => handleUpload(e.target.files)} className="hidden" />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors shadow-sm"
                    >
                        {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                        {uploading ? "Đang tải..." : "Upload ảnh"}
                    </button>
                </div>
            </div>

            <div className="flex gap-6">
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Toolbar */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Tìm ảnh..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 bg-white"
                            />
                        </div>
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2.5 ${viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:bg-gray-50'}`}
                            >
                                <Grid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2.5 ${viewMode === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:bg-gray-50'}`}
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Drop Zone / Content */}
                    <div
                        className={`rounded-2xl transition-all ${dragOver ? 'ring-2 ring-blue-400 bg-blue-50' : ''}`}
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center py-32">
                                <Loader2 size={32} className="animate-spin text-gray-300" />
                            </div>
                        ) : filteredImages.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-32 text-gray-400 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                                <ImageIcon size={56} className="mb-4 opacity-40" />
                                <p className="text-gray-600 font-semibold mb-1 text-lg">
                                    {searchTerm ? "Không tìm thấy ảnh" : "Chưa có ảnh nào"}
                                </p>
                                <p className="text-sm text-gray-400 mb-5">Kéo thả ảnh vào đây hoặc nhấn Upload</p>
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800"
                                >
                                    Upload ảnh đầu tiên
                                </button>
                            </div>
                        ) : viewMode === 'grid' ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                {filteredImages.map((img) => (
                                    <div
                                        key={img.name}
                                        className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all hover:shadow-lg ${selectedImage?.name === img.name
                                                ? 'border-blue-500 ring-2 ring-blue-200 shadow-lg scale-[1.02]'
                                                : 'border-transparent hover:border-gray-300'
                                            }`}
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img src={img.url} alt={img.name} className="w-full h-full object-cover bg-gray-100" loading="lazy" />
                                        {selectedImage?.name === img.name && (
                                            <div className="absolute top-2 left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                                                <Check size={14} className="text-white" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-[11px] text-white/90 truncate font-medium">{img.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/50">
                                            <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Ảnh</th>
                                            <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Tên file</th>
                                            <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Kích thước</th>
                                            <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Ngày tải</th>
                                            <th className="text-right text-xs font-medium text-gray-500 px-4 py-3">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredImages.map((img) => (
                                            <tr
                                                key={img.name}
                                                onClick={() => setSelectedImage(img)}
                                                className={`border-b border-gray-50 cursor-pointer transition-colors ${selectedImage?.name === img.name ? 'bg-blue-50' : 'hover:bg-gray-50'
                                                    }`}
                                            >
                                                <td className="px-4 py-3">
                                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                                                        <img src={img.url} alt="" className="w-full h-full object-cover" loading="lazy" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-gray-900 font-medium truncate max-w-[200px]">{img.name}</td>
                                                <td className="px-4 py-3 text-sm text-gray-500">{formatSize(img.size)}</td>
                                                <td className="px-4 py-3 text-sm text-gray-500">
                                                    {img.created_at ? new Date(img.created_at).toLocaleDateString('vi-VN') : '—'}
                                                </td>
                                                <td className="px-4 py-3 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); copyUrl(img.url); }}
                                                            className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700"
                                                            title="Copy URL"
                                                        >
                                                            {copiedUrl === img.url ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                                        </button>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); handleDelete(img); }}
                                                            className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600"
                                                            title="Xóa"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Detail Sidebar */}
                {selectedImage && (
                    <div className="w-72 shrink-0">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-4">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                                <span className="text-sm font-semibold text-gray-900">Chi tiết ảnh</span>
                                <button onClick={() => setSelectedImage(null)} className="p-1 hover:bg-gray-100 rounded-lg">
                                    <X size={14} className="text-gray-400" />
                                </button>
                            </div>
                            <div className="p-4">
                                <div className="rounded-xl overflow-hidden bg-gray-100 mb-4">
                                    <img src={selectedImage.url} alt="" className="w-full aspect-video object-cover" />
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Tên file</p>
                                        <p className="text-sm text-gray-900 break-all">{selectedImage.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Kích thước</p>
                                        <p className="text-sm text-gray-900">{formatSize(selectedImage.size)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Ngày tải lên</p>
                                        <p className="text-sm text-gray-900">
                                            {selectedImage.created_at ? new Date(selectedImage.created_at).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' }) : '—'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">URL</p>
                                        <div className="flex items-center gap-1">
                                            <input
                                                type="text"
                                                value={selectedImage.url}
                                                readOnly
                                                className="flex-1 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 truncate"
                                            />
                                            <button
                                                onClick={() => copyUrl(selectedImage.url)}
                                                className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700 shrink-0"
                                            >
                                                {copiedUrl === selectedImage.url ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => handleDelete(selectedImage)}
                                        className="w-full flex items-center justify-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium transition-colors"
                                    >
                                        <Trash2 size={14} />
                                        Xóa ảnh này
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
