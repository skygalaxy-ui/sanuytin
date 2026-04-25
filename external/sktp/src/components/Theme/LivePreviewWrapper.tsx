"use client";

import React, { useState, useEffect } from "react";

interface LivePreviewWrapperProps {
    initialImages: Record<string, string>;
    initialContent: Record<string, string>;
    children: React.ReactNode;
}

export default function LivePreviewWrapper({ initialImages, initialContent, children }: LivePreviewWrapperProps) {
    const [images, setImages] = useState(initialImages);
    const [content, setContent] = useState(initialContent);

    // Lắng nghe sự kiện từ Iframe của Admin Theme Editor
    useEffect(() => {
        // Chỉ chạy khi bị nhúng vào Iframe
        if (window.self === window.top) return;

        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === 'UPDATE_THEME_PREVIEW') {
                if (event.data.images) {
                    setImages(prev => ({ ...prev, ...event.data.images }));
                }
                if (event.data.content) {
                    setContent(prev => ({ ...prev, ...event.data.content }));
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    // Duyệt qua tất cả con trực tiếp (Hero, Feature, Service...)
    // Nếu Component đó có nhận prop images/content, ta sẽ đè state mới vào
    const enhancedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            const childProps = child.props as any;
            const newProps: any = {};
            
            // Nếu component yêu cầu props 'images' hoặc 'content', tiêm dữ liệu mới mẻ (live state)
            if (childProps.images !== undefined) newProps.images = images;
            if (childProps.content !== undefined) newProps.content = content;

            if (Object.keys(newProps).length > 0) {
                return React.cloneElement(child, newProps);
            }
        }
        return child;
    });

    return <>{enhancedChildren}</>;
}
