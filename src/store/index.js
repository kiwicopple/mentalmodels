import Vue from 'vue'
import Vuex from 'vuex'
import logicalFallacies from './logicalFallacies'
import generalThinking from './generalThinking'
import numeracy from './numeracy'
import systems from './systems'
import physicalWorld from './physicalWorld'
import biologicalWorld from './biologicalWorld'
import humanNature from './humanNature'
import microeconomics from './microeconomics'
import war from './war'
Vue.use(Vuex)

const getters = {
  cardIndex: state => state.cardIndex,
  categoryList: state => [...new Set(state.models.map(item => item.category))],
  modelList: state => state.models,
  selectedCategories: state => state.selectedCategories
}

const state = {
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
}

const mutations = {
  SET_CARD_INDEX (state, payload) {
    state.cardIndex = payload
  },
  SET_SELECTED_CATEGORIES (state, payload) {
    state.selectedCategories = payload
  }
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
