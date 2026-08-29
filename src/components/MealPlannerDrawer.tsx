import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ExternalLink, Share2, MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';
import { CAFE_DATA } from '../data/cafeData';

interface PlannedItem {
  dish: MenuItem;
  quantity: number;
}

interface MealPlannerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: PlannedItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearAll: () => void;
}

export const MealPlannerDrawer: React.FC<MealPlannerDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  // WhatsApp share message
  const shareText = `Hey! Here's my breakfast order for The Hole In The Wall Cafe (Koramangala):\n${items
    .map((item) => `• ${item.quantity}x ${item.dish.name} (₹${item.dish.price * item.quantity})`)
    .join('\n')}\n\nEstimated Total: ₹${grandTotal} (inc. 5% GST)`;

  const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <div
      id="meal-planner-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="meal-planner-title"
    >
      <div
        className="bg-[#FFF9EF] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#2A211B]/15 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#2A211B]/10 flex items-center justify-between bg-[#F5EFE3]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#B65F3B] text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 id="meal-planner-title" className="font-display font-bold text-lg text-[#2A211B]">
                Your Table Order Plan
              </h3>
              <p className="text-xs text-[#8B8176]">
                {items.length} {items.length === 1 ? 'item' : 'items'} planned
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#2A211B] hover:bg-[#EBE3D3] transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Planned Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#8B8176]">
              <ShoppingBag className="w-12 h-12 text-[#8B8176]/50 mb-3" />
              <h4 className="font-display font-bold text-lg text-[#2A211B]">Your plate is empty</h4>
              <p className="text-xs text-[#5A4030] mt-1 max-w-xs leading-relaxed">
                Browse our menu to add waffles, eggs, bacon platters, and cold brews to your table plan.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-[#2A211B]/10">
                <span className="text-xs font-bold text-[#8B8176] uppercase tracking-wider">
                  Dishes &amp; Portions
                </span>
                <button
                  onClick={onClearAll}
                  className="text-xs text-rose-700 hover:underline flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear list</span>
                </button>
              </div>

              {items.map(({ dish, quantity }) => (
                <div
                  key={dish.id}
                  className="p-3.5 rounded-2xl bg-white border border-[#2A211B]/10 shadow-sm flex items-center gap-3.5"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-[#2A211B] truncate">
                      {dish.name}
                    </h5>
                    <span className="text-xs text-[#8B8176]">
                      ₹{dish.price} each
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-[#F5EFE3] px-2 py-1 rounded-lg border border-[#2A211B]/10">
                    <button
                      onClick={() => onUpdateQuantity(dish.id, -1)}
                      className="text-[#2A211B] hover:text-[#B65F3B] p-0.5"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-xs w-4 text-center text-[#2A211B]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(dish.id, 1)}
                      className="text-[#2A211B] hover:text-[#B65F3B] p-0.5"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="font-bold text-sm text-[#2A211B] w-14 text-right">
                    ₹{dish.price * quantity}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer Summary & Order Actions */}
        {items.length > 0 && (
          <div className="p-5 bg-[#F5EFE3] border-t border-[#2A211B]/15 space-y-4">
            
            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#5A4030]">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-[#2A211B]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Govt. GST (5%)</span>
                <span className="font-semibold text-[#2A211B]">₹{gst}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#2A211B] pt-2 border-t border-[#2A211B]/10">
                <span>Estimated Total</span>
                <span className="text-[#B65F3B] text-lg">₹{grandTotal}</span>
              </div>
            </div>

            {/* Direct Order on Outlet System Button */}
            <a
              href={CAFE_DATA.links.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#B65F3B] hover:bg-[#9E4D2C] text-white py-3.5 rounded-full font-bold text-sm shadow-md transition-transform active:scale-95"
            >
              <span>Place Dine-in / Pickup Order</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Share with Friends via WhatsApp */}
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 rounded-full font-semibold text-xs shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Table Order on WhatsApp</span>
            </a>

            <p className="text-[11px] text-[#8B8176] text-center">
              Dine-in seating is walk-in friendly. Orders are prepared fresh upon seating.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
