"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section about-section" id="about" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About</h2>

                    <div className="about-content">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p>
                                I'm Gaurav Dhakal, working at the intersection of artificial intelligence and data science.
                                My work focuses on transforming raw data into actionable insights and building AI systems
                                that solve real problems.
                            </p>

                            <p>
                                Over the years, I've developed expertise in machine learning, statistical analysis, and
                                software engineering. I approach each project with a practical mindset — understanding not
                                just what the data says, but what it means and how to apply it effectively.
                            </p>

                            <p>
                                My technical foundation includes Python, modern web technologies, and cloud infrastructure.
                                I believe in writing clean, maintainable code and building systems that scale. Whether it's
                                training neural networks or optimizing data pipelines, I focus on solutions that deliver
                                measurable value.
                            </p>

                            <p>
                                When I'm not analyzing data or training models, I'm exploring new developments in AI research,
                                contributing to open-source projects, or experimenting with emerging technologies that push
                                the boundaries of what's possible with intelligent systems.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

