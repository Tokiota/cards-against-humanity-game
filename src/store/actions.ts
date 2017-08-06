import { ActionContext } from 'vuex/types';
import { State } from './state'
import * as types from './state-types'
import { Card } from "@model/card";
import { DeckDataService } from "../core/data-service/deck.data-service";



export const actions = {
    [types.LOAD_DECK](actionContext: ActionContext<State, State>): Promise<Card[]> {
        var api = new DeckDataService();
        var promise = api.loadDeck();
        promise.then(data => {
            actionContext.commit(types.LOAD_DECK, data);
        });
        return promise;
    },
};
