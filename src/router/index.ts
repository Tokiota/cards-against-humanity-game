import Vue from 'vue'
import Router from 'vue-router'
import QuestionComponent from '@containers/question.vue'
import VotationComponent from '@containers/votation.vue'
import ResultsComponent  from '@containers/results.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Question',
            component: QuestionComponent
        },
        {
            path: '/votation',
            name: 'Votation',
            component: VotationComponent
        },
        {
            path: '/results',
            name: 'Results',
            component: ResultsComponent
        }
    ]
})
