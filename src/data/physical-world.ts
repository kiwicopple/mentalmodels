import { MentalModel } from '../types/mental-models';
import { generateSlug } from '../utils/slug';

export const physicalWorld: MentalModel[] = [
  {
    name: 'Laws of Thermodynamics',
    category: 'Physical World',
    description: `The laws of thermodynamics describe energy in a closed system. The laws cannot be escaped and underlie the physical world. They describe a world in which useful energy is constantly being lost, and energy cannot be created or destroyed. Applying their lessons to the social world can be a profitable enterprise.`,
    author: 'models',
    slug: generateSlug('Laws of Thermodynamics')
  },
  {
    name: 'Reciprocity',
    category: 'Physical World',
    description: `If I push on a wall, physics tells me that the wall pushes back with equivalent force. In a biological system, if one individual acts on another, the action will tend to be reciprocated in kind. And of course, human beings act with intense reciprocity demonstrated as well.`,
    author: 'models',
    slug: generateSlug('Reciprocity')
  },
  {
    name: 'Velocity',
    category: 'Physical World',
    description: `Velocity is not equivalent to speed; the two are sometimes confused. Velocity is speed plus vector: how fast something gets somewhere. An object that moves two steps forward and then two steps back has moved at a certain speed but shows no velocity. The addition of the vector, that critical distinction, is what we should consider in practical life.`,
    author: 'models',
    slug: generateSlug('Velocity')
  },
  {
    name: 'Relativity',
    category: 'Physical World',
    description: `Relativity has been used in several contexts in the world of physics, but the important aspect to study is the idea that an observer cannot truly understand a system of which he himself is a part. For example, a man inside an airplane does not feel like he is experiencing movement, but an outside observer can see that movement is occurring. This form of relativity tends to affect social systems in a similar way.`,
    author: 'models',
    slug: generateSlug('Relativity')
  },
  {
    name: 'Activation Energy',
    category: 'Physical World',
    description: `A fire is not much more than a combination of carbon and oxygen, but the forests and coal mines of the world are not combusting at will because such a chemical reaction requires the input of a critical level of "activation energy" in order to get a reaction started. Two combustible elements alone are not enough.`,
    author: 'models',
    slug: generateSlug('Activation Energy')
  },
  {
    name: 'Catalysts',
    category: 'Physical World',
    description: `A catalyst either kick-starts or maintains a chemical reaction, but isn't itself a reactant. The reaction may slow or stop without the addition of catalysts. Social systems, of course, take on many similar traits, and we can view catalysts in a similar light.`,
    author: 'models',
    slug: generateSlug('Catalysts')
  },
  {
    name: 'Leverage',
    category: 'Physical World',
    description: `Most of the engineering marvels of the world have been accomplished with applied leverage. As famously stated by Archimedes, "Give me a lever long enough and I shall move the world." With a small amount of input force, we can make a great output force through leverage. Understanding where we can apply this model to the human world can be a source of great success.`,
    author: 'models',
    slug: generateSlug('Leverage')
  },
  {
    name: 'Inertia',
    category: 'Physical World',
    description: `An object in motion with a certain vector wants to continue moving in that direction unless acted upon. This is a fundamental physical principle of motion; however, individuals, systems, and organizations display the same effect. It allows them to minimize the use of energy, but can cause them to be destroyed or eroded.`,
    author: 'models',
    slug: generateSlug('Inertia')
  },
  {
    name: 'Alloying',
    category: 'Physical World',
    description: `When we combine various elements, we create new substances. This is no great surprise, but what can be surprising in the alloying process is that 2+2 can equal not 4 but 6 – the alloy can be far stronger than the simple addition of the underlying elements would lead us to believe. This process leads us to engineering great physical objects, but we understand many intangibles in the same way; a combination of the right elements in social systems or even individuals can create a 2+2=6 effect similar to alloying.`,
    author: 'models',
    slug: generateSlug('Alloying')
  }
];