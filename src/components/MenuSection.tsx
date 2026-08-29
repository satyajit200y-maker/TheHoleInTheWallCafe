import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Plus, 
  Check, 
  ExternalLink, 
  Info,
  ChevronRight,
  UtensilsCrossed
} from 'lucide-react';
import { MenuItem, DietaryType } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS, CAFE_DATA } from '../data/cafeData';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onAddToPlanner: (dish: MenuItem) => void;
  plannerIds: string[];
  initialCategory?: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onAddToPlanner,
  plannerIds,
  initialCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [dietaryFilter, setDietaryFilter] = useState<'all' | DietaryType | 'bestseller'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary / Bestseller filter
      let matchesDietary = true;
      if (dietaryFilter === 'veg') matchesDietary = item.dietary === 'veg';
      else if (dietaryFilter === 'non-veg') matchesDietary = item.dietary === 'non-veg';
      else if (dietaryFilter === 'egg') matchesDietary = item.dietary === 'egg';
      else if (dietaryFilter === 'bestseller') matchesDietary = !!item.isBestseller || !!item.isSignature;

      // Search query
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.pairing && item.pairing.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section
      id="menu"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF9EF] relative scroll-mt-16"
      aria-label="Cafe Menu"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B65F3B]/10 text-[#B65F3B] text-xs font-semibold uppercase tracking-wider mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Freshly Made Everyday</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2A211B] tracking-tight">
            Our All-Day Menu
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A4030]">
            Generous portions, farm-fresh eggs, handmade waffles, and specialty brews crafted to perfection.
          </p>
        </div>

        {/* Search & Dietary Filter Control Bar */}
        <div className="bg-[#F5EFE3] p-4 sm:p-5 rounded-2xl border border-[#2A211B]/10 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B8176]" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search waffles, bacon, burgers..."
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-full text-sm text-[#2A211B] border border-[#2A211B]/15 focus:outline-none focus:ring-2 focus:ring-[#B65F3B] placeholder:text-[#8B8176]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8B8176] hover:text-[#2A211B]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-[#5A4030] uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                Filter:
              </span>

              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 ${
                  dietaryFilter === 'all'
                    ? 'bg-[#2A211B] text-white shadow-sm'
                    : 'bg-white text-[#2A211B] hover:bg-[#EBE3D3] border border-[#2A211B]/10'
                }`}
              >
                All
              </button>

              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-[#2A211B] hover:bg-emerald-50 border border-emerald-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Veg Only</span>
              </button>

              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-rose-800 text-white shadow-sm'
                    : 'bg-white text-[#2A211B] hover:bg-rose-50 border border-rose-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Non-Veg</span>
              </button>

              <button
                onClick={() => setDietaryFilter('egg')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                  dietaryFilter === 'egg'
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'bg-white text-[#2A211B] hover:bg-amber-50 border border-amber-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Egg Dishes</span>
              </button>

              <button
                onClick={() => setDietaryFilter('bestseller')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                  dietaryFilter === 'bestseller'
                    ? 'bg-[#B65F3B] text-white shadow-sm'
                    : 'bg-white text-[#2A211B] hover:bg-amber-50 border border-amber-300'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Bestsellers</span>
              </button>
            </div>

          </div>
        </div>

        {/* Main Menu Grid with Sticky Category Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Navigation (Desktop Sidebar / Mobile Horizontal Tabs) */}
          <div className="lg:col-span-3 sticky lg:top-24 z-20 bg-[#FFF9EF] lg:bg-transparent py-2 lg:py-0">
            <div className="bg-[#F5EFE3] p-3 sm:p-4 rounded-2xl border border-[#2A211B]/10 shadow-sm">
              <h3 className="font-display font-bold text-base text-[#2A211B] mb-3 px-2 hidden lg:block">
                Menu Sections
              </h3>
              <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-1 lg:pb-0 scrollbar-none">
                {MENU_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      id={`menu-cat-tab-${cat.id}`}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 lg:shrink flex items-center justify-between group ${
                        isActive
                          ? 'bg-[#B65F3B] text-white shadow-sm'
                          : 'text-[#2A211B] hover:bg-[#EBE3D3]'
                      }`}
                    >
                      <span className="whitespace-nowrap">{cat.name}</span>
                      <ChevronRight className={`w-4 h-4 hidden lg:block transition-transform ${
                        isActive ? 'text-white translate-x-0.5' : 'text-[#8B8176] group-hover:text-[#2A211B]'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Order Outlet Notice */}
            <div className="mt-4 p-4 rounded-2xl bg-[#EBE3D3] border border-[#2A211B]/10 hidden lg:block">
              <p className="text-xs text-[#5A4030] leading-relaxed">
                Craving delivery or pickup? Order directly via our official store system.
              </p>
              <a
                href={CAFE_DATA.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#B65F3B] hover:text-[#9E4D2C]"
              >
                <span>Official Outlet Ordering</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="lg:col-span-9">
            
            {/* Filter Result Counter */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#2A211B]/10">
              <p className="text-sm font-medium text-[#5A4030]">
                Showing <strong className="text-[#2A211B]">{filteredItems.length}</strong> delicious items
                {selectedCategory !== 'all' && (
                  <span> in <em className="font-semibold text-[#B65F3B]">
                    {MENU_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                  </em></span>
                )}
              </p>
              {(searchQuery || dietaryFilter !== 'all' || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setDietaryFilter('all');
                    setSelectedCategory('all');
                  }}
                  className="text-xs font-bold text-[#B65F3B] hover:underline"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 ? (
              <div className="p-12 text-center bg-[#F5EFE3] rounded-2xl border border-dashed border-[#2A211B]/20">
                <UtensilsCrossed className="w-10 h-10 text-[#8B8176] mx-auto mb-3" />
                <h4 className="font-display text-xl font-bold text-[#2A211B]">No dishes matched your criteria</h4>
                <p className="text-sm text-[#5A4030] mt-1 max-w-md mx-auto">
                  Try adjusting your search terms or dietary filter to see our full range of waffles, breakfast platters, and brews.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setDietaryFilter('all');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-5 py-2 bg-[#B65F3B] text-white text-xs font-semibold rounded-full hover:bg-[#9E4D2C]"
                >
                  View All Dishes
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((dish) => {
                  const isPlanned = plannerIds.includes(dish.id);
                  return (
                    <div
                      key={dish.id}
                      id={`menu-item-${dish.id}`}
                      className="group bg-white rounded-2xl p-4 sm:p-5 border border-[#2A211B]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="flex gap-4">
                        {/* Dish Thumbnail */}
                        <div
                          onClick={() => onSelectDish(dish)}
                          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 cursor-pointer bg-stone-100"
                        >
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-sm p-1 rounded">
                            <span
                              className={`w-2.5 h-2.5 block rounded-full ${
                                dish.dietary === 'veg'
                                  ? 'bg-emerald-600'
                                  : dish.dietary === 'egg'
                                  ? 'bg-amber-600'
                                  : 'bg-rose-600'
                              }`}
                            />
                          </div>
                        </div>

                        {/* Dish Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4
                              onClick={() => onSelectDish(dish)}
                              className="font-display font-bold text-base sm:text-lg text-[#2A211B] group-hover:text-[#B65F3B] transition-colors cursor-pointer leading-snug"
                            >
                              {dish.name}
                            </h4>
                          </div>

                          {/* Signature / Bestseller Badge */}
                          {(dish.isSignature || dish.isBestseller || dish.isChefSpecial) && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {dish.isSignature && (
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                                  Signature
                                </span>
                              )}
                              {dish.isBestseller && (
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#B65F3B]/10 text-[#B65F3B] border border-[#B65F3B]/20">
                                  Popular
                                </span>
                              )}
                              {dish.isChefSpecial && (
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-200">
                                  Chef Special
                                </span>
                              )}
                            </div>
                          )}

                          <p className="mt-1.5 text-xs sm:text-sm text-[#5A4030] line-clamp-2 leading-relaxed">
                            {dish.description}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer: Price and Plan Action */}
                      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-[#8B8176] block">Price</span>
                          <span className="font-bold text-base sm:text-lg text-[#2A211B]">
                            ₹{dish.price}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onSelectDish(dish)}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#5A4030] hover:bg-[#F5EFE3] transition-colors"
                          >
                            Details
                          </button>

                          <button
                            onClick={() => onAddToPlanner(dish)}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                              isPlanned
                                ? 'bg-emerald-600 text-white shadow-sm'
                                : 'bg-[#B65F3B] hover:bg-[#9E4D2C] text-white shadow-sm'
                            }`}
                          >
                            {isPlanned ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added</span>
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
                    </div>
                  );
                })}
              </div>
            )}

            {/* Note regarding pricing & taxes */}
            <div className="mt-8 p-4 rounded-xl bg-[#F5EFE3]/70 border border-[#2A211B]/10 text-xs text-[#8B8176] flex items-center gap-2">
              <Info className="w-4 h-4 text-[#B65F3B] shrink-0" />
              <span>
                All items are prepared fresh to order. Prices are exclusive of applicable government taxes (5% GST). Please inform your server of any dietary allergies.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
