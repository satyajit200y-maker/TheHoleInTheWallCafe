import React from 'react';
import { Phone, MessageCircle, MapPin, Utensils } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

interface StickyMobileBarProps {
  onMenuClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onMenuClick }) => {
  const whatsappUrl = `https://wa.me/${CAFE_DATA.whatsappRaw}?text=${encodeURIComponent(CAFE_DATA.whatsappMessage)}`;

  return (
    <div
      id="sticky-mobile-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FFF9EF]/95 backdrop-blur-lg border-t border-[#2A211B]/15 px-3 py-2 shadow-lg"
      role="navigation"
      aria-label="Quick contact and navigation actions"
    >
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        {/* 1. Call */}
        <a
          id="mobile-action-call"
          href={`tel:${CAFE_DATA.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2A211B] hover:text-[#B65F3B] hover:bg-[#F5EFE3] active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-[#B65F3B]/10 flex items-center justify-center mb-0.5 text-[#B65F3B]">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">Call</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          id="mobile-action-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2A211B] hover:text-emerald-700 hover:bg-[#F5EFE3] active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mb-0.5 text-emerald-600">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">WhatsApp</span>
        </a>

        {/* 3. Directions */}
        <a
          id="mobile-action-directions"
          href={CAFE_DATA.links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2A211B] hover:text-[#6E765B] hover:bg-[#F5EFE3] active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-[#6E765B]/15 flex items-center justify-center mb-0.5 text-[#6E765B]">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">Directions</span>
        </a>

        {/* 4. Menu */}
        <button
          id="mobile-action-menu"
          onClick={onMenuClick}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2A211B] hover:text-[#B65F3B] hover:bg-[#F5EFE3] active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-[#B65F3B] text-white flex items-center justify-center mb-0.5 shadow-sm">
            <Utensils className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-[#B65F3B] tracking-tight whitespace-nowrap">Menu</span>
        </button>
      </div>
    </div>
  );
};
