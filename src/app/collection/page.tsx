import DeckManager from "../../components/deck-management/deck-management";
import styles from "./page.module.css";
import Deck from "@/components/deck/deck";

export default function Collection() {
	return (
		<main className={styles.main}>
			{/* Left side menu */}
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
						<Deck />
					</div>
				</div>
			</aside>
			{/* Main content */}
			<DeckManager />
			{/* Right side panel */}
			<aside className={styles.aside}></aside>
		</main>
	);
}
