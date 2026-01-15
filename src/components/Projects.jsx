import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Driven Safety & Pothole Detection',
            category: 'Mobile Application',
            tags: ['Flutter', 'YOLO', 'Python', 'Google Maps API'],
            desc: 'A cross-platform app enhancing road safety by detecting potholes and safety hazards in real-time. Features object detection using YOLOv8, GPS integration for location tracking, and camera utilization for evidence capture.',
            links: {
                demo: '#',
                github: '#'
            }
        },
        // Adding a placeholder project to balance the grid
        {
            title: 'Personal Portfolio',
            category: 'Web Development',
            tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            desc: 'A modern, high-performance portfolio website featuring glassmorphism design, smooth animations, and responsive layout.',
            links: {
                demo: '#',
                github: '#'
            }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white/5">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-display mb-4"
                >
                    Featured Projects
                </motion.h2>
                <p className="text-secondary max-w-xl mx-auto">
                    Highlights of my recent work in mobile and web development.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-primary/50 transition-all card-hover"
                    >
                        {/* Image Placeholder - gradient for now */}
                        <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-800 group-hover:to-surface transition-colors flex items-center justify-center overflow-hidden">
                            <motion.span
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="text-white/20 font-display text-4xl font-bold"
                            >
                                {index + 1}
                            </motion.span>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>
                                <div className="flex gap-2">
                                    <a href={project.links.github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.demo} className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-secondary text-sm leading-relaxed mb-6">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
