"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { useState, useCallback } from "react";
import {
    Bold, Italic, Underline as UnderlineIcon, List, ListOrdered,
    Quote, Link2, Unlink, Image as ImageIcon, AlignLeft, AlignCenter,
    AlignRight, Undo, Redo, Loader2, X, Code2
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
    const [uploading, setUploading] = useState(false);
    const [showMediaLibrary, setShowMediaLibrary] = useState(false);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Link.configure({ openOnClick: false }),
            Image.configure({ inline: false, allowBase64: true }),
            Placeholder.configure({ placeholder }),
            Underline,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
        ],
        content,
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
        editorProps: {
            attributes: {
                class: "prose max-w-none focus:outline-none min-h-[300px] px-4 py-3",
            },
        },
    });

    const addLink = useCallback(() => {
        if (linkUrl && editor) {
            editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run();
            setLinkUrl("");
            setShowLinkModal(false);
        }
    }, [editor, linkUrl]);

    const addImage = useCallback(() => {
        if (imageUrl && editor) {
            editor.chain().focus().setImage({ src: imageUrl }).run();
            setImageUrl("");
            setShowImageModal(false);
        }
    }, [editor, imageUrl]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !editor) return;

        setUploading(true);
        const url = await uploadImage(file, "post-images");
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
            setShowImageModal(false);
        }
        setUploading(false);
    };

    if (!editor) {
        return (
            <div className="h-[300px] flex items-center justify-center border border-gray-200 rounded-lg">
                <Loader2 className="animate-spin text-gray-400" size={24} />
            </div>
        );
    }

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-gray-200 bg-gray-50">
                <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive("bold")}>
                    <Bold size={16} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive("italic")}>
                    <Italic size={16} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive("underline")}>
                    <UnderlineIcon size={16} />
                </ToolbarButton>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive("bulletList")}>
                    <List size={16} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive("orderedList")}>
                    <ListOrdered size={16} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive("blockquote")}>
                    <Quote size={16} />
                </ToolbarButton>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("left").run()} isActive={editor.isActive({ textAlign: "left" })}>
                    <AlignLeft size={16} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("center").run()} isActive={editor.isActive({ textAlign: "center" })}>
                    <AlignCenter size={16} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("right").run()} isActive={editor.isActive({ textAlign: "right" })}>
                    <AlignRight size={16} />
                </ToolbarButton>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                <ToolbarButton onClick={() => setShowLinkModal(true)} isActive={editor.isActive("link")}>
                    <Link2 size={16} />
                </ToolbarButton>
                {editor.isActive("link") && (
                    <ToolbarButton onClick={() => editor.chain().focus().unsetLink().run()}>
                        <Unlink size={16} />
                    </ToolbarButton>
                )}
                <ToolbarButton onClick={() => setShowImageModal(true)}>
                    <ImageIcon size={16} />
                </ToolbarButton>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                    <Undo size={16} />
                </ToolbarButton>
                <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                    <Redo size={16} />
                </ToolbarButton>
            </div>

            {/* Editor */}
            <div className="bg-white">
                <EditorContent editor={editor} />
            </div>

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
                    <div className="bg-white rounded-lg p-4 w-full max-w-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">Thêm ảnh</h3>
                            <button onClick={() => setShowImageModal(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={18} />
                            </button>
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
                            <button onClick={() => setShowImageModal(false)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
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
                        editor.chain().focus().setImage({ src: url }).run();
                    }
                    setShowMediaLibrary(false);
                }}
            />
        </div>
    );
}

function ToolbarButton({ children, onClick, isActive, disabled }: { children: React.ReactNode; onClick?: () => void; isActive?: boolean; disabled?: boolean }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`p-1.5 rounded transition-colors ${isActive ? "bg-gray-200 text-gray-900" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"} ${disabled ? "opacity-30" : ""}`}
        >
            {children}
        </button>
    );
}
