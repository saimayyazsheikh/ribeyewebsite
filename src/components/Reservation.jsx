import { motion } from 'framer-motion';

const Reservation = () => {
    return (
        <section id="reservation" className="min-h-screen bg-[#050505] text-light flex flex-col items-center justify-center py-32 relative overflow-hidden">
            {/* Background Subtle Gradient */}
            <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 w-full max-w-4xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="font-sans text-xs uppercase tracking-[0.4em] text-primary/80 mb-4 block">Reservations</span>
                    <h2 className="font-serif text-6xl md:text-8xl text-white">Secure Your Table</h2>
                    <p className="font-sans text-white/40 mt-6 max-w-xl mx-auto leading-relaxed">
                        We accept reservations up to 30 days in advance. For large parties or private events, please contact our concierge directly.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left">
                        {/* Date */}
                        <div className="group relative">
                            <input
                                type="date"
                                className="w-full bg-transparent border-b border-white/20 py-4 font-serif text-2xl text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                                placeholder="Select Date"
                            />
                            <label className="absolute -top-6 left-0 text-xs font-sans uppercase tracking-widest text-primary/60">Date</label>
                        </div>

                        {/* Guests */}
                        <div className="group relative">
                            <select className="w-full bg-transparent border-b border-white/20 py-4 font-serif text-2xl text-white focus:outline-none focus:border-primary transition-colors appearance-none rounded-none cursor-pointer">
                                <option className="bg-dark text-white/50">2 Guests</option>
                                <option className="bg-dark">1 Guest</option>
                                <option className="bg-dark">3 Guests</option>
                                <option className="bg-dark">4 Guests</option>
                                <option className="bg-dark">5+ Guests</option>
                            </select>
                            <label className="absolute -top-6 left-0 text-xs font-sans uppercase tracking-widest text-primary/60">Guests</label>
                            {/* Custom Arrow */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                            </div>
                        </div>

                        {/* Time */}
                        <div className="group relative">
                            <select className="w-full bg-transparent border-b border-white/20 py-4 font-serif text-2xl text-white focus:outline-none focus:border-primary transition-colors appearance-none rounded-none cursor-pointer">
                                <option className="bg-dark text-white/50">7:00 PM</option>
                                <option className="bg-dark">5:30 PM</option>
                                <option className="bg-dark">6:00 PM</option>
                                <option className="bg-dark">6:30 PM</option>
                                <option className="bg-dark">7:30 PM</option>
                                <option className="bg-dark">8:00 PM</option>
                                <option className="bg-dark">8:30 PM</option>
                                <option className="bg-dark">9:00 PM</option>
                            </select>
                            <label className="absolute -top-6 left-0 text-xs font-sans uppercase tracking-widest text-primary/60">Time</label>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="group relative">
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-white/20 py-4 font-serif text-2xl text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                                placeholder="Email Address"
                            />
                            <label className="absolute -top-6 left-0 text-xs font-sans uppercase tracking-widest text-primary/60">Contact</label>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <button className="clickable group relative inline-flex items-center gap-4 px-12 py-6 bg-transparent border border-white/10 hover:border-primary/50 transition-colors duration-500">
                            <span className="font-sans text-sm uppercase tracking-[0.3em] text-white group-hover:text-primary transition-colors">Confirm Request</span>
                            <span className="w-8 h-[1px] bg-white/30 group-hover:bg-primary transition-colors"></span>
                        </button>
                    </div>

                </motion.form>
            </div>
        </section>
    );
};

export default Reservation;
