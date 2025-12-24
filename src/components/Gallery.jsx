import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    '/assets/gallery-1.jpg',
    '/assets/gallery-2.jpg',
    '/assets/gallery-3.jpg',
    '/assets/gallery-4.jpg',
    '/assets/gallery-5.jpg',
    '/assets/gallery-6.jpg',
    '/assets/gallery-7.jpg',
    '/assets/gallery-8.jpg',
    '/assets/gallery-9.jpg',
];

const Gallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section id="gallery" ref={containerRef} className="bg-light text-dark py-32 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-20 md:mb-32 relative z-10 text-center">
                <span className="font-sans text-xs uppercase tracking-[0.4em] text-primary mb-4 block">Refined Dining</span>
                <h2 className="font-serif text-6xl md:text-8xl">The Experience</h2>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 h-[150vh] md:h-auto overflow-y-hidden md:overflow-visible">

                {/* Column 1 */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-8 md:gap-12">
                    <GalleryImage src={images[0]} aspect="aspect-[3/4]" />
                    <GalleryImage src={images[1]} aspect="aspect-[4/3]" />
                    <GalleryImage src={images[2]} aspect="aspect-[3/4]" />
                </motion.div>

                {/* Column 2 - Moves Reverse */}
                <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:gap-12 md:-mt-32">
                    <GalleryImage src={images[3]} aspect="aspect-[3/4]" />
                    <GalleryImage src={images[4]} aspect="aspect-[3/4]" />
                    <GalleryImage src={images[5]} aspect="aspect-[4/3]" />
                </motion.div>

                {/* Column 3 */}
                <motion.div style={{ y: y3 }} className="flex flex-col gap-8 md:gap-12 md:mt-16">
                    <GalleryImage src={images[6]} aspect="aspect-[4/3]" />
                    <GalleryImage src={images[7]} aspect="aspect-[3/4]" />
                    <GalleryImage src={images[8]} aspect="aspect-[3/4]" />
                </motion.div>

            </div>
        </section>
    );
};

const GalleryImage = ({ src, aspect }) => {
    return (
        <div className={`w-full ${aspect} relative overflow-hidden group`}>
            <img
                src={src}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Experience"
            />
            <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

export default Gallery;
