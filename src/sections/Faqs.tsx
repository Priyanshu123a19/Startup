'use client'
import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What makes Post Prodigies different from other video editing agencies?",
        answer: "We focus on cinematic storytelling and professional-grade post-production. Instead of just basic editing, we create compelling visual narratives with advanced color grading, motion graphics, and visual effects. Our goal is to transform your raw footage into engaging content that captivates your audience.",
    },
    {
        question: "Do I need to provide professional footage to work with you?",
        answer: "Not at all! We work with all types of footage, from smartphone recordings to professional camera work. Our editors are skilled at enhancing any type of content and can guide you on best practices for future shoots.",
    },
    {
        question: "What kind of video editing services do you offer?",
        answer: "We offer comprehensive post-production services including basic editing, color grading, motion graphics, visual effects, audio mixing, text animations, and complete video packages. We work with all formats and can deliver in any resolution you need.",
    },
    {
        question: "What is the typical turnaround time for projects?",
        answer: "Turnaround times vary based on project complexity. Simple edits typically take 2-3 days, while complex projects with motion graphics and effects may take 1-2 weeks. We always provide realistic timelines upfront and keep you updated throughout the process.",
    },
    {
        question: "How do you handle revisions and feedback?",
        answer: "We include multiple rounds of revisions in our packages and work closely with you to ensure the final product exceeds your expectations. We use collaborative tools to share progress and gather feedback efficiently throughout the editing process.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
            <Tag>Faqs</Tag>
            </div>
            <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                Questions? we&apos;ve got <span className="text-lime-400">answers</span>
            </h2>
            <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                {faqs.map((faq, faqIndex) => (
                    <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
                        <div className="flex justify-between items-center" onClick={()=> {setSelectedIndex(faqIndex)}}>
                        <h3 className="font-medium">{faq.question}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={twMerge("feather feather-plus text-lime-400 flex-shrink-0 transition duration-300", selectedIndex === faqIndex && "rotate-45")}>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        </div>
                        <AnimatePresence>
                        {selectedIndex === faqIndex && (
                            <motion.div 
                            initial={{height:0,marginTop:0}}
                            animate={{height:"auto",marginTop:"24"}}
                            exit={{height:0,marginTop:0}}
                            className={twMerge("overflow-hidden")}>
                                <p className="text-white/50">{faq.answer}</p>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}
