"use client"
import Navbar from "@/sections/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { getOurWorkProjects } from "@/lib/videoAssets";

export default function OurWork() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    
    // Get projects from centralized video assets
    const projects = getOurWorkProjects();

    const getGridClass = (size: string) => {
        switch (size) {
            case "large":
                return "col-span-2 md:col-span-3 lg:col-span-4 row-span-2";
            case "tall":
                return "col-span-1 md:col-span-2 lg:col-span-2 row-span-3";
            case "medium":
                return "col-span-1 md:col-span-2 lg:col-span-2 row-span-2";
            case "small":
                return "col-span-1 md:col-span-1 lg:col-span-2 row-span-1";
            default:
                return "col-span-1 md:col-span-2 lg:col-span-2 row-span-2";
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-40 pb-24">
                <div className="container max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-24"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex py-1 px-4 bg-gradient-to-r from-purple-400 to-lime-400 rounded-full text-neutral-950 font-semibold text-sm">
                                📹 Our Portfolio
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 bg-gradient-to-r from-purple-400 via-lime-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                            Work
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                            Explore our portfolio of cinematic video projects and creative solutions that bring stories to life with professional post-production excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid */}
            <section className="pb-32">
                <div className="container max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[200px] grid-flow-dense">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                onClick={() => setSelectedVideo(project.video)}
                                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 via-neutral-800/50 to-neutral-900/40 backdrop-blur-md hover:border-lime-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-lime-500/20 cursor-pointer hover:scale-[1.02] ${getGridClass(project.size)}`}
                            >
                                {/* Background Video */}
                                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-all duration-500">
                                    <video
                                        src={project.video}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        onError={(e) => {
                                            // Fallback: hide video if it fails to load
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                                
                                {/* Multi-layer Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-neutral-950/20" />
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Play Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="w-20 h-20 rounded-full bg-gradient-to-br from-lime-400/30 to-purple-500/30 backdrop-blur-md border-2 border-lime-400/80 flex items-center justify-center shadow-2xl shadow-lime-500/50"
                                    >
                                        <svg className="w-10 h-10 text-lime-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </motion.div>
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-5 md:p-6 h-full flex flex-col justify-end">
                                    <div className="mb-3">
                                        <span className="inline-block px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-500/30 to-lime-500/30 text-lime-300 border border-lime-400/50 rounded-full backdrop-blur-sm shadow-lg">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-lime-300 transition-colors duration-300 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors duration-300 line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                
                                {/* Animated Border Glow */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-lime-500/20 to-purple-500/20 blur-xl" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24">
                <div className="container max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="border border-white/10 rounded-3xl bg-gradient-to-br from-neutral-900/50 via-neutral-900/30 to-neutral-900/20 backdrop-blur-md p-12 md:p-16 shadow-2xl shadow-purple-500/5 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-purple-300 via-lime-300 to-purple-400 bg-clip-text text-transparent">
                            Ready to Bring Your Vision to Life?
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Let's collaborate to transform your footage into compelling visual stories with professional-grade video editing and post-production.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={() => window.location.href = '/about'}
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-lime-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-lime-600 transition-all duration-300 shadow-lg shadow-purple-500/25"
                            >
                                About Us
                            </button>
                            <button 
                                onClick={() => window.location.href = '/collaborations'}
                                className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                            >
                                View Collaborations
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-xl p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-7xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-14 right-0 text-white/70 hover:text-white transition-all duration-300 z-10 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-lime-500/20 hover:to-purple-500/20 flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-lime-400/50 shadow-lg hover:shadow-lime-500/50 transition-all duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </button>

                            {/* Video Player Container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-lime-500/30 border-2 border-lime-500/40 bg-black">
                                <video
                                    src={selectedVideo}
                                    controls
                                    autoPlay
                                    controlsList="nodownload"
                                    className="w-full h-auto max-h-[85vh] bg-black"
                                />
                            </div>
                            
                            {/* Ambient Glow Effect */}
                            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-lime-500 to-purple-500 animate-pulse" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
