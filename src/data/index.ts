import { MentalModel } from '../types/mental-models';
import { logicalFallacies } from './logical-fallacies';
import { biologicalWorld } from './biological-world';
import { generalThinking } from './general-thinking';
import { humanNature } from './human-nature';
import { microeconomics } from './microeconomics';
import { numeracy } from './numeracy';
import { physicalWorld } from './physical-world';
import { systems } from './systems';
import { war } from './war';

export const allMentalModels: MentalModel[] = [
  ...logicalFallacies,
  ...biologicalWorld,
  ...generalThinking,
  ...humanNature,
  ...microeconomics,
  ...numeracy,
  ...physicalWorld,
  ...systems,
  ...war
];

export {
  logicalFallacies,
  biologicalWorld,
  generalThinking,
  humanNature,
  microeconomics,
  numeracy,
  physicalWorld,
  systems,
  war
};