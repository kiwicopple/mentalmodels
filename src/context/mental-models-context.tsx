'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MentalModel, CategoryName, CATEGORIES } from '../types/mental-models';
import { allMentalModels } from '../data';

interface MentalModelsContextType {
  models: MentalModel[];
  cardIndex: number;
  selectedCategories: CategoryName[];
  setCardIndex: (index: number) => void;
  setSelectedCategories: (categories: CategoryName[]) => void;
  shuffledModels: MentalModel[];
  currentModel: MentalModel | null;
  nextModel: () => void;
  previousModel: () => void;
}

const MentalModelsContext = createContext<MentalModelsContextType | undefined>(undefined);

// Fisher-Yates shuffle algorithm
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function MentalModelsProvider({ children }: { children: ReactNode }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<CategoryName[]>(CATEGORIES);
  
  // Filter and shuffle models based on selected categories
  const shuffledModels = React.useMemo(() => {
    const filtered = allMentalModels.filter(model => 
      selectedCategories.includes(model.category as CategoryName)
    );
    return shuffle(filtered);
  }, [selectedCategories]);

  const currentModel = shuffledModels[cardIndex] || null;

  const nextModel = () => {
    const nextIndex = (cardIndex + 1) >= shuffledModels.length ? 0 : cardIndex + 1;
    setCardIndex(nextIndex);
  };

  const previousModel = () => {
    const prevIndex = (cardIndex - 1) < 0 ? (shuffledModels.length - 1) : cardIndex - 1;
    setCardIndex(prevIndex);
  };

  const value: MentalModelsContextType = {
    models: allMentalModels,
    cardIndex,
    selectedCategories,
    setCardIndex,
    setSelectedCategories,
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