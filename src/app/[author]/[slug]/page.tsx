import { notFound } from 'next/navigation';
import { allMentalModels } from '@/data';
import { ModelPageClient } from './page-client';

interface PageProps {
  params: Promise<{
    author: string;
    slug: string;
  }>;
}

async function getMentalModel(author: string, slug: string) {
  return allMentalModels.find(
    model => model.author === author && model.slug === slug
  );
}

export async function generateStaticParams() {
  return allMentalModels.map((model) => ({
    author: model.author,
    slug: model.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { author, slug } = await params;
  const model = await getMentalModel(author, slug);
  
  if (!model) {
    return {
      title: 'Mental Model Not Found',
    };
  }

  return {
    title: `${model.name} | Mental Models`,
    description: model.description.slice(0, 160),
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { author, slug } = await params;
  const model = await getMentalModel(author, slug);

  if (!model) {
    notFound();
  }

  return <ModelPageClient />;
}