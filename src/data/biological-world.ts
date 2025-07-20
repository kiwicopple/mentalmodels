import { MentalModel } from '../types/mental-models';
import { generateSlug } from '../utils/slug';

export const biologicalWorld: MentalModel[] = [
  {
    name: 'Incentives',
    category: 'The Biological World',
    description: `All creatures respond to incentives to keep themselves alive. This is the basic insight of biology. Constant incentives will tend to cause a biological entity to have constant behavior, to an extent. Humans are included and are particularly great examples of the incentive-driven nature of biology; however, humans are complicated in that their incentives can be hidden or intangible. The rule of life is to repeat what works and has been rewarded.`,
    author: 'models',
    slug: generateSlug('Incentives')
  },
  {
    name: 'Cooperation (Including Symbiosis)',
    category: 'The Biological World',
    description: `Competition tends to describe most biological systems, but cooperation at various levels is just as important a dynamic. In fact, the cooperation of a bacterium and a simple cell probably created the first complex cell and all of the life we see around us. Without cooperation, no group survives, and the cooperation of groups gives rise to even more complex versions of organization. Cooperation and competition tend to coexist at multiple levels.`,
    author: 'models',
    slug: generateSlug('Cooperation (Including Symbiosis)')
  },
  {
    name: 'Tendency to Minimize Energy Output (Mental & Physical)',
    category: 'The Biological World',
    description: `In a physical world governed by thermodynamics and competition for limited energy and resources, any biological organism that was wasteful with energy would be at a severe disadvantage for survival. Thus, we see in most instances that behavior is governed by a tendency to minimize energy usage when at all possible.`,
    author: 'models',
    slug: generateSlug('Tendency to Minimize Energy Output (Mental & Physical)')
  },
  {
    name: 'Adaptation',
    category: 'The Biological World',
    description: `Species tend to adapt to their surroundings in order to survive, given the combination of their genetics and their environment – an always-unavoidable combination. However, adaptations made in an individual's lifetime are not passed down genetically, as was once thought: Populations of species adapt through the process of evolution by natural selection, as the most-fit examples of the species replicate at an above-average rate.`,
    author: 'models',
    slug: generateSlug('Adaptation')
  },
  {
    name: 'Evolution by Natural Selection',
    category: 'The Biological World',
    description: `Evolution by natural selection was once called "the greatest idea anyone ever had." In the 19th century, Charles Darwin and Alfred Russel Wallace simultaneous realized that species evolve through random mutation and differential survival rates. If we call human intervention in animal-breeding an example of "artificial selection," we can call Mother Nature deciding the success or failure of a particular mutation "natural selection." Those best suited for survival tend to be preserved. But of course, conditions change.`,
    author: 'models',
    slug: generateSlug('Evolution by Natural Selection')
  },
  {
    name: 'The Red Queen Effect (Co-evolutionary Arms Race)',
    category: 'The Biological World',
    description: `The evolution-by-natural-selection model leads to something of an arms race among species competing for limited resources. When one species evolves an advantageous adaptation, a competing species must respond in kind or fail as a species. Standing pat can mean falling behind. This arms race is called the Red Queen Effect for the character in Alice in Wonderland who said, "Now, here, you see, it takes all the running you can do, to keep in the same place."`,
    author: 'models',
    slug: generateSlug('The Red Queen Effect (Co-evolutionary Arms Race)')
  },
  {
    name: 'Replication',
    category: 'The Biological World',
    description: `A fundamental building block of diverse biological life is high-fidelity replication. The fundamental unit of replication seems to be the DNA molecule, which provides a blueprint for the offspring to be built from physical building blocks. There are a variety of replication methods, but most can be lumped into sexual and asexual.`,
    author: 'models',
    slug: generateSlug('Replication')
  },
  {
    name: 'Hierarchical and Other Organizing Instincts',
    category: 'The Biological World',
    description: `Most complex biological organisms have an innate feel for how they should organize. While not all of them end up in hierarchical structures, many do, especially in the animal kingdom. Human beings like to think they are outside of this, but they feel the hierarchical instinct as strongly as any other organism.`,
    author: 'models',
    slug: generateSlug('Hierarchical and Other Organizing Instincts')
  },
  {
    name: 'Self-Preservation Instincts',
    category: 'The Biological World',
    description: `Without a strong self-preservation instinct in an organism's DNA, it would tend to disappear over time, thus eliminating that DNA. While cooperation is another important model, the self-preservation instinct is strong in all organisms and can cause violent, erratic, and/or destructive behavior for those around them.`,
    author: 'models',
    slug: generateSlug('Self-Preservation Instincts')
  },
  {
    name: 'Simple Physiological Reward-Seeking',
    category: 'The Biological World',
    description: `All organisms feel pleasure and pain from simple chemical processes in their bodies which respond predictably to the outside world. Reward-seeking is an effective survival-promoting technique on average. However, those same pleasure receptors can be co-opted to cause destructive behavior, as with drug abuse.`,
    author: 'models',
    slug: generateSlug('Simple Physiological Reward-Seeking')
  },
  {
    name: 'Exaptation',
    category: 'The Biological World',
    description: `Introduced by the biologist Steven Jay Gould, an exaptation refers to a trait developed for one purpose that is later used for another purpose. This is one way to explain the development of complex biological features like an eyeball; in a more primitive form, it may have been used for something else. Once it was there, and once it developed further, 3D sight became possible.`,
    author: 'models',
    slug: generateSlug('Exaptation')
  },
  {
    name: 'Extinction',
    category: 'The Biological World',
    description: `The inability to survive can cause an extinction event, whereby an entire species ceases to compete and replicate effectively. Once its numbers have dwindled to a critically low level, an extinction can be unavoidable (and predictable) given the inability to effectively replicate in large enough numbers.`,
    author: 'models',
    slug: generateSlug('Extinction')
  },
  {
    name: 'Ecosystems',
    category: 'The Biological World',
    description: `An ecosystem describes any group of organisms coexisting with the natural world. Most ecosystems show diverse forms of life taking on different approaches to survival, with such pressures leading to varying behavior. Social systems can be seen in the same light as the physical ecosystems and many of the same conclusions can be made.`,
    author: 'models',
    slug: generateSlug('Ecosystems')
  },
  {
    name: 'Niches',
    category: 'The Biological World',
    description: `Most organisms find a niche: a method of competing and behaving for survival. Usually, a species will select a niche for which it is best adapted. The danger arises when multiple species begin competing for the same niche, which can cause an extinction – there can be only so many species doing the same thing before limited resources give out.`,
    author: 'models',
    slug: generateSlug('Niches')
  },
  {
    name: "Dunbar\'s Number",
    category: 'The Biological World',
    description: `The primatologist Robin Dunbar observed through study that the number of individuals a primate can get to know and trust closely is related to the size of its neocortex. Extrapolating from his study of primates, Dunbar theorized that the Dunbar number for a human being is somewhere in the 100–250 range, which is supported by certain studies of human behavior and social networks.`,
    author: 'models',
    slug: generateSlug("Dunbar's Number")
  }
];