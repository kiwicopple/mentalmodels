
const state = {
  models: [
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
    }
  ]
}

const numeracy = {
  state
}
export default numeracy
