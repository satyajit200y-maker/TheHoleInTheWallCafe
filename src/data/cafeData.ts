import { CafeDetails, MenuItem, MenuCategory, GalleryItem, ReviewItem } from '../types';

export const CAFE_DATA: CafeDetails = {
  name: "The Hole In The Wall Cafe",
  tagline: "Good mornings start here.",
  storyQuote: "More than a café. It's a little piece of home.",
  phone: "+91 99456 92562",
  phoneRaw: "+919945692562",
  whatsappRaw: "919945692562",
  whatsappMessage: "Hi! I found The Hole In The Wall Cafe website and would like to know more about the menu and seating.",
  email: "hello@theholeinthewallcafe.org",
  address: {
    line1: "3, 8th Main Rd",
    line2: "4th Block, Koramangala",
    area: "Koramangala",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560047",
    country: "India",
    fullAddress: "3, 8th Main Rd, 4th Block, Koramangala, Bengaluru, Karnataka 560047",
    landmark: "Behind Maharaja Signal / Near 4th Block Park"
  },
  coordinates: {
    lat: 12.9344,
    lng: 77.6267
  },
  links: {
    googleMaps: "https://www.google.com/maps/dir/?api=1&destination=The+Hole+in+the+Wall+Cafe+Koramangala+Bengaluru",
    appleMaps: "https://maps.apple.com/?daddr=12.9344,77.6267&dirflg=d&t=m",
    orderOnline: "https://theholeinthewallcafe.uengage.in/store-locator/bengaluru/the-hole-in-the-wall-cafe-koramangala-bengaluru",
    instagram: "https://instagram.com/theholeinthewallcafe",
    facebook: "https://facebook.com/TheHoleInTheWallCafe",
    zomato: "https://www.zomato.com/bangalore/the-hole-in-the-wall-cafe-koramangala-4th-block-bangalore"
  },
  stats: {
    googleRating: 4.3,
    reviewsCount: "10,450+",
    yearsServing: 14,
    wafflesServed: "250,000+"
  },
  hours: [
    { day: "Monday", dayShort: "Mon", open: "08:00", close: "20:45" },
    { day: "Tuesday", dayShort: "Tue", open: "08:00", close: "20:45" },
    { day: "Wednesday", dayShort: "Wed", open: "08:00", close: "20:45" },
    { day: "Thursday", dayShort: "Thu", open: "08:00", close: "20:45" },
    { day: "Friday", dayShort: "Fri", open: "08:00", close: "20:45" },
    { day: "Saturday", dayShort: "Sat", open: "08:00", close: "21:00", isSpecial: true },
    { day: "Sunday", dayShort: "Sun", open: "08:00", close: "21:00", isSpecial: true }
  ]
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'Full Menu', tagline: 'Every comforting bite & sip' },
  { id: 'breakfast', name: 'Breakfast Platters', tagline: 'Legendary hearty spreads with eggs, meats & toast' },
  { id: 'eggs', name: 'Eggs & Omelettes', tagline: 'Whipped fluffy, folded fresh, packed with flavor' },
  { id: 'waffles', name: 'Waffles & Pancakes', tagline: 'Crispy edges, fluffy centers, pure morning joy' },
  { id: 'burgers', name: 'Burgers & Sloppy Joes', tagline: 'Juicy, messy, comfort food heaven' },
  { id: 'sandwiches', name: 'Homestyle Sandwiches', tagline: 'Toasted artisan breads with generous fillings' },
  { id: 'pasta', name: 'Pastas & Mains', tagline: 'Rich sauces, al dente noodles, hearty plates' },
  { id: 'beverages', name: 'Brews & Thickshakes', tagline: 'Specialty roasts, cold brews, and decadent shakes' },
  { id: 'desserts', name: 'Desserts & Bakes', tagline: 'Sweet finishes fresh from our oven' }
];

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast Platters
  {
    id: 'm1',
    name: "The Farmer's Breakfast",
    category: 'breakfast',
    price: 390,
    dietary: 'non-veg',
    isSignature: true,
    isBestseller: true,
    description: "Two farm eggs your way, grilled pork sausages, crispy streaky bacon, pan-seared hash browns, buttered toast & baked beans.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop",
    calories: "680 kcal",
    allergens: ["Gluten", "Eggs", "Dairy"],
    pairing: "Hot Dark Roast Cappuccino"
  },
  {
    id: 'm2',
    name: "The Full English Spread",
    category: 'breakfast',
    price: 410,
    dietary: 'non-veg',
    isSignature: true,
    description: "Sunny side eggs, English chicken sausages, grilled mushrooms, roasted herb tomatoes, baked beans and warm buttered toast.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    calories: "620 kcal",
    allergens: ["Gluten", "Eggs", "Dairy"],
    pairing: "English Breakfast Tea"
  },
  {
    id: 'm3',
    name: "Country Veggie Breakfast Platter",
    category: 'breakfast',
    price: 320,
    dietary: 'veg',
    isBestseller: true,
    description: "Crispy potato rosti, sautéed garlic mushrooms, charred cherry tomatoes, seasoned baked beans, grilled paneer cubes & multi-grain toast.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    calories: "510 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "Valencia Orange Cold Pressed Juice"
  },
  {
    id: 'm4',
    name: "Goan Chorizo Scramble Platter",
    category: 'breakfast',
    price: 420,
    dietary: 'non-veg',
    isChefSpecial: true,
    description: "Spiced spicy Goan pork sausage tossed with three whipped farm eggs, caramelized onions, served with buttered pav buns.",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=800&auto=format&fit=crop",
    calories: "640 kcal",
    allergens: ["Gluten", "Eggs", "Pork"],
    pairing: "Koramangala Cold Brew"
  },

  // Eggs & Omelettes
  {
    id: 'm5',
    name: "The Meaty Meaty Omelette",
    category: 'eggs',
    price: 360,
    dietary: 'non-veg',
    isSignature: true,
    isBestseller: true,
    description: "A gigantic 3-egg omelette stuffed with smoked chicken salami, crisp bacon bits, sausages, and melted cheddar cheese.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    calories: "580 kcal",
    allergens: ["Eggs", "Dairy"],
    pairing: "Classic Flat White"
  },
  {
    id: 'm6',
    name: "Cheesy Garlic Mushroom Fold",
    category: 'eggs',
    price: 290,
    dietary: 'egg',
    description: "Fluffy open-faced omelette loaded with butter-sautéed button mushrooms, fresh thyme, mozzarella, and cheddar blend.",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=800&auto=format&fit=crop",
    calories: "440 kcal",
    allergens: ["Eggs", "Dairy"],
    pairing: "Iced Latte"
  },
  {
    id: 'm7',
    name: "Eggs Benedict on House Brioche",
    category: 'eggs',
    price: 340,
    dietary: 'non-veg',
    isBestseller: true,
    description: "Two gently poached eggs on thick toasted brioche slices with smoked ham, smothered in silky golden hollandaise sauce.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop",
    calories: "550 kcal",
    allergens: ["Eggs", "Gluten", "Dairy"],
    pairing: "Americano with cream"
  },
  {
    id: 'm8',
    name: "Popeye Spinach & Feta Scramble",
    category: 'eggs',
    price: 270,
    dietary: 'egg',
    description: "Soft creamy scrambled eggs gently folded with wilted garden spinach, crumbled Greek feta cheese, and toasted sunflower seeds.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    calories: "390 kcal",
    allergens: ["Eggs", "Dairy"],
    pairing: "Green Matcha Herbal Brew"
  },

  // Waffles & Pancakes
  {
    id: 'm9',
    name: "Ferrero Rocher Chocolate Overload Waffle",
    category: 'waffles',
    price: 340,
    dietary: 'veg',
    isSignature: true,
    isBestseller: true,
    description: "Crispy Belgian waffle crowned with rich Nutella ganache, crushed roasted hazelnuts, Ferrero Rocher, and vanilla bean gelato.",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=800&auto=format&fit=crop",
    calories: "620 kcal",
    allergens: ["Gluten", "Dairy", "Nuts"],
    pairing: "Espresso Con Panna"
  },
  {
    id: 'm10',
    name: "Blueberry & Cream Fluffy Pancake Stack",
    category: 'waffles',
    price: 310,
    dietary: 'veg',
    isSignature: true,
    isBestseller: true,
    description: "Trio of thick, buttermilk American pancakes layered with homemade warm blueberry compote and whipped Madagascar cream.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800&auto=format&fit=crop",
    calories: "540 kcal",
    allergens: ["Gluten", "Dairy", "Eggs"],
    pairing: "Vietnamese Iced Coffee"
  },
  {
    id: 'm11',
    name: "Classic Maple Butter Waffle",
    category: 'waffles',
    price: 230,
    dietary: 'veg',
    description: "Golden crisp exterior with fluffy honeycomb center, topped with salted cultured butter and 100% pure maple syrup.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop",
    calories: "410 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "Cortado"
  },
  {
    id: 'm12',
    name: "Caramelized Banana & Walnut Pancakes",
    category: 'waffles',
    price: 280,
    dietary: 'veg',
    description: "Fluffy pancakes topped with butter-browned bananas, toasted walnuts, and a generous drizzle of house salted caramel.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
    calories: "530 kcal",
    allergens: ["Gluten", "Dairy", "Nuts"],
    pairing: "Hot Mocha with Dark Chocolate"
  },

  // Burgers & Sloppy Joes
  {
    id: 'm13',
    name: "The Koramangala Sloppy Joe",
    category: 'burgers',
    price: 380,
    dietary: 'non-veg',
    isSignature: true,
    isBestseller: true,
    description: "The café's legendary minced lamb / beef bolognese stewed in rich spices, cascading over toasted buttered buns with melted cheddar. Messy perfection!",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    calories: "710 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "Thick Chocolate Malt Shake"
  },
  {
    id: 'm14',
    name: "Smoked Bacon BBQ Double Smash",
    category: 'burgers',
    price: 430,
    dietary: 'non-veg',
    isChefSpecial: true,
    description: "Two crispy-edged smashed beef patties, two layers of yellow cheddar, double crispy bacon strips, and smoky barbecue glaze in a soft potato roll.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop",
    calories: "780 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "Lemon Mint Sparkler"
  },
  {
    id: 'm15',
    name: "Crispy Peri-Peri Paneer & Jalapeño Burger",
    category: 'burgers',
    price: 310,
    dietary: 'veg',
    description: "Crunchy panko-crusted cottage cheese steak tossed in house peri-peri seasoning with garlic mayo, crisp iceberg lettuce and pickled jalapeños.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    calories: "590 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "Peach Iced Tea"
  },

  // Sandwiches
  {
    id: 'm16',
    name: "Roast Chicken & Cranberry Melt",
    category: 'sandwiches',
    price: 320,
    dietary: 'non-veg',
    isBestseller: true,
    description: "Slow-roasted rosemary shredded chicken, sharp cheddar, arugula, and sweet-tart cranberry relish pressed inside rustic sourdough bread.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    calories: "520 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "Koramangala Cold Brew"
  },
  {
    id: 'm17',
    name: "The Ultimate 3-Cheese Sourdough Grill",
    category: 'sandwiches',
    price: 270,
    dietary: 'veg',
    isSignature: true,
    description: "Aged English cheddar, gooey mozzarella, and nutty Emmental melted between artisan sourdough slices brushed with garlic herb butter.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    calories: "560 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "Rustic Tomato Basil Soup"
  },
  {
    id: 'm18',
    name: "Bacon, Lettuce, Avocado & Egg Bagel",
    category: 'sandwiches',
    price: 340,
    dietary: 'non-veg',
    description: "Toasted sesame bagel stuffed with crisp streaky bacon, sliced hass avocado, sunny fried egg, cream cheese and tomato relish.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop",
    calories: "590 kcal",
    allergens: ["Gluten", "Dairy", "Eggs", "Sesame"],
    pairing: "Cold Caramel Macchiato"
  },

  // Pastas & Mains
  {
    id: 'm19',
    name: "Truffle Mushroom & Parmesan Penne",
    category: 'pasta',
    price: 370,
    dietary: 'veg',
    isBestseller: true,
    description: "Al dente penne tossed in a velvety cream sauce with wild button & porcini mushrooms, finished with aromatic truffle oil and shaved aged parmesan.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?q=80&w=800&auto=format&fit=crop",
    calories: "630 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "San Pellegrino Sparkling Citrus"
  },
  {
    id: 'm20',
    name: "Smoked Bacon Carbonara Rigatoni",
    category: 'pasta',
    price: 410,
    dietary: 'non-veg',
    isSignature: true,
    description: "Traditional roman-style preparation with egg yolks, cracked black pepper, crispy smoked bacon lardons, and pecorino romano cheese.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    calories: "690 kcal",
    allergens: ["Gluten", "Dairy", "Eggs"],
    pairing: "Espresso Tonic"
  },

  // Beverages
  {
    id: 'm21',
    name: "The Koramangala Cold Brew (16hr Steep)",
    category: 'beverages',
    price: 190,
    dietary: 'veg',
    isSignature: true,
    isBestseller: true,
    description: "Single-origin Chikmagalur arabica beans steeped for 16 hours in cold mountain water. Incredibly smooth, low acidity with chocolate notes.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
    calories: "10 kcal",
    pairing: "Classic Maple Waffle"
  },
  {
    id: 'm22',
    name: "Belgian Dark Chocolate Sea Salt Hot Cocoa",
    category: 'beverages',
    price: 220,
    dietary: 'veg',
    isSignature: true,
    description: "Melted 70% Belgian callets steamed with whole milk, topped with toasted house marshmallow fluff and Maldon sea salt flakes.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop",
    calories: "340 kcal",
    allergens: ["Dairy"],
    pairing: "Warm Cinnamon Apple Pie"
  },
  {
    id: 'm23',
    name: "Salted Caramel & Peanut Butter Shake",
    category: 'beverages',
    price: 240,
    dietary: 'veg',
    description: "Thick hand-churned vanilla ice cream blended with roasted peanut butter, sea salt caramel swirl, and whipped crown.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
    calories: "480 kcal",
    allergens: ["Dairy", "Nuts"],
    pairing: "The Koramangala Sloppy Joe"
  },

  // Desserts
  {
    id: 'm24',
    name: "Warm Granny Smith Apple Pie Skillet",
    category: 'desserts',
    price: 260,
    dietary: 'veg',
    isBestseller: true,
    description: "Spiced cinnamon and caramel apples baked under a golden flaky butter crust, served straight in a sizzling mini skillet with French vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?q=80&w=800&auto=format&fit=crop",
    calories: "450 kcal",
    allergens: ["Gluten", "Dairy"],
    pairing: "Double Shot Espresso"
  },
  {
    id: 'm25',
    name: "Sizzling Double Fudge Brownie Sundae",
    category: 'desserts',
    price: 280,
    dietary: 'veg',
    isSignature: true,
    description: "Gooey chocolate walnut brownie served on a smoking iron skillet, drenched in dark chocolate fudge and topped with vanilla gelato.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    calories: "580 kcal",
    allergens: ["Gluten", "Dairy", "Nuts"],
    pairing: "Koramangala Cold Brew"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: "Weekend Breakfast Rush",
    category: 'Breakfast',
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop",
    caption: "The Farmer's Breakfast on our sunlit wooden dining tables.",
    span: 'col-span-2'
  },
  {
    id: 'g2',
    title: "Nutella & Waffle Morning",
    category: 'Food',
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=800&auto=format&fit=crop",
    caption: "Crisp golden grids drenched in warm Belgian chocolate.",
    span: 'col-span-1'
  },
  {
    id: 'g3',
    title: "Cozy Brick Ambience",
    category: 'Ambience',
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    caption: "Bookshelves, vintage posters, and the warm hum of conversations.",
    span: 'col-span-1'
  },
  {
    id: 'g4',
    title: "Artisan Pour Over & Latte Art",
    category: 'Coffee',
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    caption: "Freshly roasted South Indian beans crafted into morning fuel.",
    span: 'col-span-1'
  },
  {
    id: 'g5',
    title: "Stack of Fluffy Pancakes",
    category: 'Food',
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800&auto=format&fit=crop",
    caption: "Buttermilk goodness layered with real berry compote.",
    span: 'col-span-1'
  },
  {
    id: 'g6',
    title: "Sunny Koramangala Courtyard",
    category: 'Ambience',
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1200&auto=format&fit=crop",
    caption: "Our tree-shaded outdoor seating area where lazy Sunday mornings begin.",
    span: 'col-span-2'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'r1',
    author: "Ananya Deshmukh",
    rating: 5,
    date: "2 weeks ago",
    text: "The Hole In The Wall is an absolute Bengaluru institution. The Farmer's Breakfast with streaky bacon and the Ferrero waffle are unmatched anywhere in the city. The retro brick walls and nostalgic music make you want to stay for hours!",
    tag: 'Best Breakfast',
    favoriteDish: "Farmer's Breakfast & Ferrero Waffle",
    source: 'Google Reviews'
  },
  {
    id: 'r2',
    author: "Rahul Varma",
    rating: 5,
    date: "1 month ago",
    text: "If you are in Koramangala on a Sunday, this is mandatory. Yes, there's usually a short wait on weekends, but their Sloppy Joe and Cold Brew make every second worthwhile. Super friendly staff who make you feel right at home.",
    tag: 'Weekend Brunch',
    favoriteDish: "Koramangala Sloppy Joe",
    source: 'Google Reviews'
  },
  {
    id: 'r3',
    author: "Tanvi Sharma",
    rating: 5,
    date: "3 weeks ago",
    text: "Ordered the Blueberry Pancake Stack and Eggs Benedict. The pancakes were insanely fluffy and had real fruit compote instead of fake syrups. Truly captures the warmth of slow morning comfort food.",
    tag: 'Legendary Food',
    favoriteDish: "Blueberry & Cream Pancakes",
    source: 'Google Reviews'
  },
  {
    id: 'r4',
    author: "Karthik Subramanian",
    rating: 5,
    date: "2 months ago",
    text: "Been coming here since my college days over 8 years ago, and the quality hasn't dropped an inch. The Meaty Meaty Omelette is gigantic and packed. Cozy, vintage vibe that Bengaluru café culture is famous for.",
    tag: 'Cozy Ambience',
    favoriteDish: "Meaty Meaty Omelette",
    source: 'Google Reviews'
  },
  {
    id: 'r5',
    author: "Sneha Nair",
    rating: 5,
    date: "Just recently",
    text: "Great coffee, lovely reading corners, and the smell of freshly toasted sourdough filling the room. Perfect spot to catch up with friends or have a calm solo morning with a book.",
    tag: 'Coffee & Work',
    favoriteDish: "16hr Cold Brew & Sourdough Melt",
    source: 'Google Reviews'
  }
];

