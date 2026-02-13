"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface AffiliateButtonProps {
    slug: string;
    fallbackLink: string;
}

export default function AffiliateButton({ slug, fallbackLink }: AffiliateButtonProps) {
    const [link, setLink] = useState(fallbackLink);

    useEffect(() => {
        async function fetchLink() {
            const { data, error } = await supabase
                .from("brokers")
                .select("register_link")
                .eq("slug", slug)
                .single();

            if (!error && data?.register_link && data.register_link !== "#") {
                setLink(data.register_link);
            }
        }
        fetchLink();
    }, [slug]);

    return (
        <a
            href={link}
            target="_blank"
            rel="nofollow noreferrer"
            className="w-full py-4 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 rounded-xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white transition-all"
        >
            Mở Tài Khoản <ChevronRight size={18} />
        </a>
    );
}
