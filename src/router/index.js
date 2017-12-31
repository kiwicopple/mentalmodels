import Vue from 'vue'
import Router from 'vue-router'
import Models from '../components/Models'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      props: true,
      name: 'Models',
      component: Models
    }
  ]
})
