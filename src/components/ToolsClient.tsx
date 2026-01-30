"use client";

import { useState } from "react";
import { Calculator, DollarSign, TrendingUp, PieChart, X } from "lucide-react";

// Pip Calculator Component
function PipCalculator({ onClose }: { onClose: () => void }) {
    const [currencyPair, setCurrencyPair] = useState("EUR/USD");
    const [lotSize, setLotSize] = useState("1");
    const [accountCurrency, setAccountCurrency] = useState("USD");
    const [result, setResult] = useState<number | null>(null);

    const pairs: Record<string, number> = {
        "EUR/USD": 10,
        "GBP/USD": 10,
        "USD/JPY": 9.09,
        "USD/CHF": 10.87,
        "AUD/USD": 10,
        "USD/CAD": 7.41,
        "NZD/USD": 10,
        "XAU/USD": 1,
    };

    const calculate = () => {
        const lot = parseFloat(lotSize) || 0;
        const pipValue = pairs[currencyPair] || 10;
        setResult(lot * pipValue);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Calculator className="text-blue-500" size={24} /> Máy Tính Pip
                    </h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Cặp tiền tệ</label>
                        <select
                            value={currencyPair}
                            onChange={(e) => setCurrencyPair(e.target.value)}
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        >
                            {Object.keys(pairs).map((pair) => (
                                <option key={pair} value={pair}>{pair}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Khối lượng (Lot)</label>
                        <input
                            type="number"
                            value={lotSize}
                            onChange={(e) => setLotSize(e.target.value)}
                            placeholder="1.0"
                            step="0.01"
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    <button
                        onClick={calculate}
                        className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        Tính Giá Trị Pip
                    </button>

                    {result !== null && (
                        <div className="mt-4 p-4 bg-primary/10 rounded-xl text-center">
                            <p className="text-sm text-muted-foreground">Giá trị 1 Pip</p>
                            <p className="text-3xl font-bold text-primary">${result.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Margin Calculator Component
function MarginCalculator({ onClose }: { onClose: () => void }) {
    const [lotSize, setLotSize] = useState("1");
    const [leverage, setLeverage] = useState("100");
    const [price, setPrice] = useState("1.1000");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const lot = parseFloat(lotSize) || 0;
        const lev = parseFloat(leverage) || 1;
        const p = parseFloat(price) || 1;
        const contractSize = 100000;
        const margin = (lot * contractSize * p) / lev;
        setResult(margin);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <PieChart className="text-purple-500" size={24} /> Máy Tính Margin
                    </h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Khối lượng (Lot)</label>
                        <input
                            type="number"
                            value={lotSize}
                            onChange={(e) => setLotSize(e.target.value)}
                            placeholder="1.0"
                            step="0.01"
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Đòn bẩy (1:x)</label>
                        <select
                            value={leverage}
                            onChange={(e) => setLeverage(e.target.value)}
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        >
                            <option value="50">1:50</option>
                            <option value="100">1:100</option>
                            <option value="200">1:200</option>
                            <option value="500">1:500</option>
                            <option value="1000">1:1000</option>
                            <option value="2000">1:2000</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Giá hiện tại</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="1.1000"
                            step="0.0001"
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    <button
                        onClick={calculate}
                        className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        Tính Margin
                    </button>

                    {result !== null && (
                        <div className="mt-4 p-4 bg-purple-500/10 rounded-xl text-center">
                            <p className="text-sm text-muted-foreground">Margin cần thiết</p>
                            <p className="text-3xl font-bold text-purple-500">${result.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Currency Converter Component
function CurrencyConverter({ onClose }: { onClose: () => void }) {
    const [amount, setAmount] = useState("1000");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("VND");
    const [result, setResult] = useState<number | null>(null);

    const rates: Record<string, number> = {
        "USD": 1,
        "EUR": 0.92,
        "GBP": 0.79,
        "JPY": 148.5,
        "VND": 24500,
        "AUD": 1.53,
        "CAD": 1.35,
        "CHF": 0.88,
    };

    const calculate = () => {
        const amt = parseFloat(amount) || 0;
        const fromRate = rates[fromCurrency] || 1;
        const toRate = rates[toCurrency] || 1;
        const converted = (amt / fromRate) * toRate;
        setResult(converted);
    };

    const currencies = Object.keys(rates);

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <DollarSign className="text-green-500" size={24} /> Chuyển Đổi Tiền Tệ
                    </h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Số tiền</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="1000"
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">Từ</label>
                            <select
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                                className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                            >
                                {currencies.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">Đến</label>
                            <select
                                value={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value)}
                                className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                            >
                                {currencies.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={calculate}
                        className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        Chuyển Đổi
                    </button>

                    {result !== null && (
                        <div className="mt-4 p-4 bg-green-500/10 rounded-xl text-center">
                            <p className="text-sm text-muted-foreground">{amount} {fromCurrency} =</p>
                            <p className="text-3xl font-bold text-green-500">
                                {result.toLocaleString('en-US', { maximumFractionDigits: 2 })} {toCurrency}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Profit Calculator Component
function ProfitCalculator({ onClose }: { onClose: () => void }) {
    const [entryPrice, setEntryPrice] = useState("1.1000");
    const [exitPrice, setExitPrice] = useState("1.1050");
    const [lotSize, setLotSize] = useState("1");
    const [direction, setDirection] = useState("buy");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const entry = parseFloat(entryPrice) || 0;
        const exit = parseFloat(exitPrice) || 0;
        const lot = parseFloat(lotSize) || 0;
        const pipValue = 10; // Standard pip value for major pairs
        const pips = (exit - entry) * 10000;
        const profit = direction === "buy" ? pips * lot * pipValue : -pips * lot * pipValue;
        setResult(profit);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <TrendingUp className="text-orange-500" size={24} /> Tính Lợi Nhuận
                    </h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Hướng giao dịch</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => setDirection("buy")}
                                className={`py-2 rounded-lg font-bold transition-colors ${direction === "buy"
                                    ? "bg-green-500 text-white"
                                    : "bg-secondary text-muted-foreground hover:bg-green-500/20"
                                    }`}
                            >
                                MUA (Buy)
                            </button>
                            <button
                                onClick={() => setDirection("sell")}
                                className={`py-2 rounded-lg font-bold transition-colors ${direction === "sell"
                                    ? "bg-red-500 text-white"
                                    : "bg-secondary text-muted-foreground hover:bg-red-500/20"
                                    }`}
                            >
                                BÁN (Sell)
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Giá vào lệnh</label>
                        <input
                            type="number"
                            value={entryPrice}
                            onChange={(e) => setEntryPrice(e.target.value)}
                            placeholder="1.1000"
                            step="0.0001"
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Giá đóng lệnh</label>
                        <input
                            type="number"
                            value={exitPrice}
                            onChange={(e) => setExitPrice(e.target.value)}
                            placeholder="1.1050"
                            step="0.0001"
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Khối lượng (Lot)</label>
                        <input
                            type="number"
                            value={lotSize}
                            onChange={(e) => setLotSize(e.target.value)}
                            placeholder="1.0"
                            step="0.01"
                            className="w-full p-3 bg-secondary border border-border rounded-xl text-foreground focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    <button
                        onClick={calculate}
                        className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        Tính Lợi Nhuận
                    </button>

                    {result !== null && (
                        <div className={`mt-4 p-4 rounded-xl text-center ${result >= 0 ? "bg-green-500/10" : "bg-red-500/10"}`}>
                            <p className="text-sm text-muted-foreground">{result >= 0 ? "Lợi Nhuận" : "Thua Lỗ"}</p>
                            <p className={`text-3xl font-bold ${result >= 0 ? "text-green-500" : "text-red-500"}`}>
                                {result >= 0 ? "+" : ""}{result.toFixed(2)} USD
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Main Tools Client Component
export default function ToolsClient() {
    const [activeTool, setActiveTool] = useState<number | null>(null);

    const tools = [
        {
            id: 1,
            title: "Máy Tính Pip",
            desc: "Tính giá trị của mỗi pip cho các cặp tiền tệ và khối lượng giao dịch khác nhau.",
            icon: <Calculator size={32} className="text-blue-500" />,
            component: PipCalculator,
        },
        {
            id: 2,
            title: "Máy Tính Margin",
            desc: "Xác định số tiền ký quỹ cần thiết để mở lệnh dựa trên đòn bẩy.",
            icon: <PieChart size={32} className="text-purple-500" />,
            component: MarginCalculator,
        },
        {
            id: 3,
            title: "Chuyển Đổi Tiền Tệ",
            desc: "Cập nhật tỷ giá hối đoái thời gian thực giữa các đồng tiền chính.",
            icon: <DollarSign size={32} className="text-green-500" />,
            component: CurrencyConverter,
        },
        {
            id: 4,
            title: "Tính Lợi Nhuận",
            desc: "Dự tính lợi nhuận hoặc thua lỗ tiềm năng cho lệnh giao dịch của bạn.",
            icon: <TrendingUp size={32} className="text-orange-500" />,
            component: ProfitCalculator,
        },
    ];

    const ActiveComponent = activeTool ? tools.find(t => t.id === activeTool)?.component : null;

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((item) => (
                    <div key={item.id} className="bg-card dark:bg-card/40 p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                        <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {item.desc}
                        </p>
                        <button
                            onClick={() => setActiveTool(item.id)}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors w-full"
                        >
                            Sử dụng ngay
                        </button>
                    </div>
                ))}
            </div>

            {ActiveComponent && (
                <ActiveComponent onClose={() => setActiveTool(null)} />
            )}
        </>
    );
}
