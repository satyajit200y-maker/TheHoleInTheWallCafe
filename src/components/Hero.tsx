import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Star, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { getIsOpenStatus } from '../data/cafeData';

interface HeroProps {
  onExploreMenu: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onViewLocation }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const tagWords = ["Breakfast.", "Brunch.", "Burgers.", "Waffles.", "Good memories."];
  const [statusInfo, setStatusInfo] = useState(getIsOpenStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % tagWords.length);
    }, 2400);

    const statusInterval = setInterval(() => {
      setStatusInfo(getIsOpenStatus());
    }, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  const headlineWords = ["Good", "mornings", "start", "here."];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-0 px-0 overflow-hidden bg-[#2A211B]"
      aria-label="Welcome to The Hole In The Wall Cafe"
    >
      {/* Background Cinematic Image with Motion Ambient Zoom & Smooth Bottom Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"
          alt="The Hole In The Wall Cafe warm nostalgic morning interior"
          className="w-full h-full object-cover object-center"
          loading="eager"
          initial={{ scale: 1.05 }}
          animate={{ 
            scale: [1.03, 1.08, 1.03],
            y: [0, -6, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        {/* Top & Mid rich espresso gradient for pristine typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#2A211B]/75 to-[#2A211B]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#2A211B]/30 to-[#2A211B]/70" />
        
        {/* Seamless multi-stop gradient dissolving directly into the #F5EFE3 cream background of the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 lg:h-80 bg-gradient-to-b from-transparent via-[#2A211B]/40 via-35% to-[#F5EFE3]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center my-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {/* Status & Location Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-sm font-medium mb-6 shadow-md"
        >
          <span className={`w-2 h-2 rounded-full ${statusInfo.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-stone-300'}`}></span>
          <span className="font-semibold">{statusInfo.statusText}</span>
          <span className="text-white/60">·</span>
          <span>8:00 AM — 8:45 PM</span>
          <span className="text-white/60">·</span>
          <span className="text-amber-300 flex items-center gap-1 font-medium">
            <MapPin className="w-3.5 h-3.5 inline" /> Koramangala, Bengaluru
          </span>
        </motion.div>

        {/* Dynamic Tagline Carousel */}
        <div className="h-7 mb-3 overflow-hidden">
          <motion.p 
            key={activeWordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-amber-200/90 text-sm sm:text-base font-semibold tracking-wider uppercase"
          >
            {tagWords[activeWordIndex]}
          </motion.p>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-[1.05] sm:leading-[1.02] max-w-4xl drop-shadow-md">
          {headlineWords.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.15 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block mx-1.5"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Secondary Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-[#F5EFE3]/90 font-normal max-w-2xl leading-relaxed text-balance"
        >
          All-day breakfast, comforting classics &amp; café favourites in the heart of Koramangala.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Explore Menu */}
          <button
            id="hero-explore-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B65F3B] hover:bg-[#A35230] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA: Get Directions */}
          <button
            id="hero-get-directions-btn"
            onClick={onViewLocation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 text-white text-base font-medium px-7 py-3.5 rounded-full backdrop-blur-md border border-white/30 shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-200" />
            <span>Get Directions</span>
          </button>
        </motion.div>

        {/* Social Proof Badges in Hero */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-10 text-white/90 max-w-2xl w-full"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-amber-300 font-bold text-lg sm:text-xl">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>4.3</span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#F5EFE3]/75 mt-0.5">10K+ Google Reviews</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-lg sm:text-xl text-white">All-Day</span>
            <span className="text-[11px] sm:text-xs text-[#F5EFE3]/75 mt-0.5">Breakfast Served Daily</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-lg sm:text-xl text-white">Since 2012</span>
            <span className="text-[11px] sm:text-xs text-[#F5EFE3]/75 mt-0.5">Koramangala Legend</span>
          </div>
        </motion.div>
      </div>

      {/* Seamless Transition Indicator floating over the blended background */}
      <div className="relative z-20 w-full mt-auto pb-6 sm:pb-8 flex flex-col items-center justify-center">
        <a
          href="#signatures"
          aria-label="Scroll down to signature dishes"
          className="group flex flex-col items-center gap-2 text-[#2A211B]/80 hover:text-[#2A211B] transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2A211B] flex items-center gap-1.5 bg-[#FFF9EF]/90 hover:bg-[#FFF9EF] px-4 py-1.5 rounded-full border border-[#2A211B]/15 backdrop-blur-md shadow-md transition-colors">
            <Sparkles className="w-3 h-3 text-[#B65F3B]" />
            Taste Our Signatures
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full bg-[#FFF9EF] shadow-sm flex items-center justify-center border border-[#2A211B]/15 text-[#2A211B] group-hover:bg-[#B65F3B] group-hover:text-white transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

