import Vue from 'vue'
import Router from 'vue-router'
import Question from '@containers/question.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Question',
      component: Question
    }
  ]
})
