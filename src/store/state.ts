

import { Card } from "@model/card";
import { Player } from "@model/player";

export class State {

    public players: Player[] = []
    public deck:Card[] = []
    public blackCard: Card = new Card()

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
