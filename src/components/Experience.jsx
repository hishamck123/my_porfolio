import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Flutter Developer',
            company: 'Nexus Technologies',
            period: 'Jan 2025 – Mar 2025',
            desc: 'Developed cross-platform mobile applications, integrated API services, and improved app performance.'
        },
        {
            role: 'IT Support & Data Entry',
            company: 'Malabar Institute of Paramedical Science',
            period: 'Jan 2023 – Mar 2025',
            desc: 'Managed IT infrastructure, handled data entry operations, and provided technical support to staff.'
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-display mb-4"
                >
                    Work Experience
                </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-4 border-background text-primary flex items-center justify-center z-10">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>

                        <div className="ml-20 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <div className="flex items-center gap-2 text-primary mb-2 text-sm font-medium">
                                <Briefcase size={16} />
                                {exp.period}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-white/80 font-medium mb-3">{exp.company}</p>
                            <p className="text-secondary text-sm leading-relaxed">{exp.desc}</p>
                        </div>

                        <div className="md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
