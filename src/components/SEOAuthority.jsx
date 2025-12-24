"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './SEOAuthority.css';

const SEOAuthority = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const reasons = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: "Practical Approach",
            description: "I focus on solutions that work in production, not just in theory. Every decision is backed by data and real-world testing."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
            title: "Performance First",
            description: "Whether it's model accuracy or system latency, I optimize for metrics that matter. Fast, efficient, and scalable by design."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
            ),
            title: "Continuous Learning",
            description: "AI and data science evolve quickly. I stay current with research, experiment with new techniques, and adapt to emerging tools."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "End-to-End Ownership",
            description: "From problem definition to deployment and monitoring, I handle the complete lifecycle of AI projects with attention to detail."
        }
    ];

    return (
        <section className="section seo-authority-section" id="why" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Approach</h2>
                </motion.div>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="reason-card card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="reason-icon">
                                {reason.icon}
                            </div>
                            <h3 className="reason-title">{reason.title}</h3>
                            <p className="reason-description">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SEOAuthority;

