import { motion } from 'framer-motion';

const menuData = [
    {
        category: "Signatures",
        note: "Experience the craft of our premium cuts.",
        items: [
            { name: "Ribeye Signature", price: "Rs. 2590", desc: "Our flagship cut, grilled to perfection" },
            { name: "Grilled Beef Tenderloin", price: "Rs. 2490", desc: "Tender, lean, and full of flavor" },
            { name: "Moroccan Chicken", price: "Rs. 1595", desc: "Exotic spices, served with sides" },
            { name: "Beef Wellington", price: "Rs. 2990", desc: "Classic pastry-wrapped tenderloin" }
        ]
    },
    {
        category: "Mains & Pastas",
        items: [
            { name: "Fettuccine Alfredo", price: "Rs. 1775", desc: "Creamy parmesan sauce, grilled chicken" },
            { name: "Triple Decker Club", price: "Rs. 1450", desc: "Chicken, egg, cheese, fresh vegetables" },
            { name: "Chicken Parmesan", price: "Rs. 1650", desc: "Breaded chicken breast, marinara, mozzarella" }
        ]
    },
    {
        category: "Starters & Soups",
        items: [
            { name: "Mushroom Cream Soup", price: "Rs. 775", desc: "Rich and earthy blend" },
            { name: "Roasted Tomato Garlic Soup", price: "Rs. 799", desc: "Robust flavors with a hint of smoky garlic" },
            { name: "Three Milk Cake", price: "Rs. 1350", desc: "Our signature dessert" }
        ]
    }
];

const Menu = () => {
    return (
        <section id="menu" className="bg-[#0f0f0f] text-light min-h-screen py-32 relative">
            {/* Elegant Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#0f0f0f] to-[#0f0f0f] opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">

                <div className="mb-24">
                    <span className="font-sans text-xs uppercase tracking-[0.4em] text-primary block mb-6">Culinary Excellence</span>
                    <h2 className="font-serif text-5xl md:text-7xl">The Selection</h2>
                </div>

                <div className="flex flex-col gap-24 md:gap-32">
                    {menuData.map((section, index) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className="flex flex-col items-center"
                        >
                            <h3 className="font-serif text-4xl mb-6 text-primary">{section.category}</h3>
                            {section.note && (
                                <p className="font-sans text-sm text-light/50 tracking-widest uppercase mb-12 max-w-lg mx-auto border-y border-light/10 py-4">
                                    {section.note}
                                </p>
                            )}

                            <div className="w-full grid grid-cols-1 gap-12">
                                {section.items.map((item) => (
                                    <div key={item.name} className="flex flex-col items-center group cursor-default">
                                        <div className="w-full flex justify-between items-baseline max-w-2xl relative">
                                            <h4 className="font-serif text-2xl md:text-3xl bg-[#0f0f0f] relative z-10 pr-4 group-hover:text-primary transition-colors duration-500">
                                                {item.name}
                                            </h4>

                                            {/* Connecting Line */}
                                            <div className="flex-grow border-b border-light/10 border-dotted absolute bottom-2 left-0 w-full z-0"></div>

                                            <span className="font-sans text-lg bg-[#0f0f0f] relative z-10 pl-4">{item.price}</span>
                                        </div>
                                        <p className="font-sans text-xs text-light/40 mt-3 tracking-[0.15em] uppercase">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32">
                    <p className="font-serif text-light/30 italic">All prices are exclusive of tax. Service charges may apply.</p>
                </div>

            </div>
        </section>
    );
};

export default Menu;
