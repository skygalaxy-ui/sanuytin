"use client";

import { useEffect, useState } from "react";
import {
    Building2, FileText, Gift, TrendingUp, CheckCircle, XCircle,
    BarChart3, Eye, Clock, ArrowUpRight, Database,
    RefreshCcw, Calendar, Settings, FolderOpen, Upload, MessageSquare,
    LayoutGrid, PenTool, Share
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const keyTasks = [
    { label: "Upload", href: "/admin/posts", icon: Upload, color: "bg-sky-500 hover:bg-sky-600" },
    { label: "Create", href: "/admin/posts", icon: PenTool, color: "bg-emerald-500 hover:bg-emerald-600" },
    { label: "Manage", href: "/admin/brokers", icon: LayoutGrid, color: "bg-amber-500 hover:bg-amber-600" },
    { label: "Share", href: "/admin/posts", icon: Share, color: "bg-blue-500 hover:bg-blue-600" },
    { label: "Publish", href: "/admin/posts", icon: MessageSquare, color: "bg-violet-500 hover:bg-violet-600" },
];

const menuItems = [
    { label: "Quản lý Sàn", href: "/admin/brokers", icon: Building2, desc: "Thêm, sửa, xóa sàn" },
    { label: "Bài viết", href: "/admin/posts", icon: FileText, desc: "Quản lý nội dung" },
    { label: "Danh mục", href: "/admin/categories", icon: FolderOpen, desc: "Phân loại" },
    { label: "Khuyến mãi", href: "/admin/promotions", icon: Gift, desc: "Cập nhật promo" },
    { label: "Lịch Nội Dung", href: "/admin/content-calendar", icon: Calendar, desc: "Lên kế hoạch" },
    { label: "Cài đặt", href: "/admin/settings", icon: Settings, desc: "Cấu hình" },
];

export default function AdminDashboard() {
    const [brokerCount, setBrokerCount] = useState<number | null>(null);
    const [postCount, setPostCount] = useState<number | null>(null);
    const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'error'>('loading');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { count: bCount, error: bError } = await supabase
                    .from('brokers')
                    .select('*', { count: 'exact', head: true });

                const { count: pCount, error: pError } = await supabase
                    .from('posts')
                    .select('*', { count: 'exact', head: true });

                if (bError) throw bError;

                setConnectionStatus('connected');
                setBrokerCount(bCount || 0);
                setPostCount(pCount || 0);

            } catch (error: any) {
                console.error("Supabase connection error:", error);
                setConnectionStatus('error');
            }
        };

        fetchData();
    }, []);

    const stats = [
        {
            label: "Sàn giao dịch",
            value: brokerCount !== null ? brokerCount.toString() : "...",
            change: "+2 tuần này",
            icon: Building2,
            color: "border-l-sky-500",
            iconBg: "bg-sky-100 text-sky-600"
        },
        {
            label: "Bài viết",
            value: postCount !== null ? postCount.toString() : "...",
            change: "+5 tháng này",
            icon: FileText,
            color: "border-l-emerald-500",
            iconBg: "bg-emerald-100 text-emerald-600"
        },
        {
            label: "Lượt xem",
            value: "12.5K",
            change: "+18% so tuần trước",
            icon: Eye,
            color: "border-l-violet-500",
            iconBg: "bg-violet-100 text-violet-600"
        },
        {
            label: "Khuyến mãi",
            value: "8",
            change: "3 đang hoạt động",
            icon: Gift,
            color: "border-l-amber-500",
            iconBg: "bg-amber-100 text-amber-600"
        },
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-7xl mx-auto p-4 space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
                        <p className="text-slate-500 text-sm">
                            {currentTime.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                    {/* Connection Status */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${connectionStatus === 'connected'
                        ? 'bg-emerald-100 text-emerald-700'
                        : connectionStatus === 'error'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                        {connectionStatus === 'loading' && <RefreshCcw size={14} className="animate-spin" />}
                        {connectionStatus === 'connected' && <CheckCircle size={14} />}
                        {connectionStatus === 'error' && <XCircle size={14} />}
                        <span>
                            {connectionStatus === 'loading' && 'Connecting...'}
                            {connectionStatus === 'connected' && 'Connected'}
                            {connectionStatus === 'error' && 'Connection Error'}
                        </span>
                    </div>
                </div>

                {/* Key Tasks - Action Buttons */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
                    <h2 className="text-sm font-semibold text-slate-700 mb-3">Key Tasks</h2>
                    <div className="flex flex-wrap gap-2">
                        {keyTasks.map((task) => (
                            <Link
                                key={task.label}
                                href={task.href}
                                className={`flex items-center gap-1.5 px-3 py-2 ${task.color} text-white rounded-md text-xs font-medium transition-colors shadow-sm`}
                            >
                                <task.icon size={16} />
                                {task.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className={`bg-white rounded-lg shadow-sm border border-slate-200 border-l-4 ${stat.color} p-3`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className={`w-8 h-8 ${stat.iconBg} rounded-md flex items-center justify-center`}>
                                    <stat.icon size={16} />
                                </div>
                                <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
                                    <TrendingUp size={12} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                            <p className="text-slate-600 text-xs font-medium">{stat.label}</p>
                            <p className="text-slate-400 text-[10px] mt-0.5">{stat.change}</p>
                        </div>
                    ))}
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Quick Links */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-slate-200 p-4">
                        <h2 className="text-sm font-semibold text-slate-700 mb-3">Quản lý nội dung</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex flex-col items-center gap-1.5 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group text-center"
                                >
                                    <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center group-hover:border-sky-300 group-hover:bg-sky-50 transition-colors">
                                        <item.icon size={18} className="text-slate-500 group-hover:text-sky-600" />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-medium text-sm">{item.label}</p>
                                        <p className="text-slate-400 text-xs">{item.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* System Status & Activity */}
                    <div className="space-y-4">
                        {/* Analytics Card */}
                        <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-lg shadow-sm p-4 text-white">
                            <div className="flex items-center gap-2 mb-3">
                                <BarChart3 size={18} />
                                <span className="font-semibold text-sm">Analytics</span>
                            </div>
                            <div className="text-center py-3">
                                <p className="text-3xl font-bold">428</p>
                                <p className="text-sky-200 text-sm">Cases Evaluated</p>
                            </div>
                            <div className="flex gap-1 mt-2">
                                <div className="h-2 bg-emerald-400 rounded-full flex-1"></div>
                                <div className="h-2 bg-amber-400 rounded-full w-1/4"></div>
                                <div className="h-2 bg-red-400 rounded-full w-1/6"></div>
                            </div>
                            <div className="flex justify-between text-xs mt-2 text-sky-200">
                                <span>75% Complete</span>
                                <span>25% Pending</span>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Database size={16} className="text-slate-500" />
                                <h2 className="text-sm font-semibold text-slate-700">System Status</h2>
                            </div>

                            <div className="space-y-2">
                                <StatusRow
                                    label="Database"
                                    status={connectionStatus === 'connected' ? 'online' : connectionStatus === 'error' ? 'offline' : 'loading'}
                                />
                                <StatusRow label="Storage" status="online" />
                                <StatusRow label="API" status="online" />
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
                            <h2 className="text-sm font-semibold text-slate-700 mb-3">Recent Activity</h2>
                            <div className="space-y-2">
                                <ActivityItem
                                    title="Cập nhật sàn Vantage"
                                    time="2 giờ trước"
                                />
                                <ActivityItem
                                    title="Đăng bài viết mới"
                                    time="5 giờ trước"
                                />
                                <ActivityItem
                                    title="Thêm khuyến mãi"
                                    time="1 ngày trước"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ActivityItem({ title, time }: { title: string; time: string }) {
    return (
        <div className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
            <div className="w-2 h-2 bg-sky-500 rounded-full shrink-0"></div>
            <div className="flex-1 min-w-0">
                <p className="text-slate-700 text-sm truncate">{title}</p>
                <p className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock size={10} />
                    {time}
                </p>
            </div>
        </div>
    );
}

function StatusRow({ label, status }: { label: string; status: 'online' | 'offline' | 'loading' }) {
    return (
        <div className="flex items-center justify-between py-2">
            <span className="text-slate-600 text-sm">{label}</span>
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-emerald-500' :
                    status === 'offline' ? 'bg-red-500' :
                        'bg-amber-500 animate-pulse'
                    }`} />
                <span className={`text-xs font-medium ${status === 'online' ? 'text-emerald-600' :
                    status === 'offline' ? 'text-red-600' :
                        'text-amber-600'
                    }`}>
                    {status === 'online' ? 'Online' : status === 'offline' ? 'Offline' : 'Checking...'}
                </span>
            </div>
        </div>
    );
}
