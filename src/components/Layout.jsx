import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-primary">
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface via-background to-background opacity-80 pointer-events-none" />
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                {children}
            </main>
            <footer className="py-8 text-center text-secondary text-sm">
                <p>&copy; {new Date().getFullYear()} Mohammed Hisham CK. Built with React & Tailwind CSS.</p>
            </footer>
        </div>
    );
};

export default Layout;
