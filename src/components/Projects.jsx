import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Driven Safety & Pothole Detection',
            category: 'IoT / Mobile Application',
            tags: ['Flutter', 'Dart', 'IoT', 'YOLO'],
            desc: 'An IoT/Flutter application used to detect potholes and traffic signals in real-time by utilizing given data, enhancing road safety.',
            links: {
                demo: '#',
                github: 'https://github.com/hishamck123/AI-Driven-safety-and-pothole-detection'
            }
        },
        {
            title: 'SKSSF Quiz Portal',
            category: 'Web Application',
            tags: ['TypeScript', 'React', 'Web'],
            desc: 'A modern, interactive quiz portal built using TypeScript for conducting online assessments, quizzes, and competitions efficiently.',
            links: {
                demo: '#',
                github: 'https://github.com/hishamck123/skssf-quiz-portal'
            }
        },
        {
            title: 'Kuri App',
            category: 'Mobile Application',
            tags: ['Flutter', 'Dart', 'Cross-platform'],
            desc: 'A comprehensive cross-platform mobile application built using Flutter to deliver smooth user experiences.',
            links: {
                demo: '#',
                github: 'https://github.com/hishamck123/Kuri-App-Flutter'
            }
        },
        {
            title: 'New Kurri Flutter',
            category: 'Mobile Application',
            tags: ['Flutter', 'Dart', 'UI/UX'],
            desc: 'An updated version of the Kuri mobile application featuring an enhanced UI/UX, optimized performance, and new features.',
            links: {
                demo: '#',
                github: 'https://github.com/hishamck123/new-kurri-flutter'
            }
        },
        {
            title: 'Personal Portfolio',
            category: 'Web Development',
            tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            desc: 'My modern, high-performance portfolio website featuring a glassmorphism design, smooth animations, and a fully responsive layout.',
            links: {
                demo: '#',
                github: 'https://github.com/hishamck123/my_porfolio'
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
                        {/* Image Placeholder - Mockup Frame */}
                        <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-800 group-hover:to-surface transition-colors flex flex-col items-center justify-end overflow-hidden pt-6">
                            <div className="w-[85%] h-full bg-surface border-t border-l border-r border-white/10 rounded-t-lg shadow-2xl flex flex-col relative group-hover:-translate-y-2 transition-transform duration-500">
                                {/* Browser Top Bar */}
                                <div className="h-6 border-b border-white/10 bg-white/5 flex items-center px-3 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                </div>
                                {/* Mockup Content */}
                                <div className="flex-1 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-4">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-white/20 flex flex-col items-center gap-2 group-hover:text-accent transition-colors duration-300"
                                    >
                                        <FolderGit2 size={40} strokeWidth={1.5} />
                                        <span className="font-display text-sm font-bold tracking-widest">{project.category.split(' ')[0].toUpperCase()}</span>
                                    </motion.div>
                                </div>
                            </div>
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
