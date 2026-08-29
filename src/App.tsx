import React, { useState, useEffect } from 'react';
import { MenuItem } from './types';
import { Navbar } from './components/Navbar';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Hero } from './components/Hero';
import { SignatureFood } from './components/SignatureFood';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { DishModal } from './components/DishModal';
import { MealPlannerDrawer } from './components/MealPlannerDrawer';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitUsSection } from './components/VisitUsSection';
import { Footer } from './components/Footer';
import { CookieBanner, CookiePreferencesModal } from './components/CookieBanner';
import { LegalModal, LegalDocType } from './components/LegalModal';

interface PlannedItem {
  dish: MenuItem;
  quantity: number;
}

export function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [plannerOpen, setPlannerOpen] = useState<boolean>(false);
  const [plannedItems, setPlannedItems] = useState<PlannedItem[]>([]);
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);
  const [cookieModalOpen, setCookieModalOpen] = useState<boolean>(false);

  // Hydrate table plan from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('thitw_table_plan');
      if (saved) {
        setPlannedItems(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  // Save changes to table plan
  const savePlan = (items: PlannedItem[]) => {
    setPlannedItems(items);
    try {
      localStorage.setItem('thitw_table_plan', JSON.stringify(items));
    } catch {
      // Ignore
    }
  };

  const handleAddToPlanner = (dish: MenuItem) => {
    const existingIndex = plannedItems.findIndex((item) => item.dish.id === dish.id);
    if (existingIndex > -1) {
      const updated = [...plannedItems];
      updated[existingIndex].quantity += 1;
      savePlan(updated);
    } else {
      savePlan([...plannedItems, { dish, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    const updated = plannedItems
      .map((item) => {
        if (item.dish.id === dishId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter((item): item is PlannedItem => item !== null);

    savePlan(updated);
  };

  const handleRemoveItem = (dishId: string) => {
    savePlan(plannedItems.filter((item) => item.dish.id !== dishId));
  };

  const handleClearPlanner = () => {
    savePlan([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plannerIds = plannedItems.map((p) => p.dish.id);
  const totalPlannerCount = plannedItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#2A211B] relative flex flex-col">
      {/* Top Navigation */}
      <Navbar
        onOpenMealPlanner={() => setPlannerOpen(true)}
        mealPlannerCount={totalPlannerCount}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onViewLocation={() => scrollToSection('visit-us')}
        />

        {/* 2. Signature Food Highlights */}
        <SignatureFood
          onSelectDish={(dish) => setSelectedDish(dish)}
          onExploreFullMenu={() => scrollToSection('menu')}
          onAddToPlanner={handleAddToPlanner}
          plannerIds={plannerIds}
        />

        {/* 3. Our Story Section */}
        <StorySection onVisitClick={() => scrollToSection('visit-us')} />

        {/* 4. Complete Interactive All-Day Menu */}
        <MenuSection
          onSelectDish={(dish) => setSelectedDish(dish)}
          onAddToPlanner={handleAddToPlanner}
          plannerIds={plannerIds}
        />

        {/* 5. Food & Ambience Photo Gallery */}
        <GallerySection />

        {/* 6. Social Proof & Customer Reviews */}
        <ReviewsSection />

        {/* 7. Location, Hours, Directions & Map */}
        <VisitUsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalDoc(type)}
        onOpenCookiePreferences={() => setCookieModalOpen(true)}
      />

      {/* Sticky Mobile Action Bar (Call, WhatsApp, Directions, Menu) */}
      <StickyMobileBar onMenuClick={() => scrollToSection('menu')} />

      {/* Dish Details Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToPlanner={handleAddToPlanner}
        isPlanned={selectedDish ? plannerIds.includes(selectedDish.id) : false}
      />

      {/* Meal Wishlist / Table Bill Estimator Drawer */}
      <MealPlannerDrawer
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
        items={plannedItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearPlanner}
      />

      {/* Cookie Consent Banner & Preferences Modal */}
      <CookieBanner onOpenPreferences={() => setCookieModalOpen(true)} />
      <CookiePreferencesModal
        isOpen={cookieModalOpen}
        onClose={() => setCookieModalOpen(false)}
      />

      {/* Legal & Policy Modal (Privacy, Cookie, Terms) */}
      <LegalModal
        docType={legalDoc}
        onClose={() => setLegalDoc(null)}
        onOpenCookiePreferences={() => {
          setLegalDoc(null);
          setCookieModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;
