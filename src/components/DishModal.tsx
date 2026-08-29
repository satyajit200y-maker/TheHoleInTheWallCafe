import React from 'react';
import { X, Sparkles, Plus, Check, Coffee, ExternalLink, AlertTriangle } from 'lucide-react';
import { MenuItem } from '../types';
import { CAFE_DATA } from '../data/cafeData';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToPlanner: (dish: MenuItem) => void;
  isPlanned: boolean;
}

export const DishModal: React.FC<DishModalProps> = ({
  dish,
  onClose,
  onAddToPlanner,
  isPlanned
}) => {
  if (!dish) return null;

  return (
    <div
      id="dish-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      <div
        className="bg-[#FFF9EF] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#2A211B]/15 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-200 shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Dietary badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                dish.dietary === 'veg'
                  ? 'bg-emerald-600'
                  : dish.dietary === 'egg'
                  ? 'bg-amber-600'
                  : 'bg-rose-600'
              }`}
            />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2A211B]">
              {dish.dietary === 'veg' ? 'Vegetarian' : dish.dietary === 'egg' ? 'Egg Preparation' : 'Non-Vegetarian'}
            </span>
          </div>

          {/* Title on image */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <h3 id="dish-modal-title" className="font-display text-2xl sm:text-3xl font-bold leading-tight">
              {dish.name}
            </h3>
            <span className="text-xl sm:text-2xl font-extrabold text-amber-300">
              ₹{dish.price}
            </span>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-[#5A4030]">
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {dish.isSignature && (
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Signature Item</span>
              </span>
            )}
            {dish.isBestseller && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#B65F3B]/10 text-[#B65F3B] border border-[#B65F3B]/30">
                Customer Favorite
              </span>
            )}
            {dish.calories && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5EFE3] text-[#5A4030]">
                {dish.calories} approx.
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B8176] mb-1">
              About This Dish
            </h4>
            <p className="text-base text-[#2A211B] leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Allergens */}
          {dish.allergens && dish.allergens.length > 0 && (
            <div className="p-3.5 rounded-xl bg-[#F5EFE3] border border-[#2A211B]/10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B8176] uppercase tracking-wider mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Contains Allergens</span>
              </div>
              <p className="text-xs text-[#2A211B] font-medium">
                {dish.allergens.join(', ')}
              </p>
            </div>
          )}

          {/* Pairing Recommendation */}
          {dish.pairing && (
            <div className="p-3.5 rounded-xl bg-[#6E765B]/10 border border-[#6E765B]/20 flex items-start gap-3">
              <Coffee className="w-5 h-5 text-[#6E765B] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-[#6E765B] uppercase tracking-wider">
                  Recommended Pairing
                </h5>
                <p className="text-sm font-semibold text-[#2A211B] mt-0.5">
                  {dish.pairing}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-5 bg-[#F5EFE3] border-t border-[#2A211B]/10 flex items-center justify-between gap-3">
          <a
            href={CAFE_DATA.links.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#B65F3B] hover:text-[#9E4D2C] flex items-center gap-1"
          >
            <span>Order On Outlet System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => onAddToPlanner(dish)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow transition-all ${
              isPlanned
                ? 'bg-emerald-700 text-white'
                : 'bg-[#B65F3B] hover:bg-[#9E4D2C] text-white'
            }`}
          >
            {isPlanned ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Table Plan</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to My Order (₹{dish.price})</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
