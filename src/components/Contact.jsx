"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section contact-section" id="contact" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get in Touch</h2>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info-wrapper"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ textAlign: 'center', width: '100%' }}
                    >
                        <div className="contact-info">
                            <p className="contact-text">Feel free to reach out via email for any inquiries or collaborations.</p>
                            <a href="mailto:gaurav@sdj.com.np" className="contact-email" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                gaurav@sdj.com.np
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;


