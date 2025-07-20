'use client';

import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MentalModel } from '../types/mental-models';
import { Search, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ModelCardProps {
  model: MentalModel;
}

// Category color mapping
const getCategoryColor = (category: string): string => {
  const colorMap: Record<string, string> = {
    'Logical Fallacies': 'border-cyan-500 bg-cyan-50',
    'General Thinking Concepts': 'border-blue-500 bg-blue-50',
    'Numeracy': 'border-green-500 bg-green-50',
    'Systems': 'border-yellow-500 bg-yellow-50',
    'Physical World': 'border-orange-500 bg-orange-50',
    'The Biological World': 'border-red-500 bg-red-50',
    'Human Nature & Judgment': 'border-purple-500 bg-purple-50',
    'Microeconomics & Strategy': 'border-pink-500 bg-pink-50',
    'Military & War': 'border-gray-500 bg-gray-50'
  };
  return colorMap[category] || 'border-gray-300 bg-gray-50';
};

export function ModelCard({ model }: ModelCardProps) {
  const handleGoogleSearch = () => {
    const searchQuery = encodeURIComponent(model.name);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  return (
    <Card className={`w-full max-w-2xl mx-auto ${getCategoryColor(model.category)}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold">{model.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{model.category}</p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleGoogleSearch}
          className="shrink-0"
        >
          <Search className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm leading-relaxed whitespace-pre-line">
          {model.description}
        </div>
        <div className="pt-4">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/${model.author}/${model.slug}`}>
              <ExternalLink className="h-4 w-4 mr-2" />
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}