import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="h-screen w-full relative overflow-hidden flex items-center justify-center">

            {/* Parallax Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-home.jpg"
                    alt="Ribeye Interior"
                    className="w-full h-full object-cover brightness-50"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center mix-blend-difference text-white w-full">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 2.2 }} // Delay for preloader
                    className="overflow-hidden"
                >
                    <h1 className="font-sans text-[12vw] leading-none tracking-tighter lowercase font-light text-light/90 py-4">
                        ribeye
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 2.4 }}
                    className="mt-8 flex flex-col items-center gap-4"
                >
                    <p className="font-sans text-xs desk:text-sm tracking-[0.3em] uppercase max-w-md mx-auto leading-relaxed">
                        Where fire meets flavor. A nocturnal sanctuary for the carnivorous connoisseur.
                    </p>

                    <a href="#reservation" className="clickable mt-8 px-10 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 uppercase text-xs tracking-widest">
                        Reserve a Table
                    </a>
                </motion.div>
            </div>

            {/* Date floating */}
            <div className="absolute bottom-10 left-10 hidden md:block z-20 mix-blend-difference text-white">
                <span className="font-sans text-xs tracking-widest">ISLAMABAD / BAHRIA TOWN</span>
            </div>

        </section>
    );
};

export default Hero;
