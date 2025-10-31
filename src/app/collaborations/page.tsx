"use client"
import Navbar from "@/sections/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const collaborations = [
    {
        id: 1,
        brandName: "Urban Needs",
        logo: "/assets/dp/urban needs.jpg",
        work: [
            {
                title: "Brand Content",
                description: "Engaging product showcase with promotional messaging",
                media: "/assets/collab/urbaneeeds-20251031T210926Z-1-001/urbaneeeds/200rsOFF code in my broadcast channel_._._🏷️ oversized tshirts relaxed fit graphic printed puff print high gsm(MP4).mp4",
                type: "video"
            },
            {
                title: "Brand Content",
                description: "Creative brand content with professional editing",
                media: "/assets/collab/urbaneeeds-20251031T210926Z-1-001/urbaneeeds/Video-13.mp4",
                type: "video"
            },
            {
                title: "Brand Content",
                description: "High-quality brand storytelling content",
                media: "/assets/collab/urbaneeeds-20251031T210926Z-1-001/urbaneeeds/Video-512.mp4",
                type: "video"
            }
        ]
    },
    {
        id: 2,
        brandName: "Burger Bae",
        logo: "/assets/dp/burger bae.jpg",
        work: [
            {
                title: "Brand Content",
                description: "Mouth-watering food content with appetizing visuals",
                media: "/assets/collab/burgerbae-20251031T210213Z-1-001/burgerbae/16_02_2025, 12_11_46.mp4",
                type: "video"
            },
            {
                title: "Brand Content",
                description: "Delicious food presentation with professional cinematography",
                media: "/assets/collab/burgerbae-20251031T210213Z-1-001/burgerbae/AQPPe5hprMjavywHugnOWD2Gwa4dywGjGGlm_XZ7-SaHvogG8wgznz7SitHDiXFBGyYekHllUM3MbZbar9c1Gmb0iFacQZiTTCvn_44.mp4",
                type: "video"
            }
        ]
    },
    {
        id: 3,
        brandName: "San Kalra",
        logo: "/assets/dp/san kalra.jpg",
        work: [
            {
                title: "Creator Content",
                description: "Engaging lifestyle content with authentic storytelling",
                media: "/assets/collab/san karla -20251031T210638Z-1-001/san karla/21_02_2025, 21_03_51.mp4",
                type: "video"
            },
            {
                title: "Creator Content",
                description: "Relatable daily life content with natural flow and humor",
                media: "/assets/collab/san karla -20251031T210638Z-1-001/san karla/vacation tan is fun_ daily life wala nahi bhai 😭 _h8 the sun for tans_ but obv love for the cortisol pulses every morn 😮_💨 _trying the _beardo.of(.mp4",
                type: "video"
            },
            {
                title: "Creator Content",
                description: "Creative video content with professional production",
                media: "/assets/collab/san karla -20251031T210638Z-1-001/san karla/Video-735.mp4",
                type: "video"
            }
        ]
    },
    {
        id: 4,
        brandName: "Ashmita Arora",
        logo: "/assets/dp/ashmita arora .jpg",
        work: [
            {
                title: "Creator Content",
                description: "Professional video content showcasing creative storytelling and engaging visuals",
                media: "/assets/collab/ashmita arora-20251031T205943Z-1-001/ashmita arora/Video-835.mp4",
                type: "video"
            }
        ]
    },
    {
        id: 5,
        brandName: "Be Your Best",
        logo: "/assets/dp/be your best.jpg",
        work: [
            {
                title: "Creator Content",
                description: "Comprehensive fashion guide featuring winter essentials and styling tips",
                media: "/assets/collab/beyourbest -20251031T210002Z-1-001/beyourbest/20 Winter Essentials EVERY Man Needs 2024 _ BeYourBest Fashion by San Kalra(1080P_HD).mp4",
                type: "video"
            },
            {
                title: "Creator Content",
                description: "Stylish fashion content with professional editing and engaging presentation",
                media: "/assets/collab/beyourbest -20251031T210002Z-1-001/beyourbest/Copy of Captions_CF2254.MP4",
                type: "video"
            }
        ]
    },
    {
        id: 6,
        brandName: "Blue Jelly Media",
        logo: "/assets/dp/blue jelly media.jpg",
        work: [
            {
                title: "Brand Content",
                description: "Creative media content with professional production quality",
                media: "/assets/collab/blue jelly media-20251031T210112Z-1-001/blue jelly media/16_02_2025, 12_11_49.mp4",
                type: "video"
            },
            {
                title: "Brand Content",
                description: "High-quality video production with dynamic visuals",
                media: "/assets/collab/blue jelly media-20251031T210112Z-1-001/blue jelly media/21_2_2025, 9_04_23 PM.mov",
                type: "video"
            },
            {
                title: "Brand Content",
                description: "Behind-the-scenes and draft content showcase",
                media: "/assets/collab/blue jelly media-20251031T210112Z-1-001/blue jelly media/draft .mp4",
                type: "video"
            }
        ]
    },
    {
        id: 7,
        brandName: "Carer",
        logo: "/assets/dp/carer.jpg",
        work: [
            {
                title: "Brand Content",
                description: "Medical and healthcare content with professional presentation",
                media: "/assets/collab/carer -20251031T210230Z-1-001/carer/Dr ankur reel 7.mp4",
                type: "video"
            }
        ]
    },
    {
        id: 8,
        brandName: "Dr. Chaitanya Challa",
        logo: "/assets/dp/chaitanya challa.jpg",
        work: [
            {
                title: "Creator Content",
                description: "Educational health content with clear messaging and expert insights",
                media: "/assets/collab/dr chaitanya challa-20251031T210530Z-1-001/dr chaitanya challa/33.IS CANCER GENETIC (1).mp4",
                type: "video"
            }
        ]
    },
    {
        id: 9,
        brandName: "Erasavir",
        logo: "/assets/dp/erasavir.jpg",
        work: [
            {
                title: "Brand Content",
                description: "Product trial and demonstration content",
                media: "/assets/collab/erasavir-20251031T210547Z-1-001/erasavir/30 oct trial video .mp4",
                type: "video"
            },
            {
                title: "Brand Content",
                description: "Compelling call-to-action ad with persuasive messaging",
                media: "/assets/collab/erasavir-20251031T210547Z-1-001/erasavir/ads cta.mov",
                type: "video"
            }
        ]
    },
    {
        id: 10,
        brandName: "Rangaai",
        logo: "/assets/dp/rangaai .webp",
        work: [
            {
                title: "Brand Content",
                description: "Creative brand storytelling with authentic engagement",
                media: "/assets/collab/rangaai-20251031T210622Z-1-001/rangaai/16_02_2025, 12_12_17.mp4",
                type: "video"
            }
        ]
    },
    {
        id: 11,
        brandName: "Suhana Sethi",
        logo: "/assets/dp/suhana sethi .jpg",
        work: [
            {
                title: "Creator Content",
                description: "Premium event coverage with cinematic quality and dynamic shots",
                media: "/assets/collab/suhana sethi-20251031T210705Z-1-001/suhana sethi/bmw event(6).mov",
                type: "video"
            }
        ]
    }
];

