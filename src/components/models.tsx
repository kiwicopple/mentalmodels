'use client';

import { useMentalModels } from '../context/mental-models-context';
import { ModelCard } from './model-card';
import { SuggestionForm } from './suggestion-form';
import { Card, CardContent } from './ui/card';

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
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <p className="text-sm text-muted-foreground text-center">
        {cardIndex + 1} / {shuffledModels.length}
      </p>
      <ModelCard
        model={currentModel}
        onNext={nextModel}
        onPrevious={previousModel}
      />
      <SuggestionForm model={currentModel} />
    </div>
  );
}