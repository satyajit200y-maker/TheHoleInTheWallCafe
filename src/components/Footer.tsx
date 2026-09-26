import React from 'react';
import { motion } from 'motion/react';
import { 
  Coffee, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  ArrowUp, 
  Heart, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
  onOpenCookiePreferences: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onOpenCookiePreferences
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${CAFE_DATA.whatsappRaw}?text=${encodeURIComponent(CAFE_DATA.whatsappMessage)}`;

  const columnVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.footer
      id="main-footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#2A211B] text-[#F5EFE3] pt-16 pb-28 lg:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Footer navigation and cafe information"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid with Staggered Scroll Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10"
        >
          
          {/* Brand Intro Column */}
          <motion.div variants={columnVariants} className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B65F3B] text-white flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                The Hole In The Wall Cafe
              </span>
            </div>
            
            <p className="text-sm text-[#F5EFE3]/80 leading-relaxed max-w-sm">
              Good food. Good company. Good memories. Koramangala’s legendary breakfast spot serving comforting classics since 2012.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CAFE_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B65F3B] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CAFE_DATA.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B65F3B] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={columnVariants} className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-amber-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#F5EFE3]/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-white transition-colors">Signatures</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Full Menu</a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#visit-us" className="hover:text-white transition-colors">Visit Us</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Details Column */}
          <motion.div variants={columnVariants} className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-amber-200">
              Contact &amp; Hours
            </h4>
            <ul className="space-y-3 text-sm text-[#F5EFE3]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B65F3B] shrink-0 mt-1" />
                <span>
                  3, 8th Main Rd, 4th Block, Koramangala, Bengaluru 560047
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B65F3B] shrink-0" />
                <span>8:00 AM — 8:45 PM Daily</span>
              </li>
              <li className="pt-1">
                <a
                  href={CAFE_DATA.links.orderOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white"
                >
                  <span>Order on Official Store Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal & Privacy Column */}
          <motion.div variants={columnVariants} className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-amber-200">
              Legal &amp; Guidelines
            </h4>
            <ul className="space-y-2 text-sm text-[#F5EFE3]/80">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('cookie')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms &amp; Guidelines
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCookiePreferences}
                  className="hover:text-white transition-colors text-left text-xs text-amber-300/90"
                >
                  Manage Cookie Preferences
                </button>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar with Back to Top and Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EFE3]/60"
        >
          <p>© 2026 The Hole In The Wall Cafe. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Bengaluru breakfast lovers
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 hover:scale-110 active:scale-95"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};
