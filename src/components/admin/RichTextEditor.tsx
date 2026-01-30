"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { useState, useCallback } from "react";
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Quote,
    Code,
    Link2,
    Unlink,
    Image as ImageIcon,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Undo,
    Redo,
    Highlighter,
    Minus,
    Upload,
    Loader2,
    X,
    Code2,
    Eye
} from "lucide-react";
import { uploadImage } from "@/lib/supabase";

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
    placeholder?: string;
}

export default function RichTextEditor({ content, onChange, placeholder = "Viết nội dung tại đây..." }: RichTextEditorProps) {
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);
    const [linkUrl, setLinkUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [uploading, setUploading] = useState(false);
    const [isHtmlMode, setIsHtmlMode] = useState(false);
    const [htmlSource, setHtmlSource] = useState("");

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-primary underline",
                },
            }),
            Image.configure({
                inline: false,
                allowBase64: true,
                HTMLAttributes: {
                    class: "max-w-full rounded-lg my-4",
                },
            }),
            Placeholder.configure({
                placeholder,
            }),
            Underline,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Highlight.configure({
                multicolor: false,
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "prose prose-invert max-w-none focus:outline-none min-h-[400px] px-4 py-3",
            },
        },
    });

    const addLink = useCallback(() => {
        if (linkUrl && editor) {
            editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: linkUrl })
                .run();
            setLinkUrl("");
            setShowLinkModal(false);
        }
    }, [editor, linkUrl]);

    const removeLink = useCallback(() => {
        if (editor) {
            editor.chain().focus().unsetLink().run();
        }
    }, [editor]);

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

        if (!file.type.startsWith("image/")) {
            alert("Vui lòng chọn file ảnh!");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Kích thước ảnh tối đa 5MB!");
            return;
        }

        setUploading(true);
        try {
            const url = await uploadImage(file, "post-images");
            if (url) {
                editor.chain().focus().setImage({ src: url }).run();
                setShowImageModal(false);
            } else {
                alert("Upload thất bại! Kiểm tra cấu hình Supabase Storage.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Có lỗi xảy ra khi upload ảnh!");
        }
        setUploading(false);
    };

    // Toggle HTML mode
    const toggleHtmlMode = () => {
        if (isHtmlMode) {
            // Switching from HTML to Visual: apply HTML content to editor
            if (editor) {
                editor.commands.setContent(htmlSource);
                onChange(htmlSource);
            }
        } else {
            // Switching from Visual to HTML: get current HTML
            if (editor) {
                setHtmlSource(editor.getHTML());
            }
        }
        setIsHtmlMode(!isHtmlMode);
    };

    // Update HTML source and sync with parent
    const handleHtmlChange = (value: string) => {
        setHtmlSource(value);
        onChange(value);
    };
    if (!editor) {
        return (
            <div className="bg-slate-800 border border-slate-700 rounded-lg h-[500px] flex items-center justify-center">
                <Loader2 className="animate-spin text-primary" size={32} />
            </div>
        );
    }

    return (
        <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-800">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-900 border-b border-slate-700">
                {/* Headings */}
                <div className="flex items-center gap-0.5 pr-2 border-r border-slate-700">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        isActive={editor.isActive("heading", { level: 1 })}
                        tooltip="Heading 1"
                    >
                        <Heading1 size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        isActive={editor.isActive("heading", { level: 2 })}
                        tooltip="Heading 2"
                    >
                        <Heading2 size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        isActive={editor.isActive("heading", { level: 3 })}
                        tooltip="Heading 3"
                    >
                        <Heading3 size={18} />
                    </ToolbarButton>
                </div>

                {/* Text Formatting */}
                <div className="flex items-center gap-0.5 px-2 border-r border-slate-700">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        isActive={editor.isActive("bold")}
                        tooltip="Bold (Ctrl+B)"
                    >
                        <Bold size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        isActive={editor.isActive("italic")}
                        tooltip="Italic (Ctrl+I)"
                    >
                        <Italic size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        isActive={editor.isActive("underline")}
                        tooltip="Underline (Ctrl+U)"
                    >
                        <UnderlineIcon size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        isActive={editor.isActive("strike")}
                        tooltip="Strikethrough"
                    >
                        <Strikethrough size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHighlight().run()}
                        isActive={editor.isActive("highlight")}
                        tooltip="Highlight"
                    >
                        <Highlighter size={18} />
                    </ToolbarButton>
                </div>

                {/* Lists & Blocks */}
                <div className="flex items-center gap-0.5 px-2 border-r border-slate-700">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        isActive={editor.isActive("bulletList")}
                        tooltip="Bullet List"
                    >
                        <List size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        isActive={editor.isActive("orderedList")}
                        tooltip="Numbered List"
                    >
                        <ListOrdered size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        isActive={editor.isActive("blockquote")}
                        tooltip="Quote"
                    >
                        <Quote size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        isActive={editor.isActive("codeBlock")}
                        tooltip="Code Block"
                    >
                        <Code size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setHorizontalRule().run()}
                        tooltip="Horizontal Line"
                    >
                        <Minus size={18} />
                    </ToolbarButton>
                </div>

                {/* Alignment */}
                <div className="flex items-center gap-0.5 px-2 border-r border-slate-700">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign("left").run()}
                        isActive={editor.isActive({ textAlign: "left" })}
                        tooltip="Align Left"
                    >
                        <AlignLeft size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign("center").run()}
                        isActive={editor.isActive({ textAlign: "center" })}
                        tooltip="Align Center"
                    >
                        <AlignCenter size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign("right").run()}
                        isActive={editor.isActive({ textAlign: "right" })}
                        tooltip="Align Right"
                    >
                        <AlignRight size={18} />
                    </ToolbarButton>
                </div>

                {/* Link & Image */}
                <div className="flex items-center gap-0.5 px-2 border-r border-slate-700">
                    <ToolbarButton
                        onClick={() => setShowLinkModal(true)}
                        isActive={editor.isActive("link")}
                        tooltip="Add Link"
                    >
                        <Link2 size={18} />
                    </ToolbarButton>
                    {editor.isActive("link") && (
                        <ToolbarButton onClick={removeLink} tooltip="Remove Link">
                            <Unlink size={18} />
                        </ToolbarButton>
                    )}
                    <ToolbarButton onClick={() => setShowImageModal(true)} tooltip="Add Image">
                        <ImageIcon size={18} />
                    </ToolbarButton>
                </div>

                {/* Undo/Redo */}
                <div className="flex items-center gap-0.5 px-2 border-r border-slate-700">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().undo()}
                        tooltip="Undo (Ctrl+Z)"
                    >
                        <Undo size={18} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().redo()}
                        tooltip="Redo (Ctrl+Y)"
                    >
                        <Redo size={18} />
                    </ToolbarButton>
                </div>

                {/* HTML Mode Toggle */}
                <div className="flex items-center gap-1 pl-2 ml-auto">
                    <button
                        type="button"
                        onClick={toggleHtmlMode}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isHtmlMode
                                ? 'bg-primary text-white'
                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                    >
                        {isHtmlMode ? (
                            <>
                                <Eye size={16} />
                                <span>Visual</span>
                            </>
                        ) : (
                            <>
                                <Code2 size={16} />
                                <span>HTML</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Editor Content */}
            <div className="bg-slate-800">
                {isHtmlMode ? (
                    <div className="relative">
                        <textarea
                            value={htmlSource}
                            onChange={(e) => handleHtmlChange(e.target.value)}
                            className="w-full min-h-[400px] p-4 bg-slate-900 text-green-400 font-mono text-sm outline-none resize-y"
                            placeholder="Dán HTML code tại đây..."
                            spellCheck={false}
                        />
                        <div className="absolute top-2 right-2 text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                            HTML Source
                        </div>
                    </div>
                ) : (
                    <EditorContent editor={editor} />
                )}
            </div>


            {/* Link Modal */}

            {showLinkModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white">Thêm liên kết</h3>
                            <button onClick={() => setShowLinkModal(false)} className="text-slate-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>
                        <input
                            type="url"
                            placeholder="https://example.com"
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary mb-4"
                            value={linkUrl}
                            onChange={(e) => setLinkUrl(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addLink()}
                            autoFocus
                        />
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowLinkModal(false)}
                                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={addLink}
                                className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg"
                            >
                                Thêm link
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Modal */}
            {showImageModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white">Thêm hình ảnh</h3>
                            <button onClick={() => setShowImageModal(false)} className="text-slate-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Upload Button */}
                        <div className="mb-4">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-700 rounded-lg cursor-pointer hover:border-primary transition-colors">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    disabled={uploading}
                                />
                                {uploading ? (
                                    <div className="flex items-center gap-2 text-primary">
                                        <Loader2 size={24} className="animate-spin" />
                                        <span>Đang tải lên...</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center gap-2 text-slate-400">
                                        <Upload size={32} />
                                        <span className="text-sm">Click để upload ảnh</span>
                                        <span className="text-xs text-slate-500">Tối đa 5MB</span>
                                    </div>
                                )}
                            </label>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex-1 h-px bg-slate-700" />
                            <span className="text-slate-500 text-sm">hoặc</span>
                            <div className="flex-1 h-px bg-slate-700" />
                        </div>

                        {/* URL Input */}
                        <input
                            type="url"
                            placeholder="Dán URL ảnh..."
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary mb-4"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addImage()}
                        />
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowImageModal(false)}
                                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={addImage}
                                disabled={!imageUrl}
                                className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg disabled:opacity-50"
                            >
                                Thêm ảnh
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function ToolbarButton({
    children,
    onClick,
    isActive = false,
    disabled = false,
    tooltip,
    size = "md",
}: {
    children: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
    disabled?: boolean;
    tooltip?: string;
    size?: "sm" | "md";
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            title={tooltip}
            className={`
                ${size === "sm" ? "p-1" : "p-2"}
                rounded transition-colors
                ${isActive
                    ? "bg-primary/20 text-primary"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }
                ${disabled ? "opacity-30 cursor-not-allowed" : ""}
            `}
        >
            {children}
        </button>
    );
}
