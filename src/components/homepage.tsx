'use client';

import { allMentalModels } from '../data';
import { useMentalModels } from '../context/mental-models-context';
import { useLanguage } from '../context/language-context';
import { localizeModel } from '../lib/localize';
import Link from 'next/link';

export function Homepage() {
  const { selectedCategories } = useMentalModels();
  const { language, t } = useLanguage();

  // Group models by category, filtered by selected categories
  const modelsByCategory = selectedCategories.reduce((acc, category) => {
    acc[category] = allMentalModels.filter(model => model.category === category);
    return acc;
  }, {} as Record<string, typeof allMentalModels>);

  // Filter out categories with no models
  const categoriesWithModels = selectedCategories.filter(category => {
    const models = modelsByCategory[category];
    return models && models.length > 0;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('homepage.title')}</h1>
        <p className="text-muted-foreground">
          {t('homepage.subtitle')}
        </p>
      </div>

      <div className="space-y-8">
        {categoriesWithModels.map(category => {
          const models = modelsByCategory[category];

          return (
            <div key={category} className="space-y-3">
              <h2 className="text-xl font-semibold border-b pb-2">
                {t(`category.${category}`)}
              </h2>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {models.map((model, index) => {
                  const localized = localizeModel(model, language);
                  return (
                    <Link
                      key={`${category}-${index}-${model.slug}`}
                      href={`/${model.author}/${model.slug}`}
                      className="block p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="font-medium text-sm">
                        {localized.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
