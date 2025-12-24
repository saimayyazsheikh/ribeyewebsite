import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center text-primary-light"
        >
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.95] }}
                    className="font-serif text-6xl md:text-8xl tracking-widest font-bold"
                >
                    RIBEYE
                </motion.h1>
            </div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="h-[1px] bg-primary mt-6"
            ></motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1 }}
                className="mt-4 font-sans text-xs tracking-[0.3em] uppercase"
            >
                Loading Experience
            </motion.p>
        </motion.div>
    );
};

export default Preloader;
