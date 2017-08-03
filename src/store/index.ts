import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import { State } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';


var store: Store<State>;

Vue.use(Vuex);

var state = new State();

this.store = new Vuex.Store({
    actions,
    state,
    getters,
    mutations
});

export default store;
