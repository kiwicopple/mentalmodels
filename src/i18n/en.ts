// English translations
export type TranslationKey = keyof typeof enTranslations;

export const enTranslations = {
  // App / branding
  'app.name': 'Mental Models',
  'app.tagline': 'A collection of important mental models and cognitive tools',
  'app.loading': 'Loading...',

  // Sidebar
  'sidebar.toggleAll': 'Toggle All',
  'sidebar.about': 'About',
  'sidebar.about.text.1':
    'Mental models are "core concepts". They are unchanging fundamentals for a particular subject. Learning these concepts will give you a better comprehension of the world and help you make rational decisions.',
  'sidebar.about.text.2':
    'This app is a shuffled list of {count} mental models, grouped into {categories} color-coded categories.',
  'sidebar.about.text.3':
    'Try to do a few each day. Spaced repetition will help you remember. If you are using a mobile you can add this page to your homescreen and use it offline.',
  'sidebar.acknowledgements': 'Acknowledgements',
  'sidebar.acknowledgements.credit': 'Credit for models',
  'sidebar.sourceCode': 'Source Code',
  'sidebar.sourceCode.text':
    'You can find the source code for this app on',
  'sidebar.github': 'Github',
  'sidebar.farnamStreet': 'Farnam Street',
  'sidebar.yourLogicalFallacyIs': 'Your Logical Fallacy Is',

  // Homepage
  'homepage.title': 'Mental Models',
  'homepage.subtitle': 'A collection of important mental models and cognitive tools',

  // Models page
  'models.empty': 'No mental models match your selected categories. Please select at least one category.',

  // Bottom navigation
  'nav.back': 'Back',
  'nav.next': 'Next',

  // Suggestion form
  'suggestion.label': 'Suggest an improved description',
  'suggestion.placeholder': 'Your suggestion...',
  'suggestion.send': 'Send',

  // Categories (used as fallback labels)
  'category.Logical Fallacies': 'Logical Fallacies',
  'category.General Thinking Concepts': 'General Thinking Concepts',
  'category.Numeracy': 'Numeracy',
  'category.Systems': 'Systems',
  'category.Physical World': 'Physical World',
  'category.The Biological World': 'The Biological World',
  'category.Human Nature & Judgment': 'Human Nature & Judgment',
  'category.Microeconomics & Strategy': 'Microeconomics & Strategy',
  'category.Military & War': 'Military & War',
  'category.Management': 'Management',

  // Language toggle
  'lang.english': 'English',
  'lang.swahili': 'Swahili',
};