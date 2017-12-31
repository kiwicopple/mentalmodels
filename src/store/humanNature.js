const state = {
  models: [
    {
      name: `Trust`,
      category: 'Human Nature & Judgment',
      description: `
Fundamentally, the modern world operates on trust. Familial trust is generally a given (otherwise we’d have a hell of a time surviving), but we also choose to trust chefs, clerks, drivers, factory workers, executives, and many others. A trusting system is one that tends to work most efficiently; the rewards of trust are extremely high.
`
    },
    {
      name: `Bias from Incentives`,
      category: 'Human Nature & Judgment',
      description: `
Highly responsive to incentives, humans have perhaps the most varied and hardest to understand set of incentives in the animal kingdom. This causes us to distort our thinking when it is in our own interest to do so. A wonderful example is a salesman truly believing that his product will improve the lives of its users. It’s not merely convenient that he sells the product; the fact of his selling the product causes a very real bias in his own thinking.
`
    },
    {
      name: `Pavlovian Mere Association`,
      category: 'Human Nature & Judgment',
      description: `
Ivan Pavlov very effectively demonstrated that animals can respond not just to direct incentives but also to associated objects; remember the famous dogs salivating at the ring of a bell. Human beings are much the same and can feel positive and negative emotion towards intangible objects, with the emotion coming from past associations rather than direct effects.
`
    },
    {
      name: `Tendency to Feel Envy & Jealousy`,
      category: 'Human Nature & Judgment',
      description: `
Humans have a tendency to feel envious of those receiving more than they are, and a desire “get what is theirs” in due course. The tendency towards envy is strong enough to drive otherwise irrational behavior, but is as old as humanity itself. Any system ignorant of envy effects will tend to self-immolate over time.
`
    },
    {
      name: `Tendency to Distort Due to Liking/Loving or Disliking/Hating`,
      category: 'Human Nature & Judgment',
      description: `
Based on past association, stereotyping, ideology, genetic influence, or direct experience, humans have a tendency to distort their thinking in favor of people or things that they like and against people or things they dislike. This tendency leads to overrating the things we like and underrating or broadly categorizing things we dislike, often missing crucial nuances in the process.
`
    },
    {
      name: `Denial`,
      category: 'Human Nature & Judgment',
      description: `
Anyone who has been alive long enough realizes that, as the saying goes, “denial is not just a river in Africa.” This is powerfully demonstrated in situations like war or drug abuse, where denial has powerful destructive effects but allows for behavioral inertia. Denying reality can be a coping mechanism, a survival mechanism, or a purposeful tactic.
`
    },
    {
      name: `Availability Heuristic`,
      category: 'Human Nature & Judgment',
      description: `
One of the most useful findings of modern psychology is what Daniel Kahneman calls the Availability Bias or Heuristic: We tend to most easily recall what is salient, important, frequent, and recent. The brain has its own energy-saving and inertial tendencies that we have little control over – the availability heuristic is likely one of them. Having a truly comprehensive memory would be debilitating. Some sub-examples of the availability heuristic include the Anchoring and Sunk Cost Tendencies.
`
    },
    {
      name: `Representativeness Heuristic`,
      category: 'Human Nature & Judgment',
      description: `
The three major psychological findings that fall under Representativeness, also defined by Kahneman and his partner Tversky, are:

a. Failure to Account for Base Rates

An unconscious failure to look at past odds in determining current or future behavior.

b. Tendency to Stereotype

The tendency to broadly generalize and categorize rather than look for specific nuance. Like availability, this is generally a necessary trait for energy-saving in the brain.

c. Failure to See False Conjunctions

Most famously demonstrated by the Linda Test, the same two psychologists showed that students chose more vividly described individuals as more likely to fit into a predefined category than individuals with broader, more inclusive, but less vivid descriptions, even if the vivid example was a mere subset of the more inclusive set. These specific examples are seen as more representative of the category than those with the broader but vaguer descriptions, in violation of logic and probability.
`
    },
    {
      name: `Social Proof (Safety in Numbers)`,
      category: 'Human Nature & Judgment',
      description: `
Human beings are one of many social species, along with bees, ants, and chimps, among many more. We have a DNA-level instinct to seek safety in numbers and will look for social guidance of our behavior. This instinct creates a cohesive sense of cooperation and culture which would not otherwise be possible, but also leads us to do foolish things if our group is doing them as well.
`
    },
    {
      name: `Narrative Instinct`,
      category: 'Human Nature & Judgment',
      description: `
Human beings have been appropriately called “the storytelling animal” because of our instinct to construct and seek meaning in narrative. It’s likely that long before we developed the ability to write or to create objects, we were telling stories and thinking in stories. Nearly all social organizations, from religious institutions to corporations to nation-states, run on constructions of the narrative instinct.
`
    },
    {
      name: `Curiosity Instinct`,
      category: 'Human Nature & Judgment',
      description: `
We like to call other species curious, but we are the most curious of all, an instinct which led us out of the savanna and led us to learn a great deal about the world around us, using that information to create the world in our collective minds. The curiosity instinct leads to unique human behavior and forms of organization like the scientific enterprise. Even before there were direct incentives to innovate, humans innovated out of curiosity.
`
    },
    {
      name: `Language Instinct`,
      category: 'Human Nature & Judgment',
      description: `
The psychologist Steven Pinker calls our DNA-level instinct to learn grammatically constructed language the Language Instinct. The idea that grammatical language is not a simple cultural artifact was first popularized by the linguist Noam Chomsky. As we saw with the narrative instinct, we use these instincts to create shared stories, as well as to gossip, solve problems, and fight, among other things. Grammatically ordered language theoretically carries infinite varying meaning.
`
    },
    {
      name: `First-Conclusion Bias`,
      category: 'Human Nature & Judgment',
      description: `
As Charlie Munger famously pointed out, the mind works a bit like a sperm and egg: the first idea gets in and then the mind shuts. Like many other tendencies, this is probably an energy-saving device. Our tendency to settle on first conclusions leads us to accept many erroneous results and cease asking questions; it can be countered with some simple and useful mental routines.
`
    },
    {
      name: `Tendency to Overgeneralize from Small Samples`,
      category: 'Human Nature & Judgment',
      description: `
It’s important for human beings to generalize; we need not see every instance to understand the general rule, and this works to our advantage. With generalizing, however, comes a subset of errors when we forget about the Law of Large Numbers and act as if it does not exist. We take a small number of instances and create a general category, even if we have no statistically sound basis for the conclusion.
`
    },
    {
      name: `Relative Satisfaction/Misery Tendencies`,
      category: 'Human Nature & Judgment',
      description: `
The envy tendency is probably the most obvious manifestation of the relative satisfaction tendency, but nearly all studies of human happiness show that it is related to the state of the person relative to either their past or their peers, not absolute. These relative tendencies cause us great misery or happiness in a very wide variety of objectively different situations and make us poor predictors of our own behavior and feelings.
`
    },
    {
      name: `Commitment & Consistency Bias`,
      category: 'Human Nature & Judgment',
      description: `
As psychologists have frequently and famously demonstrated, humans are subject to a bias towards keeping their prior commitments and staying consistent with our prior selves when possible. This trait is necessary for social cohesion: people who often change their conclusions and habits are often distrusted. Yet our bias towards staying consistent can become, as one wag put it, a “hobgoblin of foolish minds” – when it is combined with the first-conclusion bias, we end up landing on poor answers and standing pat in the face of great evidence.
`
    },
    {
      name: `Hindsight Bias`,
      category: 'Human Nature & Judgment',
      description: `
Once we know the outcome, it’s nearly impossible to turn back the clock mentally. Our narrative instinct leads us to reason that we knew it all along (whatever “it” is), when in fact we are often simply reasoning post-hoc with information not available to us before the event. The hindsight bias explains why it’s wise to keep a journal of important decisions for an unaltered record and to re-examine our beliefs when we convince ourselves that we knew it all along.
`
    },
    {
      name: `Sensitivity to Fairness`,
      category: 'Human Nature & Judgment',
      description: `
Justice runs deep in our veins. In another illustration of our relative sense of well-being, we are careful arbiters of what is fair. Violations of fairness can be considered grounds for reciprocal action, or at least distrust. Yet fairness itself seems to be a moving target. What is seen as fair and just in one time and place may not be in another. Consider that slavery has been seen as perfectly natural and perfectly unnatural in alternating phases of human existence.
`
    },
    {
      name: `Tendency to Overestimate Consistency of Behavior (Fundamental Attribution Error)`,
      category: 'Human Nature & Judgment',
      description: `
We tend to over-ascribe the behavior of others to their innate traits rather than to situational factors, leading us to overestimate how consistent that behavior will be in the future. In such a situation, predicting behavior seems not very difficult. Of course, in practice this assumption is consistently demonstrated to be wrong, and we are consequently surprised when others do not act in accordance with the “innate” traits we’ve endowed them with.
`
    },
    {
      name: `Influence of Authority`,
      category: 'Human Nature & Judgment',
      description: `
The equally famous Stanford Prison Experiment and Milgram Experiments demonstrated what humans had learned practically many years before: the human bias towards being influenced by authority. In a dominance hierarchy such as ours, we tend to look to the leader for guidance on behavior, especially in situations of stress or uncertainty. Thus, authority figures have a responsibility to act well, whether they like it or not.
`
    },
    {
      name: `Influence of Stress (Including Breaking Points)`,
      category: 'Human Nature & Judgment',
      description: `
Stress causes both mental and physiological responses and tends to amplify the other biases. Almost all human mental biases become worse in the face of stress as the body goes into a fight-or-flight response, relying purely on instinct without the emergency brake of Daniel Kahneman’s “System 2” type of reasoning. Stress causes hasty decisions, immediacy, and a fallback to habit, thus giving rise to the elite soldiers’ motto: “In the thick of battle, you will not rise to the level of your expectations, but fall to the level of your training.”
`
    },
    {
      name: `Survivorship Bias`,
      category: 'Human Nature & Judgment',
      description: `
A major problem with historiography – our interpretation of the past – is that history is famously written by the victors. We do not see what Nassim Taleb calls the “silent grave” – the lottery ticket holders who did not win. Thus, we over-attribute success to things done by the successful agent rather than to randomness or luck, and we often learn false lessons by exclusively studying victors without seeing all of the accompanying losers who acted in the same way but were not lucky enough to succeed.
`
    },
    {
      name: `Tendency to Want to Do Something (Fight/Flight, Intervention, Demonstration of Value, etc.)`,
      category: 'Human Nature & Judgment',
      description: `
We might term this Boredom Syndrome: Most humans have the tendency to need to act, even when their actions are not needed. We also tend to offer solutions even when we do not enough knowledge to solve the problem.
`
    },
    {
      name: `The IKEA`,
      category: 'Human Nature & Judgment',
      description: `
A cognitive bias in which consumers place a disproportionately high value on products they partially created. The name derives from the name of Swedish manufacturer and furniture retailer IKEA, which sells many furniture products that require assembly.

The IKEA effect has been described as follows: "The price is low for IKEA products largely because they take labor out of the equation. With a Phillips screwdriver, an Allen wrench and rubber mallet, IKEA customers can very literally build an entire home's worth of furniture on a very tight budget. But what happens when they do?" They "fall in love with their IKEA creations. Even when there are parts missing and the items are incorrectly built, customers in the IKEA study still loved the fruits of their labors."
`
    }
  ]
}

const humanNature = {
  state
}
export default humanNature
