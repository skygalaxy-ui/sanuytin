"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
    X, Loader2, Search, Upload, Trash2, Check, Image as ImageIcon,
    Grid, List, Copy, ExternalLink
} from "lucide-react";
import { uploadImage, listStorageImages, deleteStorageImage, type MediaFile } from "@/lib/supabase";

interface MediaLibraryProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (url: string, alt?: string) => void;
    multiple?: boolean;
}

export default function MediaLibrary({ isOpen, onClose, onSelect, multiple = false }: MediaLibraryProps) {
    const [images, setImages] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const loadImages = useCallback(async () => {
        setLoading(true);
        const data = await listStorageImages('post-images');
        setImages(data);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            loadImages();
            setSelectedUrl(null);
        }
    }, [isOpen, loadImages]);

    const handleUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        setUploading(true);
        for (const file of Array.from(files)) {
            if (file.size > 5 * 1024 * 1024) {
                alert(`${file.name} quá lớn (tối đa 5MB)`);
                continue;
            }
            await uploadImage(file, 'post-images');
        }
        setUploading(false);
        loadImages();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        handleUpload(e.dataTransfer.files);
    };

    const handleDelete = async (name: string) => {
        if (!confirm("Xóa ảnh này khỏi thư viện?")) return;
        await deleteStorageImage(name, 'post-images');
        setImages(images.filter(img => img.name !== name));
        if (selectedUrl && images.find(i => i.name === name)?.url === selectedUrl) {
            setSelectedUrl(null);
        }
    };

    const handleSelect = () => {
        if (selectedUrl) {
            onSelect(selectedUrl);
            onClose();
        }
    };

    const copyUrl = (url: string) => {
        navigator.clipboard.writeText(url);
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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">Thư viện ảnh</h2>
                        <p className="text-xs text-gray-500 mt-0.5">{images.length} ảnh trong thư viện</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-3 px-6 py-3 border-b border-gray-100 bg-gray-50/50">
                    <div className="relative flex-1 max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                        <input
                            type="text"
                            placeholder="Tìm ảnh..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                        />
                    </div>
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 ${viewMode === 'grid' ? 'bg-gray-200 text-gray-900' : 'text-gray-400 hover:bg-gray-100'}`}
                        >
                            <Grid size={16} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 ${viewMode === 'list' ? 'bg-gray-200 text-gray-900' : 'text-gray-400 hover:bg-gray-100'}`}
                        >
                            <List size={16} />
                        </button>
                    </div>
                    <input type="file" ref={fileInputRef} accept="image/*" multiple onChange={(e) => handleUpload(e.target.files)} className="hidden" />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors"
                    >
                        {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                        {uploading ? "Đang tải..." : "Upload"}
                    </button>
                </div>

                {/* Content */}
                <div
                    className={`flex-1 overflow-y-auto p-6 ${dragOver ? 'bg-blue-50 ring-2 ring-inset ring-blue-300' : ''}`}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                >
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 size={28} className="animate-spin text-gray-400" />
                        </div>
                    ) : filteredImages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                            <ImageIcon size={48} className="mb-3 opacity-50" />
                            <p className="text-gray-600 font-medium mb-1">
                                {searchTerm ? "Không tìm thấy ảnh" : "Chưa có ảnh nào"}
                            </p>
                            <p className="text-sm text-gray-400 mb-4">Kéo thả ảnh hoặc nhấn Upload để thêm</p>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="text-sm text-gray-900 underline font-medium"
                            >
                                Upload ảnh đầu tiên
                            </button>
                        </div>
                    ) : viewMode === 'grid' ? (
                        /* GRID VIEW */
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                            {filteredImages.map((img) => (
                                <div
                                    key={img.name}
                                    className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all hover:shadow-md ${selectedUrl === img.url
                                            ? 'border-blue-500 ring-2 ring-blue-200 shadow-md'
                                            : 'border-transparent hover:border-gray-300'
                                        }`}
                                    onClick={() => setSelectedUrl(img.url)}
                                >
                                    <img
                                        src={img.url}
                                        alt={img.name}
                                        className="w-full h-full object-cover bg-gray-100"
                                        loading="lazy"
                                    />
                                    {/* Selected Check */}
                                    {selectedUrl === img.url && (
                                        <div className="absolute top-2 left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                                            <Check size={14} className="text-white" />
                                        </div>
                                    )}
                                    {/* Hover Actions */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <div className="flex items-center gap-1 w-full">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); copyUrl(img.url); }}
                                                className="p-1.5 bg-white/90 rounded-md hover:bg-white text-gray-700"
                                                title="Copy URL"
                                            >
                                                <Copy size={12} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleDelete(img.name); }}
                                                className="p-1.5 bg-white/90 rounded-md hover:bg-red-50 text-red-600"
                                                title="Xóa"
                                            >
                                                <Trash2 size={12} />
                                            </button>
                                            <span className="ml-auto text-[10px] text-white/80 truncate">
                                                {formatSize(img.size)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* LIST VIEW */
                        <div className="space-y-1">
                            {filteredImages.map((img) => (
                                <div
                                    key={img.name}
                                    onClick={() => setSelectedUrl(img.url)}
                                    className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${selectedUrl === img.url
                                            ? 'bg-blue-50 border border-blue-200'
                                            : 'hover:bg-gray-50 border border-transparent'
                                        }`}
                                >
                                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                        <img src={img.url} alt="" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{img.name}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            {formatSize(img.size)} • {img.created_at ? new Date(img.created_at).toLocaleDateString('vi-VN') : ''}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); copyUrl(img.url); }}
                                            className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700"
                                        >
                                            <Copy size={14} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDelete(img.name); }}
                                            className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50/50">
                    <p className="text-xs text-gray-500">
                        {selectedUrl ? "Đã chọn 1 ảnh" : "Chọn ảnh hoặc upload ảnh mới"}
                    </p>
                    <div className="flex items-center gap-2">
                        <button onClick={onClose} className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            Hủy
                        </button>
                        <button
                            onClick={handleSelect}
                            disabled={!selectedUrl}
                            className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-40 transition-colors"
                        >
                            Chọn ảnh
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
