import React from 'react';
import { Coffee, Heart, BookOpen, Clock, Users, Sparkles, MapPin } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

interface StorySectionProps {
  onVisitClick: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onVisitClick }) => {
  return (
    <section
      id="story"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF9EF] relative overflow-hidden"
      aria-label="Our Story and heritage"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Film Aesthetic */}
          <div className="lg:col-span-6 relative">
            {/* Main Editorial Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
                alt="Cozy interior seating and books at The Hole In The Wall Cafe"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating Quote Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFF9EF]/90 backdrop-blur-md border border-[#2A211B]/10 shadow-lg">
                <p className="font-display italic text-[#2A211B] text-sm sm:text-base font-semibold">
                  “The secret ingredient is never rushing a good morning.”
                </p>
                <span className="text-[11px] text-[#8B8176] uppercase tracking-wider block mt-1">
                  — Koramangala 4th Block, Bengaluru
                </span>
              </div>
            </div>

            {/* Overlapping Secondary Card (Desktop & Tablet) */}
            <div className="hidden sm:flex absolute -bottom-8 -right-6 lg:-right-8 bg-[#F5EFE3] p-5 rounded-2xl shadow-xl border border-[#2A211B]/15 max-w-xs items-center gap-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#B65F3B] text-white flex items-center justify-center shrink-0 shadow-md">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-[#2A211B] text-base leading-tight">
                  14+ Years of Mornings
                </h4>
                <p className="text-xs text-[#5A4030] mt-0.5">
                  Over 250,000 waffles & countless conversations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6E765B]/15 text-[#6E765B] text-xs font-bold uppercase tracking-wider w-fit">
              <Heart className="w-3.5 h-3.5 fill-[#6E765B]" />
              <span>Our Roots &amp; Philosophy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A211B] tracking-tight leading-[1.15]">
              More than a café. <br />
              <span className="text-[#B65F3B] italic">It's a little piece of home.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5A4030] font-normal leading-relaxed">
              <p>
                Tucked away in the tree-lined lanes of Koramangala 4th Block, <strong>The Hole In The Wall Cafe</strong> started with a simple, stubborn belief: breakfast is the best meal of the day, and it should never be rushed or confined to early mornings.
              </p>
              <p>
                Step past our cozy threshold and you’ll find exposed brick walls lined with well-loved paperback novels, vintage memorabilia, the sizzle of butter on cast iron, and the rich aroma of freshly steeped Chikmagalur dark roasts.
              </p>
              <p>
                Whether you’re catching up over weekend brunch with friends, nursing a creative slump with a 16-hour cold brew, or diving into our iconic Sloppy Joe after a late night, we are here to feed your soul.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#F5EFE3] border border-[#2A211B]/10">
                <Clock className="w-5 h-5 text-[#B65F3B] mb-2" />
                <h4 className="font-bold text-sm text-[#2A211B]">All-Day Breakfast</h4>
                <p className="text-xs text-[#5A4030] mt-1">Wake up at 2 PM? We're still flipping your eggs and waffles.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFE3] border border-[#2A211B]/10">
                <BookOpen className="w-5 h-5 text-[#6E765B] mb-2" />
                <h4 className="font-bold text-sm text-[#2A211B]">Books &amp; Vibes</h4>
                <p className="text-xs text-[#5A4030] mt-1">Take a book from our shelves or sit by the sunny garden porch.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFE3] border border-[#2A211B]/10">
                <Sparkles className="w-5 h-5 text-[#B65F3B] mb-2" />
                <h4 className="font-bold text-sm text-[#2A211B]">Scratch Kitchen</h4>
                <p className="text-xs text-[#5A4030] mt-1">Real butter, fresh house compotes, and handmade brioche.</p>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-4 flex items-center gap-4">
              <button
                id="story-visit-us-cta"
                onClick={onVisitClick}
                className="inline-flex items-center gap-2 bg-[#B65F3B] hover:bg-[#9E4D2C] text-white px-6 py-3 rounded-full font-semibold text-sm shadow hover:shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Our Koramangala Café</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
