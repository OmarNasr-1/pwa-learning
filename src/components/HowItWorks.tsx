"use client";

import { FileJson, Settings, Globe2, CheckCircle2 } from "lucide-react";

const steps = [
    {
        step: 1,
        icon: FileJson,
        title: "Create Manifest",
        description: "Define your app's name, icons, colors, and display mode in manifest.json. This tells the browser how to install your app.",
        code: `{
  "name": "My PWA App",
  "short_name": "MyApp",
  "display": "standalone",
  "theme_color": "#6366f1"
}`,
    },
    {
        step: 2,
        icon: Settings,
        title: "Add Service Worker",
        description: "Create a service worker to cache resources and enable offline functionality. Handle fetch events to serve cached content.",
        code: `// sw.ts
serwist.addEventListeners();
// Caches assets automatically
// Works offline seamlessly`,
    },
    {
        step: 3,
        icon: Globe2,
        title: "Serve Over HTTPS",
        description: "PWAs require a secure connection. Deploy to a platform that provides SSL certificates like Vercel or Netlify.",
        code: `# Deploy to Vercel
npx vercel deploy

# Automatic HTTPS
# Zero configuration`,
    },
    {
        step: 4,
        icon: CheckCircle2,
        title: "Install & Enjoy",
        description: "Users can now install your app from the browser. It appears on their home screen and works like a native app!",
        code: `// Install prompt appears
// Works on all devices
// Offline capability
// Push notifications`,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                            How PWAs Work
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Building a PWA is simpler than you think. Follow these steps to transform
                        your web app into an installable experience.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                    {steps.map((item, index) => (
                        <div
                            key={item.step}
                            className="relative group"
                        >
                            <div className="flex gap-6">
                                {/* Step Number */}
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                        <span className="text-xl font-bold text-white">{item.step}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <item.icon className="w-5 h-5 text-indigo-400" />
                                        <h3 className="text-xl font-semibold text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-400 mb-4 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Code Block */}
                                    <div className="relative rounded-xl bg-slate-900/80 border border-slate-800/50 p-4 overflow-hidden">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
                                            <code>{item.code}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute left-7 top-20 w-0.5 h-24 bg-gradient-to-b from-indigo-500/50 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
