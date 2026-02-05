import Link from "next/link";
import { Rocket, Github, Twitter, Linkedin, Heart } from "lucide-react";

const footerLinks = {
    resources: [
        { label: "Documentation", href: "https://web.dev/progressive-web-apps/" },
        { label: "MDN Web Docs", href: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" },
        { label: "Workbox", href: "https://developer.chrome.com/docs/workbox/" },
        { label: "PWA Builder", href: "https://www.pwabuilder.com/" },
    ],
    tools: [
        { label: "Next.js", href: "https://nextjs.org/" },
        { label: "Serwist", href: "https://serwist.pages.dev/" },
        { label: "Lighthouse", href: "https://developer.chrome.com/docs/lighthouse/" },
        { label: "Chrome DevTools", href: "https://developer.chrome.com/docs/devtools/" },
    ],
    community: [
        { label: "GitHub", href: "#" },
        { label: "Discord", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Blog", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">PWA Hub</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                            Learn how to build Progressive Web Apps that work everywhere.
                            This project demonstrates PWA best practices with Next.js,
                            Tailwind CSS, and Serwist.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Tools</h4>
                        <ul className="space-y-3">
                            {footerLinks.tools.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Community</h4>
                        <ul className="space-y-3">
                            {footerLinks.community.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 PWA Learning Hub. Built for learning purposes.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js PWA
                    </p>
                </div>
            </div>
        </footer>
    );
}
