import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-ribeye-black pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-16">

                    {/* Brand */}
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex items-center gap-2 mb-2">
                            <img src="/logo.jpg" alt="Ribeye Logo" className="h-12 w-auto rounded-full" />
                            <span className="font-serif text-3xl font-bold text-ribeye-gold">RIBEYE</span>
                        </div>
                        <p className="text-white/60 leading-relaxed max-w-sm">
                            Experience the art of fine dining. Where culinary mastery meets premium ambiance.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-serif text-ribeye-cream">Contact Us</h3>
                        <ul className="space-y-4 text-white/60">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-ribeye-gold shrink-0 mt-1" />
                                <span>Phase 7, Plaza 08, Bahria Food St<br />Bahria Intellectual Village<br />Islamabad, 44000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-ribeye-gold shrink-0" />
                                <span>(051) 8990603</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-ribeye-gold shrink-0" />
                                <span>info@ribeye.pk</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-serif text-ribeye-cream">Newsletter</h3>
                        <p className="text-white/60">Subscribe for seasonal updates and exclusive event invitations.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-ribeye-gold transition-colors text-white placeholder:text-white/30"
                            />
                            <button
                                type="submit"
                                className="bg-ribeye-gold text-ribeye-black font-bold uppercase tracking-widest py-3 hover:bg-white transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/30 text-sm">
                    <p>&copy; 2024 Ribeye Steakhouse. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-ribeye-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-ribeye-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon }) => (
    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-ribeye-gold hover:border-ribeye-gold transition-all duration-300">
        {icon}
    </a>
);

export default Footer;
