"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { useState, useCallback, useEffect, useRef } from "react";
import {
    Bold, Italic, Underline as UnderlineIcon, List, ListOrdered,
    Quote, Link2, Unlink, Image as ImageIcon, AlignLeft, AlignCenter,
    AlignRight, Undo, Redo, Loader2, X, Heading2, Heading3, Heading4, Minus, Type,
    Code, FileText
} from "lucide-react";
import { uploadImage } from "@/lib/supabase";
import MediaLibrary from "@/components/admin/MediaLibrary";

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
    placeholder?: string;
}

export default function RichTextEditor({ content, onChange, placeholder = "Viết nội dung..." }: RichTextEditorProps) {
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);
    const [linkUrl, setLinkUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [uploading, setUploading] = useState(false);
    const [showMediaLibrary, setShowMediaLibrary] = useState(false);
    const [showAltEditor, setShowAltEditor] = useState(false);
    const [editingAlt, setEditingAlt] = useState("");
    const [htmlMode, setHtmlMode] = useState(false);
    const [htmlContent, setHtmlContent] = useState("");

    const isInternalChange = useRef(false);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                autolink: true,
                HTMLAttributes: {
                    class: 'text-orange-600 underline decoration-orange-500/30 underline-offset-4 font-medium cursor-text',
                }
            }),
            Image.configure({ inline: false, allowBase64: true }),
            Placeholder.configure({ placeholder }),
            Underline,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
        ],
        content,
        onUpdate: ({ editor }) => {
            isInternalChange.current = true;
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "prose prose-gray max-w-none focus:outline-none min-h-[400px] px-8 py-10 text-gray-900 leading-relaxed",
            },
        },
    });

    const openLinkModal = useCallback(() => {
        if (editor) {
            const previousUrl = editor.getAttributes("link").href;
            setLinkUrl(previousUrl || "");
            setShowLinkModal(true);
        }
    }, [editor]);

    // Sync content from parent when switching posts
    useEffect(() => {
        if (!editor) return;
        if (isInternalChange.current) {
            isInternalChange.current = false;
            return;
        }
        const editorHTML = editor.getHTML();
        if (content !== editorHTML) {
            editor.commands.setContent(content || '', { emitUpdate: false });
        }
    }, [content, editor]);

    const addLink = useCallback(() => {
        if (linkUrl && editor) {
            editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run();
            setLinkUrl("");
            setShowLinkModal(false);
        }
    }, [editor, linkUrl]);

    const addImage = useCallback(() => {
        if (imageUrl && editor) {
            editor.chain().focus().setImage({ src: imageUrl, alt: imageAlt || "" }).run();
            setImageUrl("");
            setImageAlt("");
            setShowImageModal(false);
        }
    }, [editor, imageUrl, imageAlt]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !editor) return;

        setUploading(true);
        const url = await uploadImage(file, "post-images");
        if (url) {
            editor.chain().focus().setImage({ src: url, alt: imageAlt || file.name.replace(/\.[^/.]+$/, '') }).run();
            setImageAlt("");
            setShowImageModal(false);
        }
        setUploading(false);
    };

    // Handle clicking on an image to edit alt text
    const handleImageClick = useCallback(() => {
        if (!editor) return;
        const sel = editor.state.selection as any;
        if (sel?.node?.type?.name === 'image') {
            setEditingAlt(sel.node.attrs.alt || "");
            setShowAltEditor(true);
        }
    }, [editor]);

    const saveAltText = useCallback(() => {
        if (!editor) return;
        editor.chain().focus().updateAttributes('image', { alt: editingAlt }).run();
        setShowAltEditor(false);
        setEditingAlt("");
    }, [editor, editingAlt]);

    // Remove ALL links from content
    const removeAllLinks = useCallback(() => {
        if (!editor) return;
        const linkCount = (editor.getHTML().match(/<a /g) || []).length;
        if (linkCount === 0) {
            alert('Không có link nào trong bài viết.');
            return;
        }
        if (confirm(`Xóa tất cả ${linkCount} link nội bộ? (Chỉ xóa link, giữ nguyên text)`)) {
            editor.chain().focus().selectAll().unsetLink().run();
        }
    }, [editor]);

    if (!editor) {
        return (
            <div className="h-[300px] flex items-center justify-center border border-gray-200 rounded-lg">
                <Loader2 className="animate-spin text-gray-400" size={24} />
            </div>
        );
    }

    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 bg-slate-50/50 backdrop-blur-sm sticky top-0 z-10">
                {/* Headings */}
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive("heading", { level: 2 })} title="Heading 2">
                    <Heading2 size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive("heading", { level: 3 })} title="Heading 3">
                    <Heading3 size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} isActive={editor.isActive("heading", { level: 4 })} title="Heading 4">
                    <Heading4 size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().setParagraph().run()} isActive={editor.isActive("paragraph")} title="Paragraph">
                    <Type size={18} />
                </ToolbarButton>
                <div className="w-px h-6 bg-slate-200 mx-1.5" />

                {/* Text formatting */}
                <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive("bold")} title="Bold">
                    <Bold size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive("italic")} title="Italic">
                    <Italic size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive("underline")} title="Underline">
                    <UnderlineIcon size={18} />
                </ToolbarButton>
                <div className="w-px h-6 bg-slate-200 mx-1.5" />

                {/* Lists & blocks */}
                <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive("bulletList")} title="Bullet List">
                    <List size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive("orderedList")} title="Ordered List">
                    <ListOrdered size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive("blockquote")} title="Blockquote">
                    <Quote size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Đường kẻ ngang">
                    <Minus size={18} />
                </ToolbarButton>
                <div className="w-px h-6 bg-slate-200 mx-1.5" />

                {/* Alignment */}
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("left").run()} isActive={editor.isActive({ textAlign: "left" })} title="Căn trái">
                    <AlignLeft size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("center").run()} isActive={editor.isActive({ textAlign: "center" })} title="Căn giữa">
                    <AlignCenter size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("right").run()} isActive={editor.isActive({ textAlign: "right" })} title="Căn phải">
                    <AlignRight size={18} />
                </ToolbarButton>
                <div className="w-px h-6 bg-slate-200 mx-1.5" />

                {/* Link & Image */}
                <ToolbarButton onClick={openLinkModal} isActive={editor.isActive("link")} title="Thêm/Sửa Link">
                    <Link2 size={18} />
                </ToolbarButton>
                {editor.isActive("link") && (
                    <ToolbarButton onClick={() => editor.chain().focus().unsetLink().run()} title="Xoá Link đang chọn">
                        <Unlink size={18} />
                    </ToolbarButton>
                )}
                <ToolbarButton onClick={removeAllLinks} title="Xoá TẤT CẢ Link" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                    <span className="text-[10px] font-bold leading-none flex items-center gap-0.5"><Unlink size={14} />All</span>
                </ToolbarButton>
                <ToolbarButton onClick={() => setShowImageModal(true)} title="Thêm Ảnh">
                    <ImageIcon size={18} />
                </ToolbarButton>
                <div className="flex-1" />
                <div className="flex items-center gap-1 pr-2">
                    <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo() || htmlMode} title="Undo">
                        <Undo size={18} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo() || htmlMode} title="Redo">
                        <Redo size={18} />
                    </ToolbarButton>
                    <div className="w-px h-6 bg-slate-200 mx-1.5" />
                    {/* Mode Toggle */}
                    <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
                        <button
                            type="button"
                            onClick={() => {
                                if (htmlMode) {
                                    // Switch from HTML to Visual: apply HTML changes back to editor
                                    editor.commands.setContent(htmlContent, { emitUpdate: true });
                                }
                                setHtmlMode(false);
                            }}
                            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${!htmlMode
                                ? 'bg-white text-slate-900 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                            title="Chế độ văn bản"
                        >
                            <FileText size={14} />
                            Văn bản
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                // Switch to HTML mode: capture current editor content
                                setHtmlContent(editor.getHTML());
                                setHtmlMode(true);
                            }}
                            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${htmlMode
                                ? 'bg-white text-slate-900 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                            title="Chế độ HTML"
                        >
                            <Code size={14} />
                            HTML
                        </button>
                    </div>
                </div>
            </div>

            {/* Editor */}
            {htmlMode ? (
                <div style={{ backgroundColor: '#1e293b', maxHeight: '60vh', overflowY: 'auto' }}>
                    <style>{`
                        .html-code-editor {
                            width: 100% !important;
                            min-height: 400px !important;
                            padding: 20px 24px !important;
                            background-color: #1e293b !important;
                            color: #4ade80 !important;
                            font-family: "Fira Code", "Cascadia Code", "Consolas", monospace !important;
                            font-size: 13px !important;
                            line-height: 1.8 !important;
                            border: none !important;
                            outline: none !important;
                            resize: none !important;
                            tab-size: 2 !important;
                            caret-color: #fff !important;
                        }
                        .html-code-editor::placeholder {
                            color: #64748b !important;
                        }
                    `}</style>
                    <textarea
                        value={htmlContent}
                        onChange={(e) => {
                            setHtmlContent(e.target.value);
                            isInternalChange.current = true;
                            onChange(e.target.value);
                        }}
                        className="html-code-editor"
                        spellCheck={false}
                        placeholder="<p>Viết HTML ở đây...</p>"
                    />
                </div>
            ) : (
                <div className="bg-white text-slate-900 selection:bg-orange-100 max-h-[60vh] overflow-y-auto" onClick={handleImageClick}>
                    <EditorContent editor={editor} className="min-h-[400px]" />
                </div>
            )}

            {/* Image Alt Text Editor — click on image to edit */}
            {showAltEditor && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">Sửa mô tả ảnh (Alt Text)</h3>
                            <button onClick={() => setShowAltEditor(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={18} />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">Alt text giúp Google hiểu nội dung ảnh → tốt cho SEO</p>
                        <input
                            type="text"
                            placeholder="VD: Bảng so sánh spread các sàn Forex"
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            value={editingAlt}
                            onChange={(e) => setEditingAlt(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && saveAltText()}
                            autoFocus
                        />
                        <div className="flex gap-2">
                            <button onClick={() => setShowAltEditor(false)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                                Hủy
                            </button>
                            <button onClick={saveAltText} className="flex-1 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Link Modal */}
            {showLinkModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">Thêm liên kết</h3>
                            <button onClick={() => setShowLinkModal(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={18} />
                            </button>
                        </div>
                        <input
                            type="url"
                            placeholder="https://..."
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            value={linkUrl}
                            onChange={(e) => setLinkUrl(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addLink()}
                            autoFocus
                        />
                        <div className="flex gap-2">
                            <button onClick={() => setShowLinkModal(false)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                                Hủy
                            </button>
                            <button onClick={addLink} className="flex-1 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Modal */}
            {showImageModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-md">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">Thêm ảnh</h3>
                            <button onClick={() => { setShowImageModal(false); setImageAlt(""); }} className="text-gray-400 hover:text-gray-600">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Alt text input — always visible at top */}
                        <div className="mb-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                            <label className="block text-xs font-medium text-blue-700 mb-1">
                                Mô tả ảnh (Alt Text) — quan trọng cho SEO
                            </label>
                            <input
                                type="text"
                                placeholder="VD: Giao diện nền tảng MT5 của sàn Exness"
                                className="w-full px-3 py-2 border border-blue-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                value={imageAlt}
                                onChange={(e) => setImageAlt(e.target.value)}
                            />
                        </div>

                        {/* Media Library Button */}
                        <button
                            onClick={() => { setShowImageModal(false); setShowMediaLibrary(true); }}
                            className="w-full px-3 py-3 mb-3 border-2 border-dashed border-blue-200 rounded-lg text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                        >
                            <ImageIcon size={16} />
                            Chọn từ thư viện
                        </button>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-xs text-gray-400">hoặc</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-gray-400 mb-3">
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
                            {uploading ? (
                                <Loader2 size={24} className="animate-spin text-gray-400" />
                            ) : (
                                <span className="text-sm text-gray-500">Upload từ máy tính</span>
                            )}
                        </label>

                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-xs text-gray-400">hoặc URL</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        <input
                            type="url"
                            placeholder="URL ảnh..."
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                        <div className="flex gap-2">
                            <button onClick={() => { setShowImageModal(false); setImageAlt(""); }} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                                Hủy
                            </button>
                            <button onClick={addImage} disabled={!imageUrl} className="flex-1 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50">
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Media Library Modal */}
            <MediaLibrary
                isOpen={showMediaLibrary}
                onClose={() => setShowMediaLibrary(false)}
                onSelect={(url) => {
                    if (editor) {
                        editor.chain().focus().setImage({ src: url, alt: imageAlt || "" }).run();
                        setImageAlt("");
                    }
                    setShowMediaLibrary(false);
                }}
            />
        </div>
    );
}

function ToolbarButton({ children, onClick, isActive, disabled, title, className }: { children: React.ReactNode; onClick?: () => void; isActive?: boolean; disabled?: boolean; title?: string; className?: string }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            title={title}
            className={`
                p-2 rounded-xl transition-all duration-200
                ${isActive
                    ? "bg-slate-900 text-white shadow-sm scale-110"
                    : "text-slate-500 hover:bg-slate-200/50 hover:text-slate-900"
                } 
                ${disabled ? "opacity-20 grayscale pointer-events-none" : "active:scale-95"}
                ${className || ""}
            `}
        >
            {children}
        </button>
    );
}
