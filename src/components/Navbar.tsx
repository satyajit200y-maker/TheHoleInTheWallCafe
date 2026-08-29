import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MapPin, 
  ShoppingBag, 
  Clock, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CAFE_DATA, getIsOpenStatus } from '../data/cafeData';

interface NavbarProps {
  onOpenMealPlanner: () => void;
  mealPlannerCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMealPlanner, mealPlannerCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statusInfo, setStatusInfo] = useState(getIsOpenStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Update live status every minute
    const interval = setInterval(() => {
      setStatusInfo(getIsOpenStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit-us' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF9EF]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#2A211B]/10'
            : 'bg-gradient-to-b from-[#2A211B]/60 via-[#2A211B]/30 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B65F3B] rounded-lg"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isScrolled 
                ? 'bg-[#B65F3B] text-white shadow-sm' 
                : 'bg-white/20 backdrop-blur-md text-white group-hover:bg-white group-hover:text-[#2A211B]'
            }`}>
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className={`font-display text-lg sm:text-xl font-bold tracking-tight block leading-tight ${
                isScrolled ? 'text-[#2A211B]' : 'text-white drop-shadow-sm'
              }`}>
                The Hole In The Wall
              </span>
              <span className={`text-[11px] font-medium tracking-wider uppercase block ${
                isScrolled ? 'text-[#B65F3B]' : 'text-amber-200'
              }`}>
                Cafe · Koramangala
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                  isScrolled
                    ? 'text-[#2A211B] hover:text-[#B65F3B] hover:bg-[#F5EFE3]'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Opening Hours Status Pill (Desktop) */}
            <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
              isScrolled 
                ? `${statusInfo.badgeClass}` 
                : 'bg-black/30 backdrop-blur-md text-white border-white/20'
            }`}>
              <span className={`w-2 h-2 rounded-full ${statusInfo.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`}></span>
              <span>{statusInfo.statusText}</span>
              <span className="opacity-60 text-[10px]">({statusInfo.todayHours})</span>
            </div>

            {/* Meal Wishlist / Table Order Calculator Button */}
            <button
              id="header-meal-planner-btn"
              onClick={onOpenMealPlanner}
              aria-label="View meal planner and bill estimator"
              className={`relative p-2.5 rounded-full transition-all flex items-center justify-center ${
                isScrolled
                  ? 'text-[#2A211B] hover:bg-[#F5EFE3]'
                  : 'text-white hover:bg-white/10'
              }`}
              title="Your Table Order / Wishlist"
            >
              <ShoppingBag className="w-5 h-5" />
              {mealPlannerCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B65F3B] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {mealPlannerCount}
                </span>
              )}
            </button>

            {/* Order Now CTA (PRD Primary Goal) */}
            <a
              id="header-order-now-cta"
              href={CAFE_DATA.links.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#B65F3B] hover:bg-[#9E4D2C] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Order Online</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#2A211B] hover:bg-[#F5EFE3]' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FFF9EF] text-[#2A211B] animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between p-4 border-b border-[#2A211B]/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B65F3B] text-white flex items-center justify-center">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-[#2A211B]">
                The Hole In The Wall
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#2A211B] hover:bg-[#F5EFE3] rounded-full"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {/* Live Status */}
            <div className="p-3.5 rounded-xl bg-[#F5EFE3] border border-[#2A211B]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${statusInfo.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`}></span>
                <span className="font-medium text-sm text-[#2A211B]">{statusInfo.statusText}</span>
              </div>
              <span className="text-xs text-[#8B8176]">{statusInfo.todayHours}</span>
            </div>

            {/* Nav links */}
            <div className="space-y-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-lg font-medium text-[#2A211B] hover:bg-[#F5EFE3] hover:text-[#B65F3B] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#8B8176]" />
                </a>
              ))}
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-6 border-t border-[#2A211B]/10 space-y-3">
              <a
                href={CAFE_DATA.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#B65F3B] text-white py-3 rounded-xl font-semibold shadow-sm hover:bg-[#9E4D2C]"
              >
                <span>Order Pickup / Delivery</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${CAFE_DATA.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#F5EFE3] text-[#2A211B] py-2.5 px-3 rounded-xl text-sm font-medium border border-[#2A211B]/10 hover:bg-[#EBE3D3]"
                >
                  <Phone className="w-4 h-4 text-[#B65F3B]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={CAFE_DATA.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#F5EFE3] text-[#2A211B] py-2.5 px-3 rounded-xl text-sm font-medium border border-[#2A211B]/10 hover:bg-[#EBE3D3]"
                >
                  <MapPin className="w-4 h-4 text-[#6E765B]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Address Summary in Menu */}
            <div className="pt-4 text-xs text-[#8B8176] text-center">
              <p>{CAFE_DATA.address.fullAddress}</p>
              <p className="mt-1">8:00 AM – 8:45 PM Daily</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
