
import * as deck from './basic-deck.json';
import { Card } from "@model/card";

export class DeckDataService {
    /**
     * Returns a Deck
     */
    public loadDeck(): Promise<Card[]> {


        return new Promise<Card[]>((resolve, reject) => {
            resolve(<Card[]>deck);
        });
    }
}