export default function Collaborations() {
    const [currentBrand, setCurrentBrand] = useState(0);
    const [currentWork, setCurrentWork] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Autoplay removed — carousel now advances only by user interaction (prev/next/dots/brand clicks).

    // Keyboard navigation for accessibility: left/right arrows
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [currentBrand, currentWork]);

    const handleBrandClick = (brandIndex: number) => {
        setCurrentBrand(brandIndex);
        setCurrentWork(0);
    };

    const handleWorkClick = (workIndex: number) => {
        setCurrentWork(workIndex);
    };

    const nextSlide = () => {
        if (currentWork < collaborations[currentBrand].work.length - 1) {
            setCurrentWork(currentWork + 1);
        } else {
            const nextBrand = (currentBrand + 1) % collaborations.length;
            setCurrentBrand(nextBrand);
            setCurrentWork(0);
        }
    };

    const prevSlide = () => {
        if (currentWork > 0) {
            setCurrentWork(currentWork - 1);
        } else {
            const prevBrand = currentBrand === 0 ? collaborations.length - 1 : currentBrand - 1;
            setCurrentBrand(prevBrand);
            setCurrentWork(collaborations[prevBrand].work.length - 1);
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
                                🤝 Our Partners
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 bg-gradient-to-r from-purple-400 via-lime-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                            Our Clients
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                            Showcasing the incredible brands we've partnered with and the stunning video content we've created together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-32">
                <div className="container max-w-[1800px] mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                        {/* Brand Logo Window */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-gradient-to-br from-neutral-900/70 via-neutral-900/50 to-neutral-900/30 border border-white/10 rounded-3xl p-6 backdrop-blur-md sticky top-24 shadow-2xl shadow-purple-500/5"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2 bg-gradient-to-r from-purple-300 to-lime-300 bg-clip-text text-transparent">Our Clients</h3>
                                <p className="text-sm text-white/50 mb-6">Select a client to view their work.</p>
                                <div className="space-y-2.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-lime-500/20 scrollbar-track-transparent hover:scrollbar-thumb-lime-500/40">
                                    {collaborations.map((brand, index) => (
                                        <motion.button
                                            key={brand.id}
                                            onClick={() => handleBrandClick(index)}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full text-left cursor-pointer p-3 rounded-xl transition-all duration-300 flex items-center gap-3 focus:outline-none ${
                                                currentBrand === index
                                                    ? 'ring-2 ring-lime-500/40 bg-lime-500/8 border border-lime-500/20'
                                                    : 'border border-white/6 hover:border-white/20 bg-transparent'
                                            }`}
                                            aria-pressed={currentBrand === index}
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-lime-500/10 rounded-lg overflow-hidden border border-lime-400/20 relative flex-shrink-0">
                                                <Image
                                                    src={brand.logo}
                                                    alt={brand.brandName}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-white text-sm truncate">{brand.brandName}</h4>
                                                <p className="text-xs text-white/50">{brand.work.length} video{brand.work.length !== 1 ? 's' : ''}</p>
                                            </div>
                                            <div className="text-base text-white/30 flex-shrink-0">›</div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Carousel */}
                        <div className="lg:col-span-9">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${currentBrand}-${currentWork}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        onClick={() => setSelectedVideo(collaborations[currentBrand].work[currentWork].media)}
                                        className="bg-gradient-to-br from-neutral-900/60 via-neutral-800/40 to-neutral-900/30 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-purple-500/10 cursor-pointer group"
                                    >
                                        <div className="aspect-video relative bg-neutral-950">
                                            <video
                                                src={collaborations[currentBrand].work[currentWork].media}
                                                className="w-full h-full object-contain"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-transparent to-transparent pointer-events-none" />
                                            
                                            {/* Play Icon Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                                                <div className="w-24 h-24 rounded-full bg-lime-400/20 backdrop-blur-sm border-2 border-lime-400 flex items-center justify-center shadow-lg shadow-lime-400/20">
                                                    <svg className="w-12 h-12 text-lime-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            
                                            {/* Content Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent pointer-events-none">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-lime-500/20 rounded-xl border border-lime-400/30 overflow-hidden relative flex-shrink-0">
                                                        <Image
                                                            src={collaborations[currentBrand].logo}
                                                            alt={collaborations[currentBrand].brandName}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-lg font-semibold text-lime-300">
                                                        {collaborations[currentBrand].brandName}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-lime-300 transition-colors duration-300">
                                                    {collaborations[currentBrand].work[currentWork].title}
                                                </h3>
                                                <p className="text-sm text-lime-400/70 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    Click to watch full video with sound
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Work Navigation Dots */}
                                <div className="flex justify-center gap-2.5 mt-6">
                                    {collaborations[currentBrand].work.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleWorkClick(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                                currentWork === index
                                                    ? 'bg-lime-400 w-8'
                                                    : 'bg-white/20 hover:bg-white/40 w-2.5'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                                    <motion.button
                                        className="w-16 h-16 bg-neutral-900/90 border border-white/15 rounded-full flex items-center justify-center backdrop-blur-md pointer-events-auto shadow-xl"
                                        onClick={prevSlide}
                                        aria-label="Previous slide"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </motion.button>
                                    
                                    <motion.button
                                        className="w-16 h-16 bg-neutral-900/90 border border-white/15 rounded-full flex items-center justify-center backdrop-blur-md pointer-events-auto shadow-xl"
                                        onClick={nextSlide}
                                        aria-label="Next slide"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
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
                            Ready to Collaborate?
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Let's create compelling video content together. Partner with Post Prodigies to bring your brand story to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button 
                                onClick={() => window.location.href = '/contact'}
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-lime-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-lime-600 transition-all duration-300 shadow-lg shadow-purple-500/25"
                            >
                                Start Collaboration
                            </button>
                            <button 
                                onClick={() => window.location.href = '/our-work'}
                                className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                            >
                                View Our Work
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
