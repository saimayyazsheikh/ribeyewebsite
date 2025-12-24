import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'The Story', href: '#story' },
        { name: 'Menu', href: '#menu' },
        { name: 'Reservations', href: '#reservation' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#footer' },
    ];

    const menuVars = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] }
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
    };

    const mobileLinkVars = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
        open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } }
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center text-white">
            {/* Logo */}
            <a href="/" className="group flex items-center gap-4 z-50 mix-blend-exclusion">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 relative flex items-center justify-center bg-[#05110A]">
                    <img
                        src="/assets/logo-full.jpg"
                        alt="Ribeye Emblem"
                        className="w-full h-full object-cover transform scale-125"
                    />
                </div>
            </a>

            {/* Hamburger */}
            <div className="clickable font-sans text-sm font-bold uppercase tracking-widest cursor-pointer z-50 flex items-center gap-4 group mix-blend-exclusion" onClick={() => setIsOpen(!isOpen)}>
                <span className="hidden md:block group-hover:text-primary transition-colors">{isOpen ? 'Close' : 'Menu'}</span>
                <div className={`w-8 h-[2px] bg-current transition-all duration-300 relative ${isOpen ? 'rotate-45' : ''}`}>
                    <div className={`absolute left-0 top-0 w-8 h-[2px] bg-current transition-all duration-300 ${isOpen ? '-rotate-90' : 'translate-y-2'}`}></div>
                </div>
            </div>

            {/* Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-dark origin-top flex flex-col justify-center items-center z-40"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col items-center gap-6"
                        >
                            {navLinks.map((link) => (
                                <div key={link.name} className="overflow-hidden">
                                    <motion.a
                                        variants={mobileLinkVars}
                                        href={link.href}
                                        className="clickable font-serif text-5xl md:text-7xl text-light/80 hover:text-primary transition-colors uppercase tracking-tight"
                                    >
                                        {link.name}
                                    </motion.a>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
