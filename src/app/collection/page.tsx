import { Deck } from "@/components/deck/deck.type";
import DeckManager from "../../components/deck-management/deck-management";
import styles from "./page.module.css";
import DeckView from "@/components/deck/deck";
import { User } from "./user.type";
import { headers } from "next/headers";
import { cookies } from "next/headers";

async function getUserDecks(): Promise<Deck[]> {
	const getCookie = async (name: string) => {
		return cookies().get(name)?.value ?? "";
	};

	const token = await getCookie("accessToken");
	const res = await fetch(`http://localhost:3000/decks/`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
export default async function Collection() {
	const decks = await getUserDecks();

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
			<DeckManager />
			<aside className={styles.aside}></aside>
		</main>
	);
}
