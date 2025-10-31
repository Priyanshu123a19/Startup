"use client"
import Navbar from "@/sections/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function OurWork() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    
    const projects = [
        {
            id: 1,
            title: "BMW Event Coverage",
            description: "Professional event video with dynamic shots and smooth editing",
            video: "/assets/mini vlog-20251029T190115Z-1-001/mini vlog/bmw event(6).mov",
            category: "Events",
            size: "large"
        },
        {
            id: 2,
            title: "Mini Vlog Content",
            description: "Engaging vlog-style content with natural storytelling",
            video: "/assets/mini vlog-20251029T190115Z-1-001/mini vlog/21_02_2025, 21_03_51.mp4",
            category: "Vlog",
            size: "medium"
        },
        {
            id: 3,
            title: "Montage Compilation",
            description: "Dynamic montage with seamless transitions and energy",
            video: "/assets/montage-20251029T190231Z-1-001/montage/21_02_2025, 21_03_52.mp4",
            category: "Montage",
            size: "small"
        },
        {
            id: 4,
            title: "Health & Wellness Content",
            description: "Educational person-to-camera content with clear messaging",
            video: "/assets/person to camera -20251029T190034Z-1-001/person to camera/33.IS CANCER GENETIC (1).mp4",
            category: "Person to Camera",
            size: "small"
        },
        {
            id: 5,
            title: "Lifestyle & Self-Care",
            description: "Authentic lifestyle content with relatable storytelling",
            video: "/assets/person to camera -20251029T190034Z-1-001/person to camera/vacation tan is fun_ daily life wala nahi bhai 😭 _h8 the sun for tans_ but obv love for the cortisol pulses every morn 😮_💨 _trying the _beardo.of(.mp4",
            category: "Person to Camera",
            size: "small"
        },
        {
            id: 6,
            title: "UGC Style Content",
            description: "User-generated content style with authentic feel",
            video: "/assets/ugc -20251029T185609Z-1-001/ugc/16_02_2025, 12_12_17.mp4",
            category: "UGC",
            size: "medium"
        },
        {
            id: 7,
            title: "Call-to-Action Ad",
            description: "Compelling advertising content with strong CTA",
            video: "/assets/ugc -20251029T185609Z-1-001/ugc/ads cta.mov",
            category: "UGC",
            size: "small"
        },
        {
            id: 8,
            title: "Creative Showcase",
            description: "Stunning visual presentation with artistic flair",
            video: "/assets/new/Video-13(1).mp4",
            category: "Creative",
            size: "small"
        },
        {
            id: 9,
            title: "Brand Story",
            description: "Compelling brand narrative with emotional impact",
            video: "/assets/new/Video-512.mp4",
            category: "Brand",
            size: "small"
        },
        {
            id: 10,
            title: "Event Highlights Reel",
            description: "Premium event coverage with cinematic quality",
            video: "/assets/mini vlog-20251029T190115Z-1-001/mini vlog/bmw event(6).mov",
            category: "Events",
            size: "medium"
        }
    ];

    const getGridClass = (size: string) => {
        switch (size) {
            case "large":
                return "col-span-2 md:col-span-2 lg:col-span-3 row-span-2";
            case "medium":
                return "col-span-1 md:col-span-2 lg:col-span-2 row-span-2";
            case "small":
                return "col-span-1 md:col-span-1 lg:col-span-1 row-span-1";
            default:
                return "col-span-1 md:col-span-1 lg:col-span-1 row-span-1";
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
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 auto-rows-[180px] grid-flow-dense">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                onClick={() => setSelectedVideo(project.video)}
                                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/60 via-neutral-800/40 to-neutral-900/30 backdrop-blur-sm hover:border-lime-500/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-lime-500/10 cursor-pointer ${getGridClass(project.size)}`}
                            >
                                {/* Background Video */}
                                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                                    <video
                                        src={project.video}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
                                
                                {/* Play Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <div className="w-16 h-16 rounded-full bg-lime-400/20 backdrop-blur-sm border-2 border-lime-400 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-lime-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                                    <div className="mb-2">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-lime-500/20 text-lime-300 border border-lime-400/30 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-1 group-hover:text-lime-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                                
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-lime-500/0 group-hover:from-purple-500/10 group-hover:to-lime-500/10 transition-all duration-300" />
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-10 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </button>

                            {/* Video Player */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-lime-500/20 border-2 border-lime-500/30">
                                <video
                                    src={selectedVideo}
                                    controls
                                    autoPlay
                                    className="w-full h-auto max-h-[85vh] bg-black"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
