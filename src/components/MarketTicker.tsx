"use client";

import { useEffect, useRef } from "react";

export default function MarketTicker() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Prevent duplicate injection
        if (containerRef.current?.querySelector("script")) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                { "proName": "FOREXCOM:SPX500", "title": "S&P 500 Index" },
                { "proName": "FX_IDC:XAUUSD", "title": "Vàng/USD" },
                { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
                { "proName": "FX:EURUSD", "title": "EUR/USD" },
                { "proName": "FX:USDJPY", "title": "USD/JPY" },
                { "proName": "FX:GBPUSD", "title": "GBP/USD" }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "adaptive",
            "locale": "vi_VN"
        });

        containerRef.current?.appendChild(script);
    }, []);

    return (
        <div className="w-full bg-slate-950/40 border-b border-border/50 py-1 overflow-hidden">
            <div ref={containerRef} className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
}
