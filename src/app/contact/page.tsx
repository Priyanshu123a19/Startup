"use client"
import Navbar from "@/sections/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
    const handleWhatsAppClick = () => {
        // WhatsApp link format: https://wa.me/phonenumber
        window.open('https://wa.me/6387262347', '_blank');
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-40 pb-20">
                <div className="container max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex py-1 px-4 bg-gradient-to-r from-purple-400 to-lime-400 rounded-full text-neutral-950 font-semibold text-sm">
                                📞 Get In Touch
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 bg-gradient-to-r from-purple-400 via-lime-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                            Get in Touch
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s create something amazing together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="pb-20">
                <div className="container max-w-5xl mx-auto px-4 md:px-6">
                    
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-neutral-900/70 via-neutral-900/50 to-neutral-900/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl shadow-purple-500/5">
                            <div className="mb-10 text-center">
                                <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-purple-300 via-lime-300 to-purple-400 bg-clip-text text-transparent">
                                    Let&apos;s Connect
                                </h2>
                                <p className="text-white/60 text-lg">
                                    Reach out to us through any of the following channels
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6 mb-10">
                                {/* Phone */}
                                <div className="flex items-center gap-4 p-5 bg-neutral-900/50 border border-white/10 rounded-xl hover:border-lime-500/30 transition-all duration-300">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-lime-500/20 rounded-xl flex items-center justify-center text-lime-400 flex-shrink-0">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-white/50 mb-1">Phone</h3>
                                        <a href="tel:6387262347" className="text-2xl font-bold text-white hover:text-lime-400 transition-colors duration-300">
                                            6387262347
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4 p-5 bg-neutral-900/50 border border-white/10 rounded-xl hover:border-lime-500/30 transition-all duration-300">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-lime-500/20 rounded-xl flex items-center justify-center text-lime-400 flex-shrink-0">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-white/50 mb-1">Email</h3>
                                        <a href="mailto:hello@postprodigies.com" className="text-xl md:text-2xl font-bold text-white hover:text-lime-400 transition-colors duration-300 break-all">
                                            hello@postprodigies.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <div className="text-center">
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105"
                                >
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    Connect on WhatsApp
                                </button>
                                <p className="text-sm text-white/50 mt-4">
                                    Click to start a conversation instantly
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
