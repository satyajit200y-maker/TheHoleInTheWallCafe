export type DietaryType = 'veg' | 'non-veg' | 'egg';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  dietary: DietaryType;
  image: string;
  isSignature?: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  calories?: string;
  allergens?: string[];
  pairing?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tagline?: string;
  iconName?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Ambience' | 'Coffee' | 'Breakfast';
  image: string;
  caption: string;
  span?: 'col-span-1' | 'col-span-2' | 'row-span-2';
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
  tag: 'Best Breakfast' | 'Weekend Brunch' | 'Cozy Ambience' | 'Coffee & Work' | 'Legendary Food';
  favoriteDish?: string;
  source: 'Google Reviews' | 'Zomato';
}

export interface BusinessDayHours {
  day: string;
  dayShort: string;
  open: string;
  close: string;
  isSpecial?: boolean;
}

export interface CafeDetails {
  name: string;
  tagline: string;
  storyQuote: string;
  phone: string;
  phoneRaw: string;
  whatsappRaw: string;
  whatsappMessage: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullAddress: string;
    landmark: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  links: {
    googleMaps: string;
    appleMaps: string;
    orderOnline: string;
    instagram: string;
    facebook: string;
    zomato: string;
  };
  stats: {
    googleRating: number;
    reviewsCount: string;
    yearsServing: number;
    wafflesServed: string;
  };
  hours: BusinessDayHours[];
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  savedAt?: string;
}
