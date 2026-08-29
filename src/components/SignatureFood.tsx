import React from 'react';
import { ArrowRight, Sparkles, Plus, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/cafeData';

interface SignatureFoodProps {
  onSelectDish: (dish: MenuItem) => void;
  onExploreFullMenu: (categoryId?: string) => void;
  onAddToPlanner: (dish: MenuItem) => void;
  plannerIds: string[];
}

export const SignatureFood: React.FC<SignatureFoodProps> = ({
  onSelectDish,
  onExploreFullMenu,
  onAddToPlanner,
  plannerIds
}) => {
  // Select top 6 iconic signature items
  const signatureItems = MENU_ITEMS.filter((item) => item.isSignature).slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="signatures"
      className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-[#F5EFE3] relative overflow-hidden"
      aria-label="Signature dishes and cafe favorites"
    >
      {/* Subtle ambient decorative gradient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#B65F3B]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B65F3B]/10 text-[#B65F3B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Café Signatures</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2A211B] tracking-tight">
            Come hungry. Leave happy.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A4030] leading-relaxed">
            From our sizzling farmer’s skillets to golden Belgian waffles piled high with chocolate, every dish is prepared fresh to order with generous love.
          </p>
        </motion.div>

        {/* Signature Dishes Grid with Staggered Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {signatureItems.map((dish) => {
            const isPlanned = plannerIds.includes(dish.id);
            return (
              <motion.div
                key={dish.id}
                id={`signature-card-${dish.id}`}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-[#FFF9EF] rounded-2xl overflow-hidden border border-[#2A211B]/10 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-200">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                  {/* Dietary Marker Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm border border-stone-200">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.dietary === 'veg'
                          ? 'bg-emerald-600'
                          : dish.dietary === 'egg'
                          ? 'bg-amber-600'
                          : 'bg-rose-600'
                      }`}
                      title={`${dish.dietary.toUpperCase()}`}
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A211B]">
                      {dish.dietary === 'veg' ? 'Veg' : dish.dietary === 'egg' ? 'Contains Egg' : 'Non-Veg'}
                    </span>
                  </div>

                  {/* Price Chip */}
                  <div className="absolute bottom-3.5 right-3.5 z-10 bg-[#2A211B] text-white px-3 py-1 rounded-full font-bold text-sm shadow">
                    ₹{dish.price}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2A211B] group-hover:text-[#B65F3B] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#5A4030] line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-[#2A211B]/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="text-xs font-bold text-[#B65F3B] hover:text-[#9E4D2C] uppercase tracking-wider flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <button
                      id={`btn-add-planner-${dish.id}`}
                      onClick={() => onAddToPlanner(dish)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isPlanned
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-[#F5EFE3] hover:bg-[#B65F3B] text-[#2A211B] hover:text-white border border-[#2A211B]/15'
                      }`}
                    >
                      {isPlanned ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Planned</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View Full Menu CTA Banner with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <button
            id="signatures-view-full-menu-btn"
            onClick={() => onExploreFullMenu()}
            className="inline-flex items-center gap-2 bg-[#2A211B] hover:bg-[#3D3027] text-[#FFF9EF] font-semibold px-8 py-3.5 rounded-full shadow hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>View Complete Menu (25+ Dishes)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