export function getIsOpenStatus(): {
  isOpen: boolean;
  statusText: string;
  badgeClass: string;
  todayHours: string;
  nextTimeInfo: string;
} {
  // Current time in IST
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (3600000 * 5.5));
  
  const currentHour = istTime.getHours();
  const currentMinute = istTime.getMinutes();
  const currentDecimal = currentHour + currentMinute / 60;
  
  const dayIndex = istTime.getDay(); // 0 is Sunday, 6 is Saturday
  const isWeekend = dayIndex === 0 || dayIndex === 6;
  
  const openDecimal = 8.0; // 8:00 AM
  const closeDecimal = isWeekend ? 21.0 : 20.75; // 9:00 PM or 8:45 PM
  
  const todayHoursStr = isWeekend ? "8:00 AM — 9:00 PM" : "8:00 AM — 8:45 PM";

  if (currentDecimal >= openDecimal && currentDecimal < closeDecimal) {
    const minutesToClose = Math.floor((closeDecimal - currentDecimal) * 60);
    if (minutesToClose <= 45) {
      return {
        isOpen: true,
        statusText: `Closing soon (${minutesToClose} mins left)`,
        badgeClass: "bg-amber-100 text-amber-900 border-amber-300",
        todayHours: todayHoursStr,
        nextTimeInfo: `Closes at ${isWeekend ? '9:00 PM' : '8:45 PM'}`
      };
    }
    return {
      isOpen: true,
      statusText: "Open Now",
      badgeClass: "bg-emerald-100 text-emerald-900 border-emerald-300",
      todayHours: todayHoursStr,
      nextTimeInfo: `Serving till ${isWeekend ? '9:00 PM' : '8:45 PM'}`
    };
  } else if (currentDecimal >= openDecimal - 0.75 && currentDecimal < openDecimal) {
    const minutesToOpen = Math.floor((openDecimal - currentDecimal) * 60);
    return {
      isOpen: false,
      statusText: `Opening soon in ${minutesToOpen} mins`,
      badgeClass: "bg-amber-100 text-amber-900 border-amber-300",
      todayHours: todayHoursStr,
      nextTimeInfo: "Opens at 8:00 AM"
    };
  } else {
    return {
      isOpen: false,
      statusText: "Closed now",
      badgeClass: "bg-stone-200 text-stone-700 border-stone-300",
      todayHours: todayHoursStr,
      nextTimeInfo: "Opens tomorrow at 8:00 AM"
    };
  }
}
