import React from 'react';
import { X, ShieldCheck, FileText, Cookie, AlertCircle } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export type LegalDocType = 'privacy' | 'cookie' | 'terms' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
  onOpenCookiePreferences?: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  docType,
  onClose,
  onOpenCookiePreferences
}) => {
  if (!docType) return null;

  return (
    <div
      id="legal-document-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#FFF9EF] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-[#2A211B]/15 flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#F5EFE3] border-b border-[#2A211B]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B65F3B] text-white flex items-center justify-center">
              {docType === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {docType === 'cookie' && <Cookie className="w-5 h-5" />}
              {docType === 'terms' && <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#2A211B]">
                {docType === 'privacy' && 'Privacy Policy'}
                {docType === 'cookie' && 'Cookie Policy'}
                {docType === 'terms' && 'Terms & Guidelines'}
              </h3>
              <p className="text-xs text-[#8B8176]">
                The Hole In The Wall Cafe · Last updated: 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#2A211B] hover:bg-[#EBE3D3] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#5A4030] leading-relaxed">
          
          {/* PRIVACY POLICY */}
          {docType === 'privacy' && (
            <>
              <div className="space-y-4">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  1. Information We Collect
                </h4>
                <p>
                  At <strong>The Hole In The Wall Cafe</strong>, we respect your privacy. When you visit our website, browse our menu, or initiate communication via telephone or WhatsApp, we only handle the minimal information necessary to assist you with inquiries, directions, and customer support.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  2. WhatsApp and Phone Communications
                </h4>
                <p>
                  When you initiate a WhatsApp conversation or call through our one-tap buttons, your communications occur directly through WhatsApp Inc. or your telecom provider. We do not sell, rent, or trade your phone number or messaging data to third-party advertisers.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  3. Online Ordering and External Partners
                </h4>
                <p>
                  Orders placed through external ordering links (such as our official store locator, Zomato, or Swiggy) are processed directly by those respective platforms under their respective privacy policies and terms of service.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  4. Contact &amp; Inquiries
                </h4>
                <p>
                  If you have any questions regarding our privacy practices, you may reach out directly to us at <strong>{CAFE_DATA.phone}</strong> or visit our café at {CAFE_DATA.address.fullAddress}.
                </p>
              </div>
            </>
          )}

          {/* COOKIE POLICY */}
          {docType === 'cookie' && (
            <>
              <div className="space-y-4">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  1. What Are Cookies?
                </h4>
                <p>
                  Cookies are small text files placed on your device to ensure smooth website operation, remember your preferences (such as your table order wishlist and cookie consent status), and understand overall visitor engagement.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  2. Cookie Categories
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Necessary Cookies:</strong> Essential for website navigation, security, and storing your meal wishlist and consent preferences. Always enabled.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Optional cookies that help us understand which dishes and pages are most viewed so we can improve our offerings.
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Optional cookies used to deliver relevant updates and cafe promotions.
                  </li>
                </ul>
              </div>

              {onOpenCookiePreferences && (
                <div className="p-4 rounded-xl bg-[#F5EFE3] border border-[#2A211B]/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2A211B]">
                    Manage your current cookie choices:
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCookiePreferences();
                    }}
                    className="px-4 py-2 rounded-full bg-[#B65F3B] text-white text-xs font-bold hover:bg-[#9E4D2C]"
                  >
                    Adjust Preferences
                  </button>
                </div>
              )}
            </>
          )}

          {/* TERMS & GUIDELINES */}
          {docType === 'terms' && (
            <>
              {/* Important Disclaimer Highlight Box */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-900">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs font-medium leading-relaxed">
                  <strong>Notice:</strong> Menu items, seasonal ingredient availability, prices, and operating hours are subject to change without prior notice. Please confirm specific dietary accommodations with your server.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  1. Dining Guidelines &amp; Seating
                </h4>
                <p>
                  The Hole In The Wall Cafe welcomes guests on a walk-in friendly basis. During peak weekend brunch hours (10:00 AM – 1:30 PM), table queues operate on a first-come, first-served basis. We appreciate your patience while our kitchen prepares your fresh orders.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  2. Intellectual Property
                </h4>
                <p>
                  All content, photography, branding elements, and menu descriptions on this website are the property of The Hole In The Wall Cafe. Unauthorized reproduction or commercial use is strictly prohibited.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-base text-[#2A211B]">
                  3. Third-Party Links
                </h4>
                <p>
                  Our website contains external links to Google Maps, Apple Maps, and official store ordering portals. We are not responsible for the independent policies or availability of third-party platforms.
                </p>
              </div>
            </>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F5EFE3] border-t border-[#2A211B]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#2A211B] text-[#FFF9EF] font-semibold text-xs rounded-full hover:bg-[#3D3027] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
