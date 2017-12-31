import Vue from 'vue'
import Vuex from 'vuex'
import models from './models'
Vue.use(Vuex)

const getters = {
  modelList: state => state.models,
  categoryList: state => [...new Set(state.models.map(item => item.category))]
}

const state = {
  ...models.state
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
