export interface MentalModel {
  name: string;
  category: string;
  description: string;
  author: string;
  slug: string;
}

export type CategoryName = 
  | 'Logical Fallacies'
  | 'General Thinking Concepts'
  | 'Numeracy'
  | 'Systems'
  | 'Physical World'
  | 'The Biological World'
  | 'Human Nature & Judgment'
  | 'Microeconomics & Strategy'
  | 'Military & War'
  | 'Management';

export const CATEGORIES: CategoryName[] = [
  'Logical Fallacies',
  'General Thinking Concepts',
  'Numeracy',
  'Systems',
  'Physical World',
  'The Biological World',
  'Human Nature & Judgment',
  'Microeconomics & Strategy',
  'Military & War',
  'Management'
];