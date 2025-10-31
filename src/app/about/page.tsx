"use client";
import { motion } from "framer-motion";
import Navbar from "@/sections/Navbar";

export default function AboutPage() {
    return (
        <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
            
            <Navbar />
            
            <section className="py-24 relative z-10">
                <div className="container max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex py-1 px-4 bg-gradient-to-r from-purple-400 to-lime-400 rounded-full text-neutral-950 font-semibold text-sm">
                                ✨ About Us
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 bg-gradient-to-r from-purple-400 via-lime-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                            Welcome to Post Prodigies
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-neutral-900/70 via-neutral-900/50 to-neutral-900/30 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-md shadow-2xl shadow-purple-500/10">
                            <div className="space-y-8">
                                {/* Main Content */}
                                <div className="space-y-6">
                                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                                        We're a <span className="text-lime-400 font-semibold">cloud-based video editing studio</span> that makes professional post-production simple and accessible. No complicated software, no expensive hardware—just great editing.
                                    </p>
                                    
                                    <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                                        Send us your footage, and we'll handle everything from <span className="text-purple-300 font-medium">editing</span> to <span className="text-purple-300 font-medium">color grading</span> and <span className="text-purple-300 font-medium">sound design</span>. You get to focus on creating content while we take care of the technical stuff.
                                    </p>
                                    
                                    <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                                        It's <span className="text-lime-400 font-semibold">video editing made easy</span>, so you can spend more time doing what you love.
                                    </p>
                                </div>

                                {/* Key Features */}
                                <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-lime-500/20 rounded-2xl flex items-center justify-center border border-purple-400/30">
                                            <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Cloud-Based</h3>
                                        <p className="text-sm text-white/60">Work from anywhere, anytime</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-lime-500/20 rounded-2xl flex items-center justify-center border border-purple-400/30">
                                            <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Skilled Editors</h3>
                                        <p className="text-sm text-white/60">Experienced team ready to help</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-lime-500/20 rounded-2xl flex items-center justify-center border border-purple-400/30">
                                            <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Complete Service</h3>
                                        <p className="text-sm text-white/60">Everything you need in one place</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        <div className="text-center p-6 bg-gradient-to-br from-neutral-900/50 via-neutral-900/30 to-neutral-900/20 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent mb-2">
                                500+
                            </div>
                            <p className="text-white/60 text-sm">Projects Delivered</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-neutral-900/50 via-neutral-900/30 to-neutral-900/20 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent mb-2">
                                100%
                            </div>
                            <p className="text-white/60 text-sm">Client Satisfaction</p>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-neutral-900/50 via-neutral-900/30 to-neutral-900/20 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent mb-2">
                                24/7
                            </div>
                            <p className="text-white/60 text-sm">Cloud Platform</p>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-20 border border-white/10 rounded-3xl bg-gradient-to-br from-neutral-900/50 via-neutral-900/30 to-neutral-900/20 backdrop-blur-md p-12 md:p-16 shadow-2xl shadow-purple-500/5 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-purple-300 via-lime-300 to-purple-400 bg-clip-text text-transparent">
                            Let's Work Together
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Got a video project in mind? We'd love to help bring your ideas to life. Reach out and let's create something great together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={() => window.location.href = '/contact'}
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-lime-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-lime-600 transition-all duration-300 shadow-lg shadow-purple-500/25"
                            >
                                Get in Touch
                            </button>
                            <button 
                                onClick={() => window.location.href = '/our-work'}
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                            >
                                See Our Work
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
