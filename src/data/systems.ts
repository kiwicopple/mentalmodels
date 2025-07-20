import { MentalModel } from '../types/mental-models';
import { generateSlug } from '../utils/slug';

export const systems: MentalModel[] = [
  {
    name: 'Scale',
    category: 'Systems',
    description: `One of the most important principles of systems is that they are sensitive to scale. Properties (or behaviors) tend to change when you scale them up or down. In studying complex systems, we must always be roughly quantifying – in orders of magnitude, at least – the scale at which we are observing, analyzing, or predicting the system.`,
    author: 'models',
    slug: generateSlug('Scale')
  },
  {
    name: 'Law of Diminishing Returns',
    category: 'Systems',
    description: `Related to scale, most important real-world results are subject to an eventual decrease of incremental value. A good example would be a poor family: Give them enough money to thrive, and they are no longer poor. But after a certain point, additional money will not improve their lot; there is a clear diminishing return of additional dollars at some roughly quantifiable point. Often, the law of diminishing returns veers into negative territory – i.e., receiving too much money could destroy the poor family.`,
    author: 'models',
    slug: generateSlug('Law of Diminishing Returns')
  },
  {
    name: 'Pareto Principle',
    category: 'Systems',
    description: `Named for Italian polymath Vilfredo Pareto, who noticed that 80% of Italy's land was owned by about 20% of its population, the Pareto Principle states that a small amount of some phenomenon causes a disproportionately large effect. The Pareto Principle is an example of a power-law type of statistical distribution – as distinguished from a traditional bell curve – and is demonstrated in various phenomena ranging from wealth to city populations to important human habits.`,
    author: 'models',
    slug: generateSlug('Pareto Principle')
  },
  {
    name: 'Feedback Loops (and Homeostasis)',
    category: 'Systems',
    description: `All complex systems are subject to positive and negative feedback loops whereby A causes B, which in turn influences A (and C), and so on – with higher-order effects frequently resulting from continual movement of the loop. In a homeostatic system, a change in A is often brought back into line by an opposite change in B to maintain the balance of the system, as with the temperature of the human body or the behavior of an organizational culture. Automatic feedback loops maintain a "static" environment unless and until an outside force changes the loop. A "runaway feedback loop" describes a situation in which the output of a reaction becomes its own catalyst (auto-catalysis).`,
    author: 'models',
    slug: generateSlug('Feedback Loops (and Homeostasis)')
  },
  {
    name: 'Chaos Dynamics (Sensitivity to Initial Conditions)',
    category: 'Systems',
    description: `In a world such as ours, governed by chaos dynamics, small changes (perturbations) in initial conditions have massive downstream effects as near-infinite feedback loops occur; this phenomenon is also called the butterfly effect. This means that some aspects of physical systems (like the weather more than a few days from now) as well as social systems (the behavior of a group of human beings over a long period) are fundamentally unpredictable.`,
    author: 'models',
    slug: generateSlug('Chaos Dynamics (Sensitivity to Initial Conditions)')
  },
  {
    name: 'Preferential Attachment (Cumulative Advantage)',
    category: 'Systems',
    description: `A preferential attachment situation occurs when the current leader is given more of the reward than the laggards, thereby tending to preserve or enhance the status of the leader. A strong network effect is a good example of preferential attachment; a market with 10x more buyers and sellers than the next largest market will tend to have a preferential attachment dynamic.`,
    author: 'models',
    slug: generateSlug('Preferential Attachment (Cumulative Advantage)')
  },
  {
    name: 'Emergence',
    category: 'Systems',
    description: `Higher-level behavior tends to emerge from the interaction of lower-order components. The result is frequently not linear – not a matter of simple addition – but rather non-linear, or exponential. An important resulting property of emergent behavior is that it cannot be predicted from simply studying the component parts.`,
    author: 'models',
    slug: generateSlug('Emergence')
  },
  {
    name: 'Irreducibility',
    category: 'Systems',
    description: `We find that in most systems there are irreducible quantitative properties, such as complexity, minimums, time, and length. Below the irreducible level, the desired result simply does not occur. One cannot get several women pregnant to reduce the amount of time needed to have one child, and one cannot reduce a successfully built automobile to a single part. These results are, to a defined point, irreducible.`,
    author: 'models',
    slug: generateSlug('Irreducibility')
  },
  {
    name: 'Tragedy of the Commons',
    category: 'Systems',
    description: `A concept introduced by the economist and ecologist Garrett Hardin, the Tragedy of the Commons states that in a system where a common resource is shared, with no individual responsible for the wellbeing of the resource, it will tend to be depleted over time. The Tragedy is reducible to incentives: Unless people collaborate, each individual derives more personal benefit than the cost that he or she incurs, and therefore depletes the resource for fear of missing out.`,
    author: 'models',
    slug: generateSlug('Tragedy of the Commons')
  },
  {
    name: "Gresham\'s Law",
    category: 'Systems',
    description: `Gresham's Law, named for the financier Thomas Gresham, states that in a system of circulating currency, forged currency will tend to drive out real currency, as real currency is hoarded and forged currency is spent. We see a similar result in human systems, as with bad behavior driving out good behavior in a crumbling moral system, or bad practices driving out good practices in a crumbling economic system. Generally, regulation and oversight are required to prevent results that follow Gresham's Law.`,
    author: 'models',
    slug: generateSlug("Gresham's Law")
  },
  {
    name: 'Algorithms',
    category: 'Systems',
    description: `While hard to precisely define, an algorithm is generally an automated set of rules or a "blueprint" leading a series of steps or actions resulting in a desired outcome, and often stated in the form of a series of "If → Then" statements. Algorithms are best known for their use in modern computing, but are a feature of biological life as well. For example, human DNA contains an algorithm for building a human being.`,
    author: 'models',
    slug: generateSlug('Algorithms')
  },
  {
    name: 'Fragility – Robustness – Antifragility',
    category: 'Systems',
    description: `Popularized by Nassim Taleb, the sliding scale of fragility, robustness, and antifragility refers to the responsiveness of a system to incremental negative variability. A fragile system or object is one in which additional negative variability has a disproportionately negative impact, as with a coffee cup shattering from a 6-foot fall, but receiving no damage at all (rather than 1/6th of the damage) from a 1-foot fall. A robust system or object tends to be neutral to the additional negativity variability, and of course, an antifragile system benefits: If there were a cup that got stronger when dropped from 6 feet than when dropped from 1 foot, it would be termed antifragile.`,
    author: 'models',
    slug: generateSlug('Fragility – Robustness – Antifragility')
  },
  {
    name: 'Backup Systems/Redundancy',
    category: 'Systems',
    description: `A critical model of the engineering profession is that of backup systems. A good engineer never assumes the perfect reliability of the components of the system. He or she builds in redundancy to protect the integrity of the total system. Without the application of this robustness principle, tangible and intangible systems tend to fail over time.`,
    author: 'models',
    slug: generateSlug('Backup Systems/Redundancy')
  },
  {
    name: 'Margin of Safety',
    category: 'Systems',
    description: `Similarly, engineers have also developed the habit of adding a margin for error into all calculations. In an unknown world, driving a 9,500-pound bus over a bridge built to hold precisely 9,600 pounds is rarely seen as intelligent. Thus, on the whole, few modern bridges ever fail. In practical life outside of physical engineering, we can often profitably give ourselves margins as robust as the bridge system.`,
    author: 'models',
    slug: generateSlug('Margin of Safety')
  },
  {
    name: 'Criticality',
    category: 'Systems',
    description: `A system becomes critical when it is about to jump discretely from one phase to another. The marginal utility of the last unit before the phase change is wildly higher than any unit before it. A frequently cited example is water turning from a liquid to a vapor when heated to a specific temperature. "Critical mass" refers to the mass needed to have the critical event occur, most commonly in a nuclear system.`,
    author: 'models',
    slug: generateSlug('Criticality')
  },
  {
    name: 'Network Effects',
    category: 'Systems',
    description: `A network tends to become more valuable as nodes are added to the network: this is known as the network effect. An easy example is contrasting the development of the electricity system and the telephone system. If only one house has electricity, its inhabitants have gained immense value, but if only one house has a telephone, its inhabitants have gained nothing of use. Only with additional telephones does the phone network gain value. This network effect is widespread in the modern world and creates immense value for organizations and customers alike.`,
    author: 'models',
    slug: generateSlug('Network Effects')
  },
  {
    name: 'Black Swan',
    category: 'Systems',
    description: `Also popularized by Nassim Taleb, a Black Swan is a rare and highly consequential event that is invisible to a given observer ahead of time. It is a result of applied epistemology: If you have seen only white swans, you cannot categorically state that there are no black swans, but the inverse is not true: seeing one black swan is enough for you to state that there are black swans. Black Swan events are necessarily unpredictable to the observer (as Taleb likes to say, Thanksgiving is a Black Swan for the turkey, not the butcher) and thus must be dealt with by addressing the fragility-robustness-antifragility spectrum rather than through better methods of prediction.`,
    author: 'models',
    slug: generateSlug('Black Swan')
  },
  {
    name: 'Via Negativa – Omission / Removal / Avoidance of Harm',
    category: 'Systems',
    description: `In many systems, improvement is at best, or at times only, a result of removing bad elements rather than of adding good elements. This is a credo built into the modern medical profession: First, do no harm. Similarly, if one has a group of children behaving badly, removal of the instigator is often much more effective than any form of punishment meted out to the whole group.`,
    author: 'models',
    slug: generateSlug('Via Negativa – Omission / Removal / Avoidance of Harm')
  },
  {
    name: 'The Lindy Effect',
    category: 'Systems',
    description: `The Lindy Effect refers to the life expectancy of a non-perishable object or idea being related to its current lifespan. If an idea or object has lasted for X number of years, it would be expected (on average) to last another X years. Although a human being who is 90 and lives to 95 does not add 5 years to his or her life expectancy, non-perishables lengthen their life expectancy as they continually survive. A classic text is a prime example: if humanity has been reading Shakespeare's plays for 500 years, it will be expected to read them for another 500.`,
    author: 'models',
    slug: generateSlug('The Lindy Effect')
  },
  {
    name: 'Renormalization Group',
    category: 'Systems',
    description: `The renormalization group technique allows us to think about physical and social systems at different scales. An idea from physics, and a complicated one at that, the application of a renormalization group to social systems allows us to understand why a small number of stubborn individuals can have a disproportionate impact if those around them follow suit on increasingly large scales.`,
    author: 'models',
    slug: generateSlug('Renormalization Group')
  },
  {
    name: 'Spring-loading',
    category: 'Systems',
    description: `A system is spring-loaded if it is coiled in a certain direction, positive or negative. Positively spring-loading systems and relationships is important in a fundamentally unpredictable world to help protect us against negative events. The reverse can be very destructive.`,
    author: 'models',
    slug: generateSlug('Spring-loading')
  },
  {
    name: 'Complex Adaptive Systems',
    category: 'Systems',
    description: `A complex adaptive system, as distinguished from a complex system in general, is one that can understand itself and change based on that understanding. Complex adaptive systems are social systems. The difference is best illustrated by thinking about weather prediction contrasted to stock market prediction. The weather will not change based on an important forecaster's opinion, but the stock market might. Complex adaptive systems are thus fundamentally not predictable.`,
    author: 'models',
    slug: generateSlug('Complex Adaptive Systems')
  }
];