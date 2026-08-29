import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, Sparkles, Quote, ThumbsUp } from 'lucide-react';
import { REVIEWS_LIST, CAFE_DATA } from '../data/cafeData';

export const ReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Best Breakfast', 'Weekend Brunch', 'Cozy Ambience', 'Legendary Food'];

  const filteredReviews = selectedTag === 'All'
    ? REVIEWS_LIST
    : REVIEWS_LIST.filter((r) => r.tag === selectedTag);

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF9EF] relative overflow-hidden"
      aria-label="Customer reviews and ratings"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B65F3B]/10 text-[#B65F3B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#B65F3B]" />
            <span>Loved by Bengaluru</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2A211B] tracking-tight">
            Worth coming back for.
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-[#5A4030]">
            From university students to weekend families, here is what makes mornings at The Hole In The Wall unforgettable.
          </p>

          {/* Social Proof Stats Header Card */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 p-5 rounded-2xl bg-[#F5EFE3] border border-[#2A211B]/10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-left">
                <span className="font-bold text-lg text-[#2A211B] leading-none block">
                  {CAFE_DATA.stats.googleRating} / 5.0
                </span>
                <span className="text-xs text-[#8B8176]">Average Google Rating</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-[#2A211B]/15" />

            <div className="text-left">
              <span className="font-bold text-lg text-[#2A211B] leading-none block">
                {CAFE_DATA.stats.reviewsCount}
              </span>
              <span className="text-xs text-[#8B8176]">Verified Diner Reviews</span>
            </div>
          </div>

          {/* Tag Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                id={`review-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedTag === tag
                    ? 'bg-[#B65F3B] text-white shadow-sm'
                    : 'bg-[#F5EFE3] text-[#5A4030] hover:bg-[#EBE3D3] border border-[#2A211B]/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-[#F5EFE3] rounded-2xl p-6 sm:p-7 border border-[#2A211B]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-[#5A4030] border border-[#2A211B]/10">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[#2A211B] text-sm sm:text-base leading-relaxed italic relative">
                  “{review.text}”
                </p>

                {/* Favorite Dish Stamp */}
                {review.favoriteDish && (
                  <div className="mt-4 pt-3 border-t border-[#2A211B]/10 flex items-center gap-1.5 text-xs text-[#B65F3B] font-semibold">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Favorite: {review.favoriteDish}</span>
                  </div>
                )}
              </div>

              {/* Author & Source */}
              <div className="mt-6 flex items-center justify-between pt-3 border-t border-[#2A211B]/10">
                <div>
                  <h4 className="font-display font-bold text-sm text-[#2A211B]">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-[#8B8176]">
                    {review.date} · Verified Diner
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#8B8176]">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href={CAFE_DATA.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#B65F3B] hover:text-[#9E4D2C] px-5 py-2.5 rounded-full bg-[#F5EFE3] border border-[#2A211B]/10 hover:bg-[#EBE3D3] transition-colors"
          >
            <span>Read all 10,400+ reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
