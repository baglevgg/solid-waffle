"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "AI-Powered Data Analytics Platform",
            category: "Machine Learning & Data Science",
            description: "Built an intelligent analytics platform leveraging machine learning models to process and analyze large datasets, providing real-time insights and predictive analytics.",
            tags: ["Python", "TensorFlow", "Pandas", "React"],
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "Neural Network Model Optimization",
            category: "Deep Learning",
            description: "Developed and optimized deep learning models for computer vision tasks, achieving significant performance improvements through advanced techniques.",
            tags: ["PyTorch", "Computer Vision", "Model Optimization"],
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            title: "Intelligent Recommendation Engine",
            category: "AI & Machine Learning",
            description: "Created a sophisticated recommendation system using collaborative filtering and neural networks to deliver personalized user experiences.",
            tags: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL"],
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
            title: "Real-Time Data Processing Pipeline",
            category: "Data Engineering",
            description: "Architected a scalable data processing pipeline handling millions of events per day, with automated ETL processes and real-time monitoring.",
            tags: ["Python", "Apache Kafka", "Docker", "AWS"],
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        },
        {
            title: "AI-Assisted Development Tools",
            category: "Developer Tools & AI",
            description: "Built productivity tools leveraging AI to assist developers with code generation, debugging, and optimization tasks.",
            tags: ["Python", "GPT Models", "VS Code Extension"],
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        },
        {
            title: "Predictive Maintenance System",
            category: "IoT & Machine Learning",
            description: "Implemented ML models for predictive maintenance in industrial systems, reducing downtime and maintenance costs through early anomaly detection.",
            tags: ["Python", "Time Series", "IoT", "ML"],
            gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
        }
    ];

    return (
        <section className="section projects-section" id="projects" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Selected Work</h2>
                    <p className="projects-intro">
                        Portfolio of AI, machine learning, and data science projects by Gaurav Dhakal
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div
                                className="project-header"
                                style={{ background: project.gradient }}
                            >
                                <div className="project-badge">{project.category}</div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-footer">
                                <button className="project-link">
                                    View Details →
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

