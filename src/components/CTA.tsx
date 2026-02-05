"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
    return (
        <section id="cta" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950" />

            {/* Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
                    <Sparkles className="w-4 h-4" />
                    <span>Start Building Today</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Ready to Build Your
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                        First PWA?
                    </span>
                </h2>

                {/* Description */}
                <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    This landing page is itself a PWA! Try installing it on your device to see
                    the magic in action. Learn by example and start building amazing experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-indigo-500/30 transition-all hover:scale-105"
                    >
                        Install This PWA
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                        href="https://web.dev/progressive-web-apps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 text-slate-300 font-semibold hover:text-white transition-colors underline underline-offset-4 decoration-slate-600 hover:decoration-slate-400"
                    >
                        Read the Docs
                    </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>Lighthouse PWA Score: 100</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>Works Offline</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>Installable</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
