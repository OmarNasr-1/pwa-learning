"use client";

import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Senior Developer at TechCorp",
        avatar: "SC",
        content: "PWAs transformed how we deliver our product. Load times dropped by 60% and user engagement skyrocketed. The install rate exceeded our native app!",
        rating: 5,
    },
    {
        name: "Marcus Johnson",
        role: "CTO at StartupXYZ",
        avatar: "MJ",
        content: "We replaced our native apps with a PWA and saved 40% on development costs. One codebase, all platforms. It's the future of mobile development.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Product Manager at InnovateCo",
        avatar: "ER",
        content: "Our PWA works flawlessly offline. Customers in low-connectivity areas can now use our service without interruption. Game changer!",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Frontend Lead at DigitalAgency",
        avatar: "DK",
        content: "The service worker caching strategies made our app feel instant. Users thought we rebuilt everything from scratch, but it was just PWA magic.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="testimonials" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                            Loved by Developers
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        See what teams are saying about their PWA journey.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className={`relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-indigo-500/20" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-semibold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
