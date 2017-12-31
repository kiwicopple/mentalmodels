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
  modelList: state => state.models,
  categoryList: state => [...new Set(state.models.map(item => item.category))]
}

const state = {
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
