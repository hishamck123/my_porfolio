import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Zap } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Smartphone className="text-primary" size={24} />,
            title: 'Mobile Development',
            desc: 'Expert in building cross-platform apps using Flutter & Dart.'
        },
        {
            icon: <Code2 className="text-purple-400" size={24} />,
            title: 'Clean UI/UX',
            desc: 'Translating designs into responsive, pixel-perfect code.'
        },
        {
            icon: <Zap className="text-yellow-400" size={24} />,
            title: 'Performance',
            desc: 'Optimizing apps for smooth 60fps performance.'
        },
        {
            icon: <Database className="text-green-400" size={24} />,
            title: 'Backend Integration',
            desc: 'Seamless API integration and state management.'
        }
    ];

    return (
        <section id="about" className="py-20 relative max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <div className="lg:col-span-5">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-display mb-6"
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4 text-secondary leading-relaxed"
                    >
                        <p>
                            I am a passionate <span className="text-white font-medium">Flutter Developer</span> with a strong foundation in building high-quality mobile applications. My journey involves mastering Dart, creating intuitive user interfaces, and solving complex problems with efficient code.
                        </p>
                        <p>
                            With experience in real-world projects like AI-driven safety apps and dynamic portfolios, I focus on delivering seamless user experiences and robust functionality. I thrive in collaborative environments and am always eager to learn new technologies.
                        </p>
                    </motion.div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 transition-colors group"
                        >
                            <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-secondary">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
