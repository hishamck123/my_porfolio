import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 relative">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-display mb-4"
                >
                    Education
                </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors"
                >
                    <div className="p-3 rounded-xl bg-white/5 text-primary shrink-0">
                        <GraduationCap size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">B.Sc Computer Science</h3>
                        <p className="text-white/80 font-medium mb-1">University of Calicut</p>
                        <p className="text-secondary text-sm">Graduated with a focus on software engineering and algorithms.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors"
                >
                    <div className="p-3 rounded-xl bg-white/5 text-purple-400 shrink-0">
                        <Award size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Association Secretary</h3>
                        <p className="text-white/80 font-medium mb-1">Computer Science Dept.</p>
                        <p className="text-secondary text-sm">Led departmental activities, organized tech fests, and coordinated workshops.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
