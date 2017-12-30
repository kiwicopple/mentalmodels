import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const getters = {
  modelList: state => state.models,
  categoryList: state => [...new Set(state.models.map(item => item.category))]
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
    },
    {
      name: `Laws of Thermodynamics`,
      category: 'Physical World',
      description: `
The laws of thermodynamics describe energy in a closed system. The laws cannot be escaped and underlie the physical world. They describe a world in which useful energy is constantly being lost, and energy cannot be created or destroyed. Applying their lessons to the social world can be a profitable enterprise.
`
    },
    {
      name: `Reciprocity`,
      category: 'Physical World',
      description: `
If I push on a wall, physics tells me that the wall pushes back with equivalent force. In a biological system, if one individual acts on another, the action will tend to be reciprocated in kind. And of course, human beings act with intense reciprocity demonstrated as well.
`
    },
    {
      name: `Velocity`,
      category: 'Physical World',
      description: `
Velocity is not equivalent to speed; the two are sometimes confused. Velocity is speed plus vector: how fast something gets somewhere. An object that moves two steps forward and then two steps back has moved at a certain speed but shows no velocity. The addition of the vector, that critical distinction, is what we should consider in practical life.
`
    },
    {
      name: `Relativity`,
      category: 'Physical World',
      description: `
Relativity has been used in several contexts in the world of physics, but the important aspect to study is the idea that an observer cannot truly understand a system of which he himself is a part. For example, a man inside an airplane does not feel like he is experiencing movement, but an outside observer can see that movement is occurring. This form of relativity tends to affect social systems in a similar way.
`
    },
    {
      name: `Activation Energy`,
      category: 'Physical World',
      description: `
A fire is not much more than a combination of carbon and oxygen, but the forests and coal mines of the world are not combusting at will because such a chemical reaction requires the input of a critical level of “activation energy” in order to get a reaction started. Two combustible elements alone are not enough.
`
    },
    {
      name: `Catalysts`,
      category: 'Physical World',
      description: `
A catalyst either kick-starts or maintains a chemical reaction, but isn’t itself a reactant. The reaction may slow or stop without the addition of catalysts. Social systems, of course, take on many similar traits, and we can view catalysts in a similar light.
`
    },
    {
      name: `Leverage`,
      category: 'Physical World',
      description: `
Most of the engineering marvels of the world have been accomplished with applied leverage. As famously stated by Archimedes, “Give me a lever long enough and I shall move the world.” With a small amount of input force, we can make a great output force through leverage. Understanding where we can apply this model to the human world can be a source of great success.
`
    },
    {
      name: `Inertia`,
      category: 'Physical World',
      description: `
An object in motion with a certain vector wants to continue moving in that direction unless acted upon. This is a fundamental physical principle of motion; however, individuals, systems, and organizations display the same effect. It allows them to minimize the use of energy, but can cause them to be destroyed or eroded.
`
    },
    {
      name: `Alloying`,
      category: 'Physical World',
      description: `
When we combine various elements, we create new substances. This is no great surprise, but what can be surprising in the alloying process is that 2+2 can equal not 4 but 6 – the alloy can be far stronger than the simple addition of the underlying elements would lead us to believe. This process leads us to engineering great physical objects, but we understand many intangibles in the same way; a combination of the right elements in social systems or even individuals can create a 2+2=6 effect similar to alloying.
`
    },
    {
      name: `Incentives`,
      category: 'The Biological World',
      description: `
All creatures respond to incentives to keep themselves alive. This is the basic insight of biology. Constant incentives will tend to cause a biological entity to have constant behavior, to an extent. Humans are included and are particularly great examples of the incentive-driven nature of biology; however, humans are complicated in that their incentives can be hidden or intangible. The rule of life is to repeat what works and has been rewarded.
`
    },
    {
      name: `Cooperation (Including Symbiosis)`,
      category: 'The Biological World',
      description: `
Competition tends to describe most biological systems, but cooperation at various levels is just as important a dynamic. In fact, the cooperation of a bacterium and a simple cell probably created the first complex cell and all of the life we see around us. Without cooperation, no group survives, and the cooperation of groups gives rise to even more complex versions of organization. Cooperation and competition tend to coexist at multiple levels.
`
    },
    {
      name: `Tendency to Minimize Energy Output (Mental & Physical)`,
      category: 'The Biological World',
      description: `
In a physical world governed by thermodynamics and competition for limited energy and resources, any biological organism that was wasteful with energy would be at a severe disadvantage for survival. Thus, we see in most instances that behavior is governed by a tendency to minimize energy usage when at all possible.
`
    },
    {
      name: `Adaptation`,
      category: 'The Biological World',
      description: `
Species tend to adapt to their surroundings in order to survive, given the combination of their genetics and their environment – an always-unavoidable combination. However, adaptations made in an individual's lifetime are not passed down genetically, as was once thought: Populations of species adapt through the process of evolution by natural selection, as the most-fit examples of the species replicate at an above-average rate.
`
    },
    {
      name: `Evolution by Natural Selection`,
      category: 'The Biological World',
      description: `
Evolution by natural selection was once called “the greatest idea anyone ever had.” In the 19th century, Charles Darwin and Alfred Russel Wallace simultaneous realized that species evolve through random mutation and differential survival rates. If we call human intervention in animal-breeding an example of “artificial selection,” we can call Mother Nature deciding the success or failure of a particular mutation “natural selection.” Those best suited for survival tend to be preserved. But of course, conditions change.
`
    },
    {
      name: `The Red Queen Effect (Co-evolutionary Arms Race)`,
      category: 'The Biological World',
      description: `
The evolution-by-natural-selection model leads to something of an arms race among species competing for limited resources. When one species evolves an advantageous adaptation, a competing species must respond in kind or fail as a species. Standing pat can mean falling behind. This arms race is called the Red Queen Effect for the character in Alice in Wonderland who said, “Now, here, you see, it takes all the running you can do, to keep in the same place.”
`
    },
    {
      name: `Replication`,
      category: 'The Biological World',
      description: `
A fundamental building block of diverse biological life is high-fidelity replication. The fundamental unit of replication seems to be the DNA molecule, which provides a blueprint for the offspring to be built from physical building blocks. There are a variety of replication methods, but most can be lumped into sexual and asexual.
`
    },
    {
      name: `Hierarchical and Other Organizing Instincts`,
      category: 'The Biological World',
      description: `
Most complex biological organisms have an innate feel for how they should organize. While not all of them end up in hierarchical structures, many do, especially in the animal kingdom. Human beings like to think they are outside of this, but they feel the hierarchical instinct as strongly as any other organism.
`
    },
    {
      name: `Self-Preservation Instincts`,
      category: 'The Biological World',
      description: `

`
    },
    {
      name: ``,
      category: 'The Biological World',
      description: `
Without a strong self-preservation instinct in an organism’s DNA, it would tend to disappear over time, thus eliminating that DNA. While cooperation is another important model, the self-preservation instinct is strong in all organisms and can cause violent, erratic, and/or destructive behavior for those around them.
`
    },
    {
      name: `Simple Physiological Reward-Seeking`,
      category: 'The Biological World',
      description: `
All organisms feel pleasure and pain from simple chemical processes in their bodies which respond predictably to the outside world. Reward-seeking is an effective survival-promoting technique on average. However, those same pleasure receptors can be co-opted to cause destructive behavior, as with drug abuse.
`
    },
    {
      name: `Exaptation`,
      category: 'The Biological World',
      description: `
Introduced by the biologist Steven Jay Gould, an exaptation refers to a trait developed for one purpose that is later used for another purpose. This is one way to explain the development of complex biological features like an eyeball; in a more primitive form, it may have been used for something else. Once it was there, and once it developed further, 3D sight became possible.
`
    },
    {
      name: `Extinction`,
      category: 'The Biological World',
      description: `
The inability to survive can cause an extinction event, whereby an entire species ceases to compete and replicate effectively. Once its numbers have dwindled to a critically low level, an extinction can be unavoidable (and predictable) given the inability to effectively replicate in large enough numbers.
`
    },
    {
      name: `Ecosystems`,
      category: 'The Biological World',
      description: `
An ecosystem describes any group of organisms coexisting with the natural world. Most ecosystems show diverse forms of life taking on different approaches to survival, with such pressures leading to varying behavior. Social systems can be seen in the same light as the physical ecosystems and many of the same conclusions can be made.
`
    },
    {
      name: `Niches`,
      category: 'The Biological World',
      description: `
Most organisms find a niche: a method of competing and behaving for survival. Usually, a species will select a niche for which it is best adapted. The danger arises when multiple species begin competing for the same niche, which can cause an extinction – there can be only so many species doing the same thing before limited resources give out.
`
    },
    {
      name: `Dunbar’s Number`,
      category: 'The Biological World',
      description: `
The primatologist Robin Dunbar observed through study that the number of individuals a primate can get to know and trust closely is related to the size of its neocortex. Extrapolating from his study of primates, Dunbar theorized that the Dunbar number for a human being is somewhere in the 100–250 range, which is supported by certain studies of human behavior and social networks.
`
    },
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
      name: `Opportunity Costs`,
      category: 'Microeconomics & Strategy',
      description: `
Doing one thing means not being able to do another. We live in a world of trade-offs, and the concept of opportunity cost rules all. Most aptly summarized as “there is no such thing as a free lunch.”
`
    },
    {
      name: `Creative Destruction`,
      category: 'Microeconomics & Strategy',
      description: `
Coined by economist Joseph Schumpeter, the term “creative destruction” describes the capitalistic process at work in a functioning free-market system. Motivated by personal incentives (including but not limited to financial profit), entrepreneurs will push to best one another in a never-ending game of creative one-upmanship, in the process destroying old ideas and replacing them with newer technology. Beware getting left behind.
`
    },
    {
      name: `Comparative Advantage`,
      category: 'Microeconomics & Strategy',
      description: `
The Scottish economist David Ricardo had an unusual and non-intuitive insight: Two individuals, firms, or countries could benefit from trading with one another even if one of them was better at everything. Comparative advantage is best seen as an applied opportunity cost: If it has the opportunity to trade, an entity gives up free gains in productivity by not focusing on what it does best.
`
    },
    {
      name: `Specialization (Pin Factory)`,
      category: 'Microeconomics & Strategy',
      description: `
Another Scottish economist, Adam Smith, highlighted the advantages gained in a free-market system by specialization. Rather than having a group of workers each producing an entire item from start to finish, Smith explained that it’s usually far more productive to have each of them specialize in one aspect of production. He also cautioned, however, that each worker might not enjoy such a life; this is a trade-off of the specialization model.
`
    },
    {
      name: `Seizing the Middle`,
      category: 'Microeconomics & Strategy',
      description: `
In chess, the winning strategy is usually to seize control of the middle of the board, so as to maximize the potential moves that can be made and control the movement of the maximal number of pieces. The same strategy works profitably in business, as can be demonstrated by John D. Rockefeller’s control of the refinery business in the early days of the oil trade and Microsoft’s control of the operating system in the early days of the software trade.
`
    },
    {
      name: `Trademarks, Patents, and Copyrights`,
      category: 'Microeconomics & Strategy',
      description: `
These three concepts, along with other related ones, protect the creative work produced by enterprising individuals, thus creating additional incentives for creativity and promoting the creative-destruction model of capitalism. Without these protections, information and creative workers have no defense against their work being freely distributed.
`
    },
    {
      name: `Double-Entry Bookkeeping`,
      category: 'Microeconomics & Strategy',
      description: `
One of the marvels of modern capitalism has been the bookkeeping system introduced in Genoa in the 14th century. The double-entry system requires that every entry, such as income, also be entered into another corresponding account. Correct double-entry bookkeeping acts as a check on potential accounting errors and allows for accurate records and thus, more accurate behavior by the owner of a firm.
`
    },
    {
      name: `Utility (Marginal, Diminishing, Increasing)`,
      category: 'Microeconomics & Strategy',
      description: `
The usefulness of additional units of any good tends to vary with scale. Marginal utility allows us to understand the value of one additional unit, and in most practical areas of life, that utility diminishes at some point. On the other hand, in some cases, additional units are subject to a “critical point” where the utility function jumps discretely up or down. As an example, giving water to a thirsty man has diminishing marginal utility with each additional unit, and can eventually kill him with enough units.
`
    },
    {
      name: `Bottlenecks`,
      category: 'Microeconomics & Strategy',
      description: `
A bottleneck describes the place at which a flow (of a tangible or intangible) is stopped, thus holding it back from continuous movement. As with a clogged artery or a blocked drain, a bottleneck in production of any good or service can be small but have a disproportionate impact if it is in the critical path.
`
    },
    {
      name: `Prisoner’s Dilemma`,
      category: 'Microeconomics & Strategy',
      description: `
The Prisoner’s Dilemma is a famous application of game theory in which two prisoners are both better off cooperating with each other, but if one of them cheats, the other is better off cheating. Thus the dilemma. This model shows up in economic life, in war, and in many other areas of practical human life. Though the prisoner’s dilemma theoretically leads to a poor result, in the real world, cooperation is nearly always possible and must be explored.
`
    },
    {
      name: `Bribery`,
      category: 'Microeconomics & Strategy',
      description: `
Often ignored in mainstream economics, the concept of bribery is central to human systems: Given the chance, it is often easier to pay a certain agent to look the other way than to follow the rules. The enforcer of the rules is then neutralized. This principle/agent problem can be seen as a form of arbitrage.
`
    },
    {
      name: `Arbitrage`,
      category: 'Microeconomics & Strategy',
      description: `
Given two markets selling an identical good, an arbitrage exists if the good can profitably be bought in one market and sold at a profit in the other. This model is simple on its face, but can present itself in disguised forms: The only gas station in a 50-mile radius is also an arbitrage as it can buy gasoline and sell it at the desired profit (temporarily) without interference. Nearly all arbitrage situations eventually disappear as they are discovered and exploited.
`
    },
    {
      name: `Supply and Demand`,
      category: 'Microeconomics & Strategy',
      description: `
The basic equation of biological and economic life is one of limited supply of necessary goods and competition for those goods. Just as biological entities compete for limited usable energy, so too do economic entities compete for limited customer wealth and limited demand for their products. The point at which supply and demand for a given good are equal is called an equilibrium; however, in practical life, equilibrium points tend to be dynamic and changing, never static.
`
    },
    {
      name: `Scarcity`,
      category: 'Microeconomics & Strategy',
      description: `
Game theory describes situations of conflict, limited resources, and competition. Given a certain situation and a limited amount of resources and time, what decisions are competitors likely to make, and which should they make? One important note is that traditional game theory may describe humans as more rational than they really are. Game theory is theory, after all.
`
    },
    {
      name: `Seeing the Front`,
      category: 'Military & War',
      description: `
One of the most valuable military tactics is the habit of “personally seeing the front” before making decisions – not always relying on advisors, maps, and reports, all of which can be either faulty or biased. The Map/Territory model illustrates the problem with not seeing the front, as does the incentive model. Leaders of any organization can generally benefit from seeing the front, as not only does it provide firsthand information, but it also tends to improve the quality of secondhand information.
`
    },
    {
      name: `Asymmetric Warfare`,
      category: 'Military & War',
      description: `
The asymmetry model leads to an application in warfare whereby one side seemingly “plays by different rules” than the other side due to circumstance. Generally, this model is applied by an insurgency with limited resources. Unable to out-muscle their opponents, asymmetric fighters use other tactics, as with terrorism creating fear that's disproportionate to their actual destructive ability.
`
    },
    {
      name: `Two-Front War`,
      category: 'Military & War',
      description: `
The Second World War was a good example of a two-front war. Once Russia and Germany became enemies, Germany was forced to split its troops and send them to separate fronts, weakening their impact on either front. In practical life, opening a two-front war can often be a useful tactic, as can solving a two-front war or avoiding one, as in the example of an organization tamping down internal discord to focus on its competitors.
`
    },
    {
      name: `Counterinsurgency`,
      category: 'Military & War',
      description: `
Though asymmetric insurgent warfare can be extremely effective, over time competitors have also developed counterinsurgency strategies. Recently and famously, General David Petraeus of the United States led the development of counterinsurgency plans that involved no additional force but substantial additional gains. Tit-for-tat warfare or competition will often lead to a feedback loop that demands insurgency and counterinsurgency.
`
    },
    {
      name: `Mutually Assured Destruction`,
      category: 'Military & War',
      description: `
Somewhat paradoxically, the stronger two opponents become, the less likely they may be to destroy one another. This process of mutually assured destruction occurs not just in warfare, as with the development of global nuclear warheads, but also in business, as with the avoidance of destructive price wars between competitors. However, in a fat-tailed world, it is also possible that mutually assured destruction scenarios simply make destruction more severe in the event of a mistake (pushing destruction into the “tails” of the distribution).
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
