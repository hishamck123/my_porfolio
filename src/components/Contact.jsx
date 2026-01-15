import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-display mb-6"
                    >
                        Let's Connect
                    </motion.h2>
                    <p className="text-secondary mb-8 leading-relaxed">
                        I'm currently looking for new opportunities as a Flutter Developer. Whether you have a question or just want to say hi, feel free to drop me a message!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-white/5 text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-secondary">Phone</p>
                                <p className="text-white font-medium">+91 9544920042</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-white/5 text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-secondary">Email</p>
                                <a href="mailto:hishamck54@gmail.com" className="text-white font-medium hover:text-primary transition-colors">hishamck54@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-white/5 text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-secondary">Location</p>
                                <p className="text-white font-medium">Kerala, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Github size={24} />
                        </a>
                    </div>
                </div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/5 space-y-4"
                >
                    <h3 className="text-xl font-bold text-white mb-2">Send Message</h3>

                    <div className="space-y-2">
                        <label className="text-sm text-secondary">Name</label>
                        <input
                            type="text"
                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-secondary">Email</label>
                        <input
                            type="email"
                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-secondary">Message</label>
                        <textarea
                            rows="4"
                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                            placeholder="Your message..."
                        />
                    </div>

                    <button className="w-full py-3 rounded-lg bg-primary text-background font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4">
                        Send Message <Send size={18} />
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
