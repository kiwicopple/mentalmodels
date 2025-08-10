'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { MentalModel, CategoryName, CATEGORIES } from '../types/mental-models';
import { allMentalModels } from '../data';

interface MentalModelsContextType {
  models: MentalModel[];
  cardIndex: number;
  selectedCategories: CategoryName[];
  setCardIndex: (index: number) => void;
  setSelectedCategories: (categories: CategoryName[]) => void;
  updateCategoriesAndURL: (categories: CategoryName[]) => void;
  shuffledModels: MentalModel[];
  currentModel: MentalModel | null;
  nextModel: () => void;
  previousModel: () => void;
}

const MentalModelsContext = createContext<MentalModelsContextType | undefined>(undefined);

// Seeded random number generator for deterministic shuffling
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Fisher-Yates shuffle algorithm with seed
function shuffle<T>(array: T[], seed: number = 12345): T[] {
  const shuffled = [...array];
  let currentSeed = seed;
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    currentSeed++;
    const j = Math.floor(seededRandom(currentSeed) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function MentalModelsProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [cardIndex, setCardIndex] = useState(0);
  
  const [selectedCategories, setSelectedCategories] = useState<CategoryName[]>(CATEGORIES);
  
  // Filter and shuffle models based on selected categories
  const shuffledModels = React.useMemo(() => {
    const filtered = allMentalModels.filter(model => 
      selectedCategories.includes(model.category as CategoryName)
    );
    // Use a deterministic seed based on the categories
    const seed = selectedCategories.reduce((acc, cat) => acc + cat.charCodeAt(0), 0);
    return shuffle(filtered, seed);
  }, [selectedCategories]);

  // Update URL when categories change
  const updateCategoriesAndURL = (newCategories: CategoryName[]) => {
    setSelectedCategories(newCategories);
    
    // Build URL with query params
    const url = new URL(window.location.href);
    url.pathname = '/';
    
    if (newCategories.length === CATEGORIES.length) {
      // All categories selected - remove query params
      url.search = '';
    } else {
      // Some categories selected - add query params
      url.searchParams.set('categories', newCategories.join(','));
    }
    
    // Navigate to homepage with filters (redirect if on model page)
    router.push(url.pathname + url.search);
  };

  // Initialize categories on mount
  useEffect(() => {
    const categoryParams = searchParams.get('categories');
    if (categoryParams) {
      const parsed = categoryParams.split(',').filter(cat => 
        CATEGORIES.includes(cat as CategoryName)
      ) as CategoryName[];
      if (parsed.length > 0) {
        setSelectedCategories(parsed);
      } else {
        setSelectedCategories(CATEGORIES);
      }
    } else {
      setSelectedCategories(CATEGORIES);
    }
  }, [searchParams]);

  // Sync cardIndex with URL
  useEffect(() => {
    // Parse URL to get current model
    const pathParts = pathname.split('/');
    if (pathParts.length === 3) {
      const [, author, slug] = pathParts;
      const modelIndex = shuffledModels.findIndex(
        model => model.author === author && model.slug === slug
      );
      if (modelIndex !== -1 && modelIndex !== cardIndex) {
        setCardIndex(modelIndex);
      }
    }
  }, [pathname, shuffledModels, cardIndex]);

  const currentModel = shuffledModels[cardIndex] || null;

  const nextModel = () => {
    const nextIndex = (cardIndex + 1) >= shuffledModels.length ? 0 : cardIndex + 1;
    const nextModelData = shuffledModels[nextIndex];
    if (nextModelData) {
      router.push(`/${nextModelData.author}/${nextModelData.slug}`);
    }
  };

  const previousModel = () => {
    const prevIndex = (cardIndex - 1) < 0 ? (shuffledModels.length - 1) : cardIndex - 1;
    const prevModelData = shuffledModels[prevIndex];
    if (prevModelData) {
      router.push(`/${prevModelData.author}/${prevModelData.slug}`);
    }
  };

  const value: MentalModelsContextType = {
    models: allMentalModels,
    cardIndex,
    selectedCategories,
    setCardIndex,
    setSelectedCategories,
    updateCategoriesAndURL,
    shuffledModels,
    currentModel,
    nextModel,
    previousModel
  };

  return (
    <MentalModelsContext.Provider value={value}>
      {children}
    </MentalModelsContext.Provider>
  );
}

export function useMentalModels() {
  const context = useContext(MentalModelsContext);
  if (context === undefined) {
    throw new Error('useMentalModels must be used within a MentalModelsProvider');
  }
  return context;
}