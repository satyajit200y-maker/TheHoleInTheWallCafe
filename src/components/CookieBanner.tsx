import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X, SlidersHorizontal } from 'lucide-react';
import { CookiePreferences } from '../types';

interface CookieBannerProps {
  onOpenPreferences: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPreferences }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('thitw_cookie_preferences');
    if (!saved) {
      // Show after 1 second
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('thitw_cookie_preferences', JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleRejectOptional = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('thitw_cookie_preferences', JSON.stringify(prefs));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      id="cookie-consent-banner"
      className="fixed bottom-20 lg:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-[#FFF9EF] rounded-2xl p-5 border border-[#2A211B]/15 shadow-2xl animate-in slide-in-from-bottom duration-300"
      role="region"
      aria-label="Cookie consent notice"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-[#B65F3B] text-white flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-display font-bold text-sm text-[#2A211B]">
            Cookie &amp; Privacy Notice
          </h4>
          <p className="text-xs text-[#5A4030] mt-1 leading-relaxed">
            We use cookies to improve your experience, understand website usage and remember your preferences.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#2A211B]/10 flex flex-wrap items-center gap-2 justify-end">
        <button
          onClick={onOpenPreferences}
          className="text-xs font-semibold text-[#5A4030] hover:text-[#2A211B] px-3 py-1.5 rounded-lg hover:bg-[#F5EFE3] transition-colors flex items-center gap-1"
        >
          <SlidersHorizontal className="w-3 h-3" />
          <span>Manage</span>
        </button>

        <button
          onClick={handleRejectOptional}
          className="text-xs font-semibold text-[#2A211B] bg-[#F5EFE3] hover:bg-[#EBE3D3] px-3.5 py-1.5 rounded-full border border-[#2A211B]/10 transition-colors"
        >
          Reject Optional
        </button>

        <button
          onClick={handleAcceptAll}
          className="text-xs font-bold text-white bg-[#B65F3B] hover:bg-[#9E4D2C] px-4 py-1.5 rounded-full shadow-sm transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookieModalProps> = ({ isOpen, onClose }) => {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem('thitw_cookie_preferences');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setAnalytics(!!parsed.analytics);
          setMarketing(!!parsed.marketing);
        } catch {
          // ignore
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('thitw_cookie_preferences', JSON.stringify(prefs));
    onClose();
  };

  return (
    <div
      id="cookie-preferences-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#FFF9EF] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#2A211B]/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 bg-[#F5EFE3] border-b border-[#2A211B]/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#B65F3B] text-white flex items-center justify-center">
              <Cookie className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#2A211B]">
              Cookie Preferences
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-[#2A211B] hover:bg-[#EBE3D3] rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-sm text-[#5A4030]">
          {/* Necessary */}
          <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-[#F5EFE3] border border-[#2A211B]/10">
            <div>
              <div className="flex items-center gap-2">
                <h5 className="font-bold text-[#2A211B]">Strictly Necessary</h5>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                  Always Active
                </span>
              </div>
              <p className="text-xs text-[#8B8176] mt-1">
                Required for core website functionality, security, and storing your meal wishlist and consent choices.
              </p>
            </div>
          </div>

          {/* Analytics */}
          <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-white border border-[#2A211B]/10">
            <div>
              <h5 className="font-bold text-[#2A211B]">Analytics &amp; Performance</h5>
              <p className="text-xs text-[#8B8176] mt-1">
                Helps us understand which menu items, waffles, and breakfast platters visitors love the most.
              </p>
            </div>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1 w-5 h-5 accent-[#B65F3B] cursor-pointer rounded"
            />
          </div>

          {/* Marketing */}
          <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-white border border-[#2A211B]/10">
            <div>
              <h5 className="font-bold text-[#2A211B]">Marketing &amp; Social</h5>
              <p className="text-xs text-[#8B8176] mt-1">
                Used to deliver relevant festival updates, breakfast specials, and social media media embeds.
              </p>
            </div>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="mt-1 w-5 h-5 accent-[#B65F3B] cursor-pointer rounded"
            />
          </div>
        </div>

        <div className="p-4 bg-[#F5EFE3] border-t border-[#2A211B]/10 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#5A4030] hover:text-[#2A211B]"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-[#B65F3B] hover:bg-[#9E4D2C] text-white font-bold text-xs rounded-full shadow transition-all"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
