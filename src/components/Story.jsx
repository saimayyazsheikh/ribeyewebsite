import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const storyContent = [
    {
        title: "The Beginning",
        text: "Established in 2021, Ribeye began its journey in PWD, Islamabad, with a singular mission: to redefine the steakhouse experience. What started as a passion project has evolved into a premier destination in Bahria Town, celebrated by connoisseurs across the Twin Cities.",
        img: "/assets/story-final-1.jpg"
    },
    {
        title: "The Philosophy",
        text: "We live by the mantra: 'The cut, the crust, the craft.' We believe that a great steak is an event, not just a meal. Our commitment is to source only the finest prime cuts and prepare them with artisanal precision, respecting the sanctity of the grill.",
        img: "/assets/story-final-2.jpg"
    },
    {
        title: "The Experience",
        text: "Ribeye is a sanctuary for the carnivorous connoisseur. We offer 'Continental Brilliance'—a blend of sophisticated ambiance and masterful culinary techniques. Here, every detail is curated to ensure that we serve not just food, but a masterpiece on every plate.",
        img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz7iqWAtDwL7q2p4qliy-mBvUrhRTXp_fxrs75QaT7ImAbII0YE5fpWpC0xtSzsdv7fECgy7Uibubd-cZC8L__iE0NsUoUirdYERYnbMZDWCL-bA184A7mLrCisQZL88FRLYdjN-r07hyue=s2000"
    }
];

const Story = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} id="story" className="bg-light text-dark relative">
            {storyContent.map((item, index) => {
                return (
                    <StorySection key={index} item={item} index={index} total={storyContent.length} />
                );
            })}
        </section>
    );
};

const StorySection = ({ item, index, total }) => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row sticky top-0">
            {/* Image Side - Alternates order based on index */}
            <div className={`w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-full h-full relative">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-dark/20"></div>
                </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center p-12 md:p-24 bg-white relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-20%" }}
                    className="max-w-md"
                >
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
                        Chapter 0{index + 1}
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-none">
                        {item.title}
                    </h2>
                    <p className="font-sans text-dark/70 leading-relaxed text-sm md:text-base">
                        {item.text}
                    </p>

                    {index === total - 1 && (
                        <div className="mt-12">
                            <img src="/assets/logo-full.jpg" alt="Signature" className="h-16 w-auto mix-blend-multiply opacity-50 grayscale" />
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Story;
