
import * as deck from './basic-deck.json';
import { Card } from "@model/card";

export class DeckDataService {
    /**
     * Returns a Deck
     */
    public loadDeck(): Promise<Card[]> {

        var deckLoaded: any = deck
        return new Promise<Card[]>((resolve, reject) => {
            resolve(<Card[]> deckLoaded);
        });
    }
}
