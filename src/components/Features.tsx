"use client";

import { useState, useEffect } from "react";
import {
    Wifi,
    Smartphone,
    Zap,
    Shield,
    Download,
    RefreshCw,
    Bell,
    Globe
} from "lucide-react";

const features = [
    {
        icon: Wifi,
        title: "Offline Support",
        description: "Works without internet using service workers. Cache resources and provide seamless offline experiences.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Smartphone,
        title: "Install on Any Device",
        description: "Add to home screen on iOS, Android, and desktop. Feel like a native app without app stores.",
        gradient: "from-indigo-500 to-violet-500",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized caching strategies ensure instant loads. Pre-cache critical assets for speed.",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: Shield,
        title: "Secure by Default",
        description: "HTTPS required. Service workers run in secure contexts only, protecting user data.",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Download,
        title: "Small & Efficient",
        description: "No app store downloads needed. Progressive enhancement means minimal initial payload.",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        icon: RefreshCw,
        title: "Auto Updates",
        description: "Service workers handle updates seamlessly. Users always get the latest version.",
        gradient: "from-purple-500 to-fuchsia-500",
    },
    {
        icon: Bell,
        title: "Push Notifications",
        description: "Engage users with timely notifications. Re-engage even when the app is closed.",
        gradient: "from-red-500 to-pink-500",
    },
    {
        icon: Globe,
        title: "Cross-Platform",
        description: "One codebase, all platforms. Works on Chrome, Safari, Firefox, Edge, and more.",
        gradient: "from-teal-500 to-cyan-500",
    },
];

export default function Features() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="features" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                            Why Choose PWAs?
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Progressive Web Apps combine the best of web and native apps.
                        Here&apos;s what makes them special.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:-translate-y-1 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
