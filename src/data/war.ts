import { MentalModel } from '../types/mental-models';
import { generateSlug } from '../utils/slug';

export const war: MentalModel[] = [
  {
    name: 'Seeing the Front',
    category: 'Military & War',
    description: `One of the most valuable military tactics is the habit of "personally seeing the front" before making decisions – not always relying on advisors, maps, and reports, all of which can be either faulty or biased. The Map/Territory model illustrates the problem with not seeing the front, as does the incentive model. Leaders of any organization can generally benefit from seeing the front, as not only does it provide firsthand information, but it also tends to improve the quality of secondhand information.`,
    author: 'models',
    slug: generateSlug('Seeing the Front')
  },
  {
    name: 'Asymmetric Warfare',
    category: 'Military & War',
    description: `The asymmetry model leads to an application in warfare whereby one side seemingly "plays by different rules" than the other side due to circumstance. Generally, this model is applied by an insurgency with limited resources. Unable to out-muscle their opponents, asymmetric fighters use other tactics, as with terrorism creating fear that's disproportionate to their actual destructive ability.`,
    author: 'models',
    slug: generateSlug('Asymmetric Warfare')
  },
  {
    name: 'Two-Front War',
    category: 'Military & War',
    description: `The Second World War was a good example of a two-front war. Once Russia and Germany became enemies, Germany was forced to split its troops and send them to separate fronts, weakening their impact on either front. In practical life, opening a two-front war can often be a useful tactic, as can solving a two-front war or avoiding one, as in the example of an organization tamping down internal discord to focus on its competitors.`,
    author: 'models',
    slug: generateSlug('Two-Front War')
  },
  {
    name: 'Counterinsurgency',
    category: 'Military & War',
    description: `Though asymmetric insurgent warfare can be extremely effective, over time competitors have also developed counterinsurgency strategies. Recently and famously, General David Petraeus of the United States led the development of counterinsurgency plans that involved no additional force but substantial additional gains. Tit-for-tat warfare or competition will often lead to a feedback loop that demands insurgency and counterinsurgency.`,
    author: 'models',
    slug: generateSlug('Counterinsurgency')
  },
  {
    name: 'Mutually Assured Destruction',
    category: 'Military & War',
    description: `Somewhat paradoxically, the stronger two opponents become, the less likely they may be to destroy one another. This process of mutually assured destruction occurs not just in warfare, as with the development of global nuclear warheads, but also in business, as with the avoidance of destructive price wars between competitors. However, in a fat-tailed world, it is also possible that mutually assured destruction scenarios simply make destruction more severe in the event of a mistake (pushing destruction into the "tails" of the distribution).`,
    author: 'models',
    slug: generateSlug('Mutually Assured Destruction')
  }
];