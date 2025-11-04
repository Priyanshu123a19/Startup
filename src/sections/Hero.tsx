"use client"
import Button from "@/components/Button"
import cursorYouImage from "@/assets/images/cursor-you.svg"
import { motion } from "framer-motion"

export default function Hero() {
    return (
    <section className="py-24 overflow-x-clip relative" style={{
        cursor: `url(${cursorYouImage.src}), auto`
    }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating gradient orbs */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-lime-500/20 rounded-full blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-lime-500/20 to-purple-500/20 rounded-full blur-3xl"
                animate={{
                    y: [0, -40, 0],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-lime-400/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>

        <div className="container relative z-10">
            <div className="flex justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-lime-400 rounded-full text-neutral-950 font-semibold"
                >
                    🎬 Cloud-Native Post Production
                </motion.div>
            </div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl lg:text-8xl md:text-7xl font-medium text-center mt-6"
            >
                Post Prodigies
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto"
            >
                Transform your raw footage into compelling visual narratives. Our expert editors bring your vision to life with professional-grade post-production magic.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
                <Button 
                    variant="primary" 
                    className="whitespace-nowrap"
                    onClick={() => window.location.href = '/contact'}
                >
                    Contact Us
                </Button>
                <div className="relative whitespace-nowrap">
                    {/* Animated gradient border */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-lime-500 to-purple-500 opacity-75"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            backgroundSize: '200% 100%',
                        }}
                    />
                    {/* Inner button with slight inset */}
                    <div className="relative m-[2px]">
                        <Button 
                            variant="secondary" 
                            className="whitespace-nowrap bg-neutral-950 hover:bg-neutral-900 transition-colors duration-300"
                            onClick={() => window.location.href = '/our-work'}
                        >
                            View Our Work
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Animated stats bar */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 max-w-5xl mx-auto"
            >
                <div className="relative p-8 bg-gradient-to-br from-neutral-900/60 via-neutral-900/40 to-neutral-900/20 border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-lime-500/10 to-purple-500/10"
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    
                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent mb-2">
                                200M+
                            </div>
                            <p className="text-xs md:text-sm text-white/60">Views on Edited Posts</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-lime-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                50+
                            </div>
                            <p className="text-xs md:text-sm text-white/60">Brand Collaborations</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent mb-2">
                                4K/8K
                            </div>
                            <p className="text-xs md:text-sm text-white/60">Ultra HD Delivery</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-lime-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                24Hrs
                            </div>
                            <p className="text-xs md:text-sm text-white/60">Fast Turnaround</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
    );
}
