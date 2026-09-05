import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setStatus('submitting');
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/hishamck96@gmail.com", {
                method: "POST",
                body: new FormData(form),
            });
            
            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 relative px-4">
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
                                <p className="text-white font-medium">+91 7510201637</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-white/5 text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-secondary">Email</p>
                                <a href="mailto:hishamck96@gmail.com" className="text-white font-medium hover:text-accent transition-colors">hishamck96@gmail.com</a>
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
                        <a href="https://www.linkedin.com/in/hisham-ck-5b5026360" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary hover:scale-110 text-white transition-all shadow-lg">
                            <Linkedin size={28} />
                        </a>
                        <a href="https://github.com/hishamck123" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary hover:scale-110 text-white transition-all shadow-lg">
                            <Github size={28} />
                        </a>
                    </div>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/5 space-y-5 relative overflow-hidden"
                >
                    <h3 className="text-xl font-bold text-white mb-2">Send Message</h3>
                    
                    {/* formsubmit.co configuration */}
                    <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="space-y-2">
                        <label className="text-sm text-secondary" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-secondary" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-secondary" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            required
                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                            placeholder="Your message..."
                        />
                    </div>

                    <button 
                        disabled={status === 'submitting'}
                        className="w-full py-3 rounded-lg bg-primary text-background font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? (
                            <>Sending... <Loader2 size={18} className="animate-spin" /></>
                        ) : (
                            <>Send Message <Send size={18} /></>
                        )}
                    </button>

                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="absolute bottom-4 left-4 right-4 bg-green-500/20 border border-green-500/50 text-green-400 p-3 rounded-lg flex items-center gap-2 text-sm justify-center backdrop-blur-md"
                            >
                                <CheckCircle size={18} /> Message sent successfully!
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="absolute bottom-4 left-4 right-4 bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-lg flex items-center gap-2 text-sm justify-center backdrop-blur-md"
                            >
                                <AlertCircle size={18} /> Something went wrong. Please try again.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
