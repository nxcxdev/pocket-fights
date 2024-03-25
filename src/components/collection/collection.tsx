import { Deck } from "@/components/deck/deck.type";
import styles from "./collection.module.css";
import DeckView from "@/components/deck/deck";
import { User } from "./user.type";
import { headers } from "next/headers";
import { Card } from "../card/card.type";
import { createAuthHeader } from "./createAuthHeader";
import { SelectedDeck } from "../deck-management/selected-deck.type";
import DeckManager from "../deck-management/deck-management";

interface Props {
	deckId?: string;
}

async function getSelectedDeck(deckId: string): Promise<SelectedDeck> {
	console.log(deckId);
	const res = await fetch(`http://localhost:3000/decks/${deckId}`, {
		headers: {
			Authorization: await createAuthHeader(),
		},
	});
	console.log(res);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
async function getUserDecks(): Promise<Deck[]> {
	const res = await fetch(`http://localhost:3000/decks/`, {
		headers: {
			Authorization: await createAuthHeader(),
		},
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
export default async function Collection(props: Props) {
	const decks = await getUserDecks();
	const selectedDeck = props.deckId
		? await getSelectedDeck(props.deckId)
		: null;

	return (
		<main className={styles.main}>
			<aside className={styles.sideMenu}>
				<div className={styles.searchDeck}>
					<input
						type="text"
						placeholder="Search deck"
						className={styles.input}
					></input>
					<button className={styles.createDeck}>
						+ Create a new deck
					</button>
				</div>
				<div className={styles.deckManagement}>
					<div className={styles.deckContainer}>
						{decks.map((deck) => (
							<DeckView deck={deck} key={deck.id} />
						))}
					</div>
				</div>
			</aside>
			{selectedDeck ? (
				<DeckManager selectedDeck={selectedDeck} />
			) : (
				<div className={styles.placeholder}></div>
			)}
			<aside className={styles.aside}></aside>
		</main>
	);
}
