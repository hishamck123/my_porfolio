import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="text-center max-w-4xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        Available for Hire
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Mohammed Hisham CK</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-primary font-medium mb-6"
                >
                    Flutter Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Flutter Developer specializing in cross-platform mobile applications with a focus on clean UI, performance, and real-world problem solving.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-primary text-background font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a
                        href="#"
                        className="px-8 py-3 rounded-full bg-white/5 text-white border border-white/10 font-medium hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        Download Resume <Download size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
