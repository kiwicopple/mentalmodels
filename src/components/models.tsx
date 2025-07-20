'use client';

import { useMentalModels } from '../context/mental-models-context';
import { ModelCard } from './model-card';
import { SuggestionForm } from './suggestion-form';
import { Card, CardContent } from './ui/card';
import { BottomNavigation } from './bottom-navigation';

export function Models() {
  const { currentModel, nextModel, previousModel, shuffledModels, cardIndex } = useMentalModels();

  if (!currentModel || shuffledModels.length === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">
            No mental models match your selected categories. Please select at least one category.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 max-w-2xl mx-auto w-full space-y-4 px-4">
        <ModelCard model={currentModel} />
        <SuggestionForm model={currentModel} />
      </div>
      <BottomNavigation
        onNext={nextModel}
        onPrevious={previousModel}
        currentIndex={cardIndex}
        totalCount={shuffledModels.length}
      />
    </div>
  );
}