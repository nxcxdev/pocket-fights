import { Card } from "../card/card.type";

export interface SelectedDeck {
	id: string;
	name: string;
	cards: Card[];
}
