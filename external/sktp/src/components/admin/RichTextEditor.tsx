"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { TextStyle } from '@tiptap/extension-text-style';
import MediaLibrary from './MediaLibrary';
import {
    Bold, Italic, Underline as UnderlineIcon, Strikethrough,
    List, ListOrdered, Quote, Code, Image as ImageIcon,
    Link as LinkIcon, AlignLeft, AlignCenter, AlignRight,
    Heading1, Heading2, Heading3, Undo, Redo, Minus, Highlighter,
    Type, Code2
} from 'lucide-react';

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
    placeholder?: string;
}

const ToolbarButton = ({ onClick, active, children, title }: {
    onClick: () => void; active?: boolean; children: React.ReactNode; title: string;
}) => (
    <button
        type="button"
        onClick={onClick}
        title={title}
        className={`p-1.5 rounded-md transition-colors flex items-center ${active ? 'bg-gray-200 text-gray-900' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            }`}
    >
        {children}
    </button>
);

const Separator = () => <div className="w-px h-5 bg-gray-200 mx-1" />;
export default function RichTextEditor({ content, onChange, placeholder = "Viết nội dung..." }: RichTextEditorProps) {
    const [isHtmlMode, setIsHtmlMode] = useState(false);
    const [showMediaLibrary, setShowMediaLibrary] = useState(false);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2, 3] },
            }),
            Placeholder.configure({ placeholder }),
            Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-blue-600 underline' } }),
            Image.configure({ inline: false, allowBase64: true }),
            Underline,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Highlight.configure({ multicolor: true }),
            TextStyle,
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm max-w-none focus:outline-none',
            },
        },
    });

    // Sync external content changes
    useEffect(() => {
        if (editor && content !== editor.getHTML() && !isHtmlMode) {
            editor.commands.setContent(content);
        }
    }, [content, editor, isHtmlMode]);

    const addImage = useCallback(() => {
        setShowMediaLibrary(true);
    }, []);

    const handleImageSelect = useCallback((url: string) => {
        if (editor) {
            const altText = window.prompt('Nhập nội dung thẻ Alt cho ảnh (rất quan trọng cho SEO):', '');
            editor.chain().focus().setImage({ src: url, alt: altText || '' }).run();
        }
        setShowMediaLibrary(false);
    }, [editor]);

    const addLink = useCallback(() => {
        if (!editor) return;
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL:', previousUrl);
        if (url === null) return;
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }, [editor]);

    if (!editor) return null;



    return (
        <div className="border-t border-gray-100 relative flex flex-col">
            {/* Toolbar - sticky within the editor container */}
            <div className="flex flex-wrap items-center gap-0.5 px-4 py-2 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm sticky top-0 z-10 flex-shrink-0">
                <ToolbarButton 
                    onClick={() => {
                        setIsHtmlMode(!isHtmlMode);
                        if (isHtmlMode) {
                            editor.commands.setContent(content);
                        }
                    }} 
                    active={isHtmlMode} 
                    title="Chế độ HTML thô"
                >
                    <Code2 size={15} />
                    <span className="ml-1 text-xs font-semibold">{isHtmlMode ? "Tắt xem HTML" : "Xem Mã HTML"}</span>
                </ToolbarButton>

                <Separator />

                {!isHtmlMode && (
                    <>
                        {/* Text Style */}
                        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="In đậm">
                            <Bold size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="In nghiêng">
                            <Italic size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Gạch chân">
                            <UnderlineIcon size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Gạch ngang">
                            <Strikethrough size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleHighlight().run()} active={editor.isActive('highlight')} title="Highlight">
                            <Highlighter size={15} />
                        </ToolbarButton>

                        <Separator />

                        {/* Headings */}
                        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })} title="Tiêu đề 1">
                            <Heading1 size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Tiêu đề 2">
                            <Heading2 size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Tiêu đề 3">
                            <Heading3 size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().setParagraph().run()} active={editor.isActive('paragraph')} title="Đoạn văn">
                            <Type size={15} />
                        </ToolbarButton>

                        <Separator />

                        {/* Lists */}
                        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Danh sách">
                            <List size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Danh sách số">
                            <ListOrdered size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Trích dẫn">
                            <Quote size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code block">
                            <Code size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Đường kẻ ngang">
                            <Minus size={15} />
                        </ToolbarButton>

                        <Separator />

                        {/* Alignment */}
                        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Căn trái">
                            <AlignLeft size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Căn giữa">
                            <AlignCenter size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Căn phải">
                            <AlignRight size={15} />
                        </ToolbarButton>

                        <Separator />

                        {/* Media */}
                        <ToolbarButton onClick={addLink} active={editor.isActive('link')} title="Chèn link">
                            <LinkIcon size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={addImage} title="Chèn ảnh từ thư viện">
                            <ImageIcon size={15} />
                        </ToolbarButton>

                        <Separator />

                        {/* History */}
                        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title="Hoàn tác">
                            <Undo size={15} />
                        </ToolbarButton>
                        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title="Làm lại">
                            <Redo size={15} />
                        </ToolbarButton>
                    </>
                )}
            </div>

            {/* Editor Content - scrollable with max height */}
            {isHtmlMode ? (
                <textarea
                    value={content}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-[60vh] p-6 lg:p-10 text-sm font-mono text-gray-800 bg-gray-50 border-none outline-none focus:outline-none focus:ring-0 resize-none"
                    placeholder="Nhập mã HTML tại đây..."
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                />
            ) : (
                <div className="overflow-y-auto" style={{ maxHeight: '60vh' }}>
                    <div className="p-6 lg:p-10 prose-editor-wrapper bg-white min-h-[400px]">
                        <EditorContent editor={editor} />
                    </div>
                </div>
            )}

            {/* Media Library Modal - triggered by image button */}
            <MediaLibrary
                isOpen={showMediaLibrary}
                onClose={() => setShowMediaLibrary(false)}
                onSelect={handleImageSelect}
            />
        </div>
    );
}
