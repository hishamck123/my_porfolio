import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'Flutter', level: 'Advanced' },
        { name: 'Dart', level: 'Advanced' },
        { name: 'Mobile UI Development', level: 'Advanced' },
        { name: 'API Integration', level: 'Intermediate' },
        { name: 'SQL & Databases', level: 'Intermediate' },
        { name: 'GPS & Camera Integration', level: 'Intermediate' },
        { name: 'YOLO Object Detection', level: 'Basic' },
        { name: 'Problem Solving', level: 'Advanced' },
    ];

    const getLevelWidth = (level) => {
        switch (level) {
            case 'Advanced': return '90%';
            case 'Intermediate': return '70%';
            case 'Basic': return '40%';
            default: return '50%';
        }
    };

    return (
        <section id="skills" className="py-20 bg-white/5 relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-display mb-4"
                >
                    Technical Skills
                </motion.h2>
                <p className="text-secondary max-w-xl mx-auto">
                    A collection of technologies and tools I use to build robust applications.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col justify-between h-full"
                    >
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative z-10 mb-4">
                            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                            <p className="text-xs text-secondary mt-1">{skill.level}</p>
                        </div>
                        
                        <div className="relative z-10 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: getLevelWidth(skill.level) }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
