import Vue from 'vue'
import Router from 'vue-router'
import QuestionComponent from '@containers/question.vue'
import VotationComponent from '@containers/votation.vue'
import ResultsComponent from '@containers/results.vue'
import store from '@/store'
import * as types from '@/store/state-types'
Vue.use(Router)

const router = new Router({
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
    ],
})

router.beforeEach((to, from, next) => {

    if (store.state.deck.length == 0) {
        store.dispatch(types.LOAD_DECK).then(() => {
            next();
        });
    } else {
        next();
    }
});
export default router;
