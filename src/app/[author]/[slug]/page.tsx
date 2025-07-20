import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allMentalModels } from '@/data';
import { MentalModel } from '@/types/mental-models';

interface PageProps {
  params: Promise<{
    author: string;
    slug: string;
  }>;
}

async function getMentalModel(author: string, slug: string): Promise<MentalModel | undefined> {
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full mb-4">
              {model.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {model.name}
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {model.description}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(model.name + ' mental model')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search Google
              </a>
              
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back to All Models
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}