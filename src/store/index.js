import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const getters = {
  modelList: state => state.models
}

const state = {
  models: [
    {
      name: 'Inversion',
      category: 'General Thinking Concepts',
      description: `
Otherwise known as thinking through a situation in reverse or thinking “backwards,” inversion is a problem-solving technique. Often by considering what we want to avoid rather than what we want to get, we come up with better solutions. Inversion works not just in mathematics but in nearly every area of life. As the saying goes, “Just tell me where I’m going to die so I can never go there.”
`
    },
    {
      name: 'Falsification / Confirmation Bias',
      category: 'General Thinking Concepts',
      description: `
What a man wishes, he also believes. Similarly, what we believe is what we choose to see. This is commonly referred to as the confirmation bias. It is a deeply ingrained mental habit, both energy-conserving and comfortable, to look for confirmations of long-held wisdom rather than violations. Yet the scientific process – including hypothesis generation, blind testing when needed, and objective statistical rigor – is designed to root out precisely the opposite, which is why it works so well when followed.

The modern scientific enterprise operates under the principle of falsification: A method is termed scientific if it can be stated in such a way that a certain defined result would cause it to be proved false. Pseudo-knowledge and pseudo-science operate and propagate by being unfalsifiable – as with astrology, we are unable to prove them either correct or incorrect because the conditions under which they would be shown false are never stated.
`
    },
    {
      name: 'Circle of Competence',
      category: 'General Thinking Concepts',
      description: `
An idea introduced by Warren Buffett and Charles Munger in relation to investing: each individual tends to have an area or areas in which they really, truly know their stuff, their area of special competence. Areas not inside that circle are problematic because not only are we ignorant about them, but we may also be ignorant of our own ignorance. Thus, when we're making decisions, it becomes important to define and attend to our special circle, so as to act accordingly.
`
    },
    {
      name: `The Principle of Parsimony (Occam's Razor)`,
      category: 'General Thinking Concepts',
      description: `
Named after the friar William of Ockham, Occam’s Razor is a heuristic by which we select among competing explanations. Ockham stated that we should prefer the simplest explanation with the least moving parts: it is easier to falsify (see: Falsification), easier to understand, and more likely, on average, to be correct. This principle is not an iron law but a tendency and a mindset: If all else is equal, it’s more likely that the simple solution suffices. Of course, we also keep in mind Einstein’s famous idea (even if apocryphal) that “an idea should be made as simple as possible, but no simpler.”
`
    },
    {
      name: `Hanlon's Razor`,
      category: 'General Thinking Concepts',
      description: `
Harder to trace in its origin, Hanlon’s Razor states that we should not attribute to malice that which is more easily explained by stupidity. In a complex world, this principle helps us avoid extreme paranoia and ideology, often very hard to escape from, by not generally assuming that bad results are the fault of a bad actor, although they can be. More likely, a mistake has been made.
`
    },
    {
      name: `Second-Order Thinking`,
      category: 'General Thinking Concepts',
      description: `
In all human systems and most complex systems, the second layer of effects often dwarfs the first layer, yet often goes unconsidered. In other words, we must consider that effects have effects. Second-order thinking is best illustrated by the idea of standing on your tiptoes at a parade: Once one person does it, everyone will do it in order to see, thus negating the first tiptoer. Now, however, the whole parade audience suffers on their toes rather than standing firmly on their whole feet.
`
    },
    {
      name: `The Map Is Not the Territory`,
      category: 'General Thinking Concepts',
      description: `
The map of reality is not reality itself. If any map were to represent its actual territory with perfect fidelity, it would be the size of the territory itself. Thus, no need for a map! This model tells us that there will always be an imperfect relationship between reality and the models we use to represent and understand it. This imperfection is a necessity in order to simplify. It is all we can do to accept this and act accordingly.
`
    },
    {
      name: `Thought Experiments`,
      category: 'General Thinking Concepts',
      description: `
A technique popularized by Einstein, the thought experiment is a way to logically carry out a test in one’s own head that would be very difficult or impossible to perform in real life. With the thought experiment as a tool, we can solve problems with intuition and logic that could not be demonstrated physically, as with Einstein imagining himself traveling on a beam of light in order to solve the problem of relativity.
`
    },
    {
      name: `Mr. Market`,
      category: 'General Thinking Concepts',
      description: `
Mr. Market was introduced by the investor Benjamin Graham in his seminal book The Intelligent Investor to represent the vicissitudes of the financial markets. As Graham explains, the markets are a bit like a moody neighbor, sometimes waking up happy and sometimes waking up sad – your job as an investor is to take advantage of him in his bad moods and sell to him in his good moods. This attitude is contrasted to an efficient-market hypothesis in which Mr. Market always wakes up in the middle of the bed, never feeling overly strong in either direction.
`
    },
    {
      name: `Probabilistic Thinking (See also: Numeracy/Bayesian Updating)`,
      category: 'General Thinking Concepts',
      description: `
The unknowable human world is dominated by probabilistic outcomes, as distinguished from deterministic ones. Although we cannot predict the future with great certainty, we are wise to ascribe odds to more and less probable events. We do this every day unconsciously as we cross the street and ascribe low, yet not negligible, odds of being hit by a car.
`
    },
    {
      name: `Default Status`,
      category: 'General Thinking Concepts',
      description: `
The USCB ecologist/economist Garrett Hardin once said that “The scientific mind is not closed: it is merely well-guarded by a conscientious and seldom sleeping gatekeeper.” The way it does that is with the concept of the default status: The “resting position” of common sense, whereby the burden of proof falls on assertions to the contrary. Given the problem of opportunity costs and limited time and energy, a default status is nearly always necessary to avoid wasting time. Examples include the laws of thermodynamics, the law of natural selection, and the incentive-caused bias.
`
    },
    {
      name: `Permutations and Combinations`,
      category: 'Numeracy',
      description: `
The mathematics of permutations and combinations leads us to understand the practical probabilities of the world around us, how things can be ordered, and how we should think about things.
`
    },
    {
      name: `Algebraic Equivalence`,
      category: 'Numeracy',
      description: `
The introduction of algebra allowed us to demonstrate mathematically and abstractly that two seemingly different things could be the same. By manipulating symbols, we can demonstrate equivalence or inequivalence, the use of which led humanity to untold engineering and technical abilities. Knowing at least the basics of algebra can allow us to understand a variety of important results.
`
    },
    {
      name: `Randomness`,
      category: 'Numeracy',
      description: `
Though the human brain has trouble comprehending it, much of the world is composed of random, non-sequential, non-ordered events. We are “fooled” by random effects when we attribute causality to things that are actually outside of our control. If we don’t course-correct for this fooled-by-randomness effect – our faulty sense of pattern-seeking – we will tend to see things as being more predictable than they are and act accordingly.
`
    },
    {
      name: `Stochastic Processes (Poisson, Markov, Random Walk)`,
      category: 'Numeracy',
      description: `
A stochastic process is a random statistical process and encompasses a wide variety of processes in which the movement of an individual variable can be impossible to predict but can be thought through probabilistically. The wide variety of stochastic methods helps us describe systems of variables through probabilities without necessarily being able to determine the position of any individual variable over time. For example, it’s not possible to predict stock prices on a day-to-day basis, but we can describe the probability of various distributions of their movements over time. Obviously, it is much more likely that the stock market (a stochastic process) will be up or down 1% in a day than up or down 10%, even though we can’t predict what tomorrow will bring.
`
    },
    {
      name: `Compounding`,
      category: 'Numeracy',
      description: `
It’s been said that Einstein called compounding a wonder of the world. He probably didn’t, but it is a wonder. Compounding is the process by which we add interest to a fixed sum, which then earns interest on the previous sum and the newly added interest, and then earns interest on that amount, and so on ad infinitum. It is an exponential effect, rather than a linear, or additive, effect. Money is not the only thing that compounds; ideas and relationships do as well. In tangible realms, compounding is always subject to physical limits and diminishing returns; intangibles can compound more freely. Compounding also leads to the time value of money, which underlies all of modern finance.
`
    },
    {
      name: `Multiplying by Zero`,
      category: 'Numeracy',
      description: `
Any reasonably educated person knows that any number multiplied by zero, no matter how large the number, is still zero. This is true in human systems as well as mathematical ones. In some systems, a failure in one area can negate great effort in all other areas. As simple multiplication would show, fixing the “zero” often has a much greater effect than does trying to enlarge the other areas.
`
    },
    {
      name: `Churn`,
      category: 'Numeracy',
      description: `
Insurance companies and subscription services are well aware of the concept of churn – every year, a certain number of customers are lost and must be replaced. Standing still is the equivalent of losing, as seen in the model called the “Red Queen Effect.” Churn is present in many business and human systems: A constant figure is periodically lost and must be replaced before any new figures are added over the top.
`
    },
    {
      name: `Law of Large Numbers`,
      category: 'Numeracy',
      description: `
One of the fundamental underlying assumptions of probability is that as more instances of an event occur, the actual results will converge on the expected ones. For example, if I know that the average man is 5 feet 10 inches tall, I am far more likely to get an average of 5′10″ by selecting 500 men at random than 5 men at random. The opposite of this model is the law of small numbers, which states that small samples can and should be looked at with great skepticism.
`
    },
    {
      name: `Bell Curve/Normal Distribution`,
      category: 'Numeracy',
      description: `
The normal distribution is a statistical process that leads to the well-known graphical representation of a bell curve, with a meaningful central “average” and increasingly rare standard deviations from that average when correctly sampled. (The so-called “central limit” theorem.) Well-known examples include human height and weight, but it’s just as important to note that many common processes, especially in non-tangible systems like social systems, do not follow the normal distribution.
`
    },
    {
      name: `Power Laws`,
      category: 'Numeracy',
      description: `
One of the most common processes that does not fit the normal distribution is that of a power law, whereby one quantity varies with another’s exponent rather than linearly. For example, the Richter scale describes the power of earthquakes on a power-law distribution scale: an 8 is 10x more destructive than a 7, and a 9 is 10x more destructive than an 8. The central limit theorem does not apply and there is thus no “average” earthquake. This is true of all power-law distributions.
`
    },
    {
      name: `Fat-Tailed Processes (Extremistan)`,
      category: 'Numeracy',
      description: `
A process can often look like a normal distribution but have a large “tail” – meaning that seemingly outlier events are far more likely than they are in an actual normal distribution. A strategy or process may be far more risky than a normal distribution is capable of describing if the fat tail is on the negative side, or far more profitable if the fat tail is on the positive side. Much of the human social world is said to be fat-tailed rather than normally distributed.
`
    },
    {
      name: `Bayesian Updating`,
      category: 'Numeracy',
      description: `
The Bayesian method is a method of thought (named for Thomas Bayes) whereby one takes into account all prior relevant probabilities and then incrementally updates them as newer information arrives. This method is especially productive given the fundamentally non-deterministic world we experience: We must use prior odds and new information in combination to arrive at our best decisions. This is not necessarily our intuitive decision-making engine.
`
    },
    {
      name: `Regression to the Mean`,
      category: 'Numeracy',
      description: `
In a normally distributed system, long deviations from the average will tend to return to that average with an increasing number of observations: the so-called Law of Large Numbers. We are often fooled by regression to the mean, as with a sick patient improving spontaneously around the same time they begin taking an herbal remedy, or a poorly performing sports team going on a winning streak. We must be careful not to confuse statistically likely events with causal ones.
`
    },
    {
      name: `Order of Magnitude`,
      category: 'Numeracy',
      description: `
In many, perhaps most, systems, quantitative description down to a precise figure is either impossible or useless (or both). For example, estimating the distance between our galaxy and the next one over is a matter of knowing not the precise number of miles, but how many zeroes are after the 1. Is the distance about 1 million miles or about 1 billion? This thought habit can help us escape useless precision.
`
    },
    {
      name: `Scale`,
      category: 'Systems',
      description: `

`
    },
    {
      name: ``,
      category: 'Systems',
      description: `
One of the most important principles of systems is that they are sensitive to scale. Properties (or behaviors) tend to change when you scale them up or down. In studying complex systems, we must always be roughly quantifying – in orders of magnitude, at least – the scale at which we are observing, analyzing, or predicting the system.
`
    },
    {
      name: `Law of Diminishing Returns`,
      category: 'Systems',
      description: `
Related to scale, most important real-world results are subject to an eventual decrease of incremental value. A good example would be a poor family: Give them enough money to thrive, and they are no longer poor. But after a certain point, additional money will not improve their lot; there is a clear diminishing return of additional dollars at some roughly quantifiable point. Often, the law of diminishing returns veers into negative territory – i.e., receiving too much money could destroy the poor family.
`
    },
    {
      name: `Pareto Principle`,
      category: 'Systems',
      description: `
Named for Italian polymath Vilfredo Pareto, who noticed that 80% of Italy’s land was owned by about 20% of its population, the Pareto Principle states that a small amount of some phenomenon causes a disproportionately large effect. The Pareto Principle is an example of a power-law type of statistical distribution – as distinguished from a traditional bell curve – and is demonstrated in various phenomena ranging from wealth to city populations to important human habits.
`
    },
    {
      name: `Feedback Loops (and Homeostasis)`,
      category: 'Systems',
      description: `
All complex systems are subject to positive and negative feedback loops whereby A causes B, which in turn influences A (and C), and so on – with higher-order effects frequently resulting from continual movement of the loop. In a homeostatic system, a change in A is often brought back into line by an opposite change in B to maintain the balance of the system, as with the temperature of the human body or the behavior of an organizational culture. Automatic feedback loops maintain a “static” environment unless and until an outside force changes the loop. A “runaway feedback loop” describes a situation in which the output of a reaction becomes its own catalyst (auto-catalysis).
`
    },
    {
      name: `Chaos Dynamics (Sensitivity to Initial Conditions)`,
      category: 'Systems',
      description: `
In a world such as ours, governed by chaos dynamics, small changes (perturbations) in initial conditions have massive downstream effects as near-infinite feedback loops occur; this phenomenon is also called the butterfly effect. This means that some aspects of physical systems (like the weather more than a few days from now) as well as social systems (the behavior of a group of human beings over a long period) are fundamentally unpredictable.
`
    },
    {
      name: `Preferential Attachment (Cumulative Advantage)`,
      category: 'Systems',
      description: `
A preferential attachment situation occurs when the current leader is given more of the reward than the laggards, thereby tending to preserve or enhance the status of the leader. A strong network effect is a good example of preferential attachment; a market with 10x more buyers and sellers than the next largest market will tend to have a preferential attachment dynamic.
`
    },
    {
      name: `Emergence`,
      category: 'Systems',
      description: `
Higher-level behavior tends to emerge from the interaction of lower-order components. The result is frequently not linear – not a matter of simple addition – but rather non-linear, or exponential. An important resulting property of emergent behavior is that it cannot be predicted from simply studying the component parts.
`
    },
    {
      name: `Irreducibility`,
      category: 'Systems',
      description: `
We find that in most systems there are irreducible quantitative properties, such as complexity, minimums, time, and length. Below the irreducible level, the desired result simply does not occur. One cannot get several women pregnant to reduce the amount of time needed to have one child, and one cannot reduce a successfully built automobile to a single part. These results are, to a defined point, irreducible.
`
    },
    {
      name: `Tragedy of the Commons`,
      category: 'Systems',
      description: `
A concept introduced by the economist and ecologist Garrett Hardin, the Tragedy of the Commons states that in a system where a common resource is shared, with no individual responsible for the wellbeing of the resource, it will tend to be depleted over time. The Tragedy is reducible to incentives: Unless people collaborate, each individual derives more personal benefit than the cost that he or she incurs, and therefore depletes the resource for fear of missing out.
`
    },
    {
      name: `Gresham’s Law`,
      category: 'Systems',
      description: `
Gresham’s Law, named for the financier Thomas Gresham, states that in a system of circulating currency, forged currency will tend to drive out real currency, as real currency is hoarded and forged currency is spent. We see a similar result in human systems, as with bad behavior driving out good behavior in a crumbling moral system, or bad practices driving out good practices in a crumbling economic system. Generally, regulation and oversight are required to prevent results that follow Gresham’s Law.
`
    },
    {
      name: `Algorithms`,
      category: 'Systems',
      description: `
While hard to precisely define, an algorithm is generally an automated set of rules or a “blueprint” leading a series of steps or actions resulting in a desired outcome, and often stated in the form of a series of “If → Then” statements. Algorithms are best known for their use in modern computing, but are a feature of biological life as well. For example, human DNA contains an algorithm for building a human being.
`
    },
    {
      name: `Fragility – Robustness – Antifragility`,
      category: 'Systems',
      description: `
Popularized by Nassim Taleb, the sliding scale of fragility, robustness, and antifragility refers to the responsiveness of a system to incremental negative variability. A fragile system or object is one in which additional negative variability has a disproportionately negative impact, as with a coffee cup shattering from a 6-foot fall, but receiving no damage at all (rather than 1/6th of the damage) from a 1-foot fall. A robust system or object tends to be neutral to the additional negativity variability, and of course, an antifragile system benefits: If there were a cup that got stronger when dropped from 6 feet than when dropped from 1 foot, it would be termed antifragile.
`
    },
    {
      name: `Backup Systems/Redundancy`,
      category: 'Systems',
      description: `
A critical model of the engineering profession is that of backup systems. A good engineer never assumes the perfect reliability of the components of the system. He or she builds in redundancy to protect the integrity of the total system. Without the application of this robustness principle, tangible and intangible systems tend to fail over time.
`
    },
    {
      name: `Margin of Safety`,
      category: 'Systems',
      description: `
Similarly, engineers have also developed the habit of adding a margin for error into all calculations. In an unknown world, driving a 9,500-pound bus over a bridge built to hold precisely 9,600 pounds is rarely seen as intelligent. Thus, on the whole, few modern bridges ever fail. In practical life outside of physical engineering, we can often profitably give ourselves margins as robust as the bridge system.
`
    },
    {
      name: `Criticality`,
      category: 'Systems',
      description: `
A system becomes critical when it is about to jump discretely from one phase to another. The marginal utility of the last unit before the phase change is wildly higher than any unit before it. A frequently cited example is water turning from a liquid to a vapor when heated to a specific temperature. “Critical mass” refers to the mass needed to have the critical event occur, most commonly in a nuclear system.
`
    },
    {
      name: `Network Effects`,
      category: 'Systems',
      description: `
A network tends to become more valuable as nodes are added to the network: this is known as the network effect. An easy example is contrasting the development of the electricity system and the telephone system. If only one house has electricity, its inhabitants have gained immense value, but if only one house has a telephone, its inhabitants have gained nothing of use. Only with additional telephones does the phone network gain value. This network effect is widespread in the modern world and creates immense value for organizations and customers alike.
`
    },
    {
      name: `Black Swan`,
      category: 'Systems',
      description: `
Also popularized by Nassim Taleb, a Black Swan is a rare and highly consequential event that is invisible to a given observer ahead of time. It is a result of applied epistemology: If you have seen only white swans, you cannot categorically state that there are no black swans, but the inverse is not true: seeing one black swan is enough for you to state that there are black swans. Black Swan events are necessarily unpredictable to the observer (as Taleb likes to say, Thanksgiving is a Black Swan for the turkey, not the butcher) and thus must be dealt with by addressing the fragility-robustness-antifragility spectrum rather than through better methods of prediction.
`
    },
    {
      name: `Via Negativa – Omission / Removal / Avoidance of Harm`,
      category: 'Systems',
      description: `
In many systems, improvement is at best, or at times only, a result of removing bad elements rather than of adding good elements. This is a credo built into the modern medical profession: First, do no harm. Similarly, if one has a group of children behaving badly, removal of the instigator is often much more effective than any form of punishment meted out to the whole group.
`
    },
    {
      name: `The Lindy Effect`,
      category: 'Systems',
      description: `
The Lindy Effect refers to the life expectancy of a non-perishable object or idea being related to its current lifespan. If an idea or object has lasted for X number of years, it would be expected (on average) to last another X years. Although a human being who is 90 and lives to 95 does not add 5 years to his or her life expectancy, non-perishables lengthen their life expectancy as they continually survive. A classic text is a prime example: if humanity has been reading Shakespeare’s plays for 500 years, it will be expected to read them for another 500.
`
    },
    {
      name: `Renormalization Group`,
      category: 'Systems',
      description: `
The renormalization group technique allows us to think about physical and social systems at different scales. An idea from physics, and a complicated one at that, the application of a renormalization group to social systems allows us to understand why a small number of stubborn individuals can have a disproportionate impact if those around them follow suit on increasingly large scales.
`
    },
    {
      name: `Spring-loading`,
      category: 'Systems',
      description: `
A system is spring-loaded if it is coiled in a certain direction, positive or negative. Positively spring-loading systems and relationships is important in a fundamentally unpredictable world to help protect us against negative events. The reverse can be very destructive.
`
    },
    {
      name: `Complex Adaptive Systems`,
      category: 'Systems',
      description: `
A complex adaptive system, as distinguished from a complex system in general, is one that can understand itself and change based on that understanding. Complex adaptive systems are social systems. The difference is best illustrated by thinking about weather prediction contrasted to stock market prediction. The weather will not change based on an important forecaster’s opinion, but the stock market might. Complex adaptive systems are thus fundamentally not predictable.
`
    }
  ]
}

const mutations = {
}

const actions = {
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
