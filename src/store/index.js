import { defineStore } from 'pinia'
import logicalFallacies from './logicalFallacies'
import generalThinking from './generalThinking'
import numeracy from './numeracy'
import systems from './systems'
import physicalWorld from './physicalWorld'
import biologicalWorld from './biologicalWorld'
import humanNature from './humanNature'
import microeconomics from './microeconomics'
import war from './war'

export const useModelsStore = defineStore('models', {
  state: () => ({
    cardIndex: 0,
    models: [
      ...logicalFallacies.state.models,
      ...generalThinking.state.models,
      ...numeracy.state.models,
      ...systems.state.models,
      ...physicalWorld.state.models,
      ...biologicalWorld.state.models,
      ...humanNature.state.models,
      ...microeconomics.state.models,
      ...war.state.models
    ],
    selectedCategories: [
      'Logical Fallacies',
      'General Thinking Concepts',
      'Numeracy',
      'Systems',
      'Physical World',
      'The Biological World',
      'Human Nature & Judgment',
      'Microeconomics & Strategy',
      'Military & War'
    ]
  }),
  
  getters: {
    categoryList: (state) => [...new Set(state.models.map(item => item.category))],
    modelList: (state) => state.models,
    filteredModels: (state) => {
      return state.models.filter(model => 
        state.selectedCategories.includes(model.category)
      )
    }
  },
  
  actions: {
    setCardIndex(index) {
      this.cardIndex = index
    },
    
    setSelectedCategories(categories) {
      this.selectedCategories = categories
    }
  }
})