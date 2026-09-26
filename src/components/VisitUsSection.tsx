import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  Car, 
  PawPrint, 
  Users, 
  Compass, 
  CalendarCheck 
} from 'lucide-react';
import { CAFE_DATA, getIsOpenStatus } from '../data/cafeData';

export const VisitUsSection: React.FC = () => {
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);
  const statusInfo = getIsOpenStatus();

  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...

  const whatsappUrl = `https://wa.me/${CAFE_DATA.whatsappRaw}?text=${encodeURIComponent(CAFE_DATA.whatsappMessage)}`;

  return (
    <motion.section
      id="visit-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EFE3] relative scroll-mt-16 overflow-hidden"
      aria-label="Visit us, opening hours and map directions"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Transition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B65F3B]/10 text-[#B65F3B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Find Our Café</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2A211B] tracking-tight">
            Come find us.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A4030]">
            Nestled in the cozy heart of 4th Block, Koramangala. A warm table and hot waffles are waiting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Cafe Address, Hours & Contact Actions with Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 35, x: -15 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Address & Direct Actions Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF9EF] border border-[#2A211B]/10 shadow-sm space-y-6 transition-all duration-300 hover:shadow-md">
              <div>
                <span className="text-xs font-bold text-[#B65F3B] uppercase tracking-wider block mb-1">
                  Koramangala Flagship Outlet
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2A211B]">
                  {CAFE_DATA.name}
                </h3>
                <p className="mt-3 text-base text-[#5A4030] leading-relaxed flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#B65F3B] shrink-0 mt-0.5" />
                  <span>
                    <strong>{CAFE_DATA.address.line1}</strong>, {CAFE_DATA.address.line2}, {CAFE_DATA.address.city}, {CAFE_DATA.address.state} — {CAFE_DATA.address.postalCode}
                    <br />
                    <span className="text-xs text-[#8B8176] block mt-1">
                      Landmark: {CAFE_DATA.address.landmark}
                    </span>
                  </span>
                </p>
              </div>

              {/* One-Tap Action Buttons (PRD Requirements) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                
                {/* Google Maps */}
                <a
                  id="visit-google-maps-btn"
                  href={CAFE_DATA.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#B65F3B] hover:bg-[#9E4D2C] text-white py-3.5 px-4 rounded-xl font-semibold text-sm shadow transition-all transform hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                {/* Apple Maps */}
                <a
                  id="visit-apple-maps-btn"
                  href={CAFE_DATA.links.appleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#2A211B] hover:bg-[#3D3027] text-white py-3.5 px-4 rounded-xl font-semibold text-sm shadow transition-all transform hover:-translate-y-0.5"
                >
                  <Compass className="w-4 h-4" />
                  <span>Apple Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                {/* Call The Cafe */}
                <a
                  id="visit-call-btn"
                  href={`tel:${CAFE_DATA.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#F5EFE3] hover:bg-[#EBE3D3] text-[#2A211B] py-3 px-4 rounded-xl font-semibold text-sm border border-[#2A211B]/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B65F3B]" />
                  <span>Call Now</span>
                </a>

                {/* WhatsApp Chat */}
                <a
                  id="visit-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FFF9EF] border border-[#2A211B]/10 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-[#2A211B]/10 mb-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#B65F3B]" />
                  <h4 className="font-display font-bold text-lg text-[#2A211B]">
                    Operating Hours
                  </h4>
                </div>
                {/* Live Pill */}
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusInfo.badgeClass}`}>
                  {statusInfo.statusText}
                </span>
              </div>

              <div className="space-y-2 text-sm text-[#5A4030]">
                {CAFE_DATA.hours.map((h, idx) => {
                  // match day with current day (Monday = 1, Sunday = 0)
                  const isToday =
                    (idx === 6 && currentDayIndex === 0) || (idx === currentDayIndex - 1);

                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between py-1.5 px-3 rounded-lg transition-colors ${
                        isToday ? 'bg-[#F5EFE3] font-bold text-[#2A211B] border border-[#2A211B]/10' : ''
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{h.day}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#B65F3B] text-white">
                            Today
                          </span>
                        )}
                      </span>
                      <span>
                        {h.open === "08:00" ? "8:00 AM" : h.open} — {h.close === "21:00" ? "9:00 PM" : "8:45 PM"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-xs text-[#8B8176] pt-3 border-t border-[#2A211B]/10">
                *Kitchen closes 20 minutes prior to closing time.
              </p>
            </div>

            {/* Helpful Visitor Amenities / Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#FFF9EF] border border-[#2A211B]/10 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-sm">
                <Car className="w-5 h-5 text-[#6E765B] mx-auto mb-1" />
                <h5 className="font-bold text-xs text-[#2A211B]">Parking</h5>
                <p className="text-[11px] text-[#8B8176] mt-0.5">Street parking available near 4th Block Park</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFF9EF] border border-[#2A211B]/10 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-sm">
                <PawPrint className="w-5 h-5 text-[#B65F3B] mx-auto mb-1" />
                <h5 className="font-bold text-xs text-[#2A211B]">Pet Friendly</h5>
                <p className="text-[11px] text-[#8B8176] mt-0.5">Outdoor patio welcomes your furry pals</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFF9EF] border border-[#2A211B]/10 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-sm">
                <Users className="w-5 h-5 text-[#5A4030] mx-auto mb-1" />
                <h5 className="font-bold text-xs text-[#2A211B]">Weekend Tip</h5>
                <p className="text-[11px] text-[#8B8176] mt-0.5">Arrive before 9:30 AM for zero wait-times</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Map Preview & Directions Interface with Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 35, x: 15 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            
            <div className="rounded-3xl overflow-hidden border border-[#2A211B]/15 shadow-lg bg-[#FFF9EF] relative">
              
              {/* Map View Toggle Header */}
              <div className="p-4 bg-[#FFF9EF] border-b border-[#2A211B]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B65F3B]" />
                  <span className="font-bold text-xs uppercase tracking-wider text-[#2A211B]">
                    Map View: Koramangala 4th Block
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#F5EFE3] p-1 rounded-lg border border-[#2A211B]/10">
                  <button
                    onClick={() => setShowInteractiveMap(false)}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                      !showInteractiveMap
                        ? 'bg-white text-[#2A211B] shadow-sm'
                        : 'text-[#8B8176] hover:text-[#2A211B]'
                    }`}
                  >
                    Quick Preview
                  </button>
                  <button
                    onClick={() => setShowInteractiveMap(true)}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                      showInteractiveMap
                        ? 'bg-white text-[#2A211B] shadow-sm'
                        : 'text-[#8B8176] hover:text-[#2A211B]'
                    }`}
                  >
                    Live Map
                  </button>
                </div>
              </div>

              {/* Map Display */}
              <div className="h-96 sm:h-[460px] relative bg-stone-200">
                {showInteractiveMap ? (
                  <iframe
                    title="The Hole In The Wall Cafe Google Map"
                    src="https://maps.google.com/maps?q=The%20Hole%20In%20The%20Wall%20Cafe%20Koramangala%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full">
                    {/* High-res static aesthetic map representation */}
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                      alt="Map view representation for Koramangala 4th Block"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />

                    {/* Central Location Pin Card */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                      <div className="w-14 h-14 rounded-full bg-[#B65F3B] text-white flex items-center justify-center shadow-2xl animate-bounce mb-3 border-2 border-white">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <h4 className="font-display text-2xl font-bold drop-shadow">
                        The Hole In The Wall Cafe
                      </h4>
                      <p className="text-sm text-[#F5EFE3] max-w-xs mt-1 drop-shadow">
                        3, 8th Main Rd, 4th Block, Koramangala
                      </p>
                      
                      <div className="mt-5 flex flex-col sm:flex-row gap-3">
                        <a
                          href={CAFE_DATA.links.googleMaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-[#2A211B] hover:bg-[#F5EFE3] font-bold text-xs px-5 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-1.5"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => setShowInteractiveMap(true)}
                          className="bg-black/60 hover:bg-black/80 text-white font-medium text-xs px-4 py-2.5 rounded-full backdrop-blur-md border border-white/30"
                        >
                          Embed Live Map
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 bg-[#F5EFE3] border-t border-[#2A211B]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5A4030] gap-2">
                <span className="flex items-center gap-1.5">
                  <CalendarCheck className="w-4 h-4 text-[#6E765B]" />
                  <span>Open all 7 days a week for breakfast, lunch &amp; dinner</span>
                </span>
                <a
                  href={CAFE_DATA.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#B65F3B] hover:underline"
                >
                  Get turn-by-turn navigation →
                </a>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};
