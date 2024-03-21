import CardView from "../card/card";
import { Card } from "../card/card.type";
import styles from "./deck-management.module.css";
async function getCards(): Promise<Card[]> {
	const res = await fetch("http://localhost:3000/cards");
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function DeckManager() {
	const cards = await getCards();
	console.log(cards);
	return (
		<section className={styles.section}>
			<header className={styles.header}>
				<div className={styles.leftSection}>
					<div className={styles.nameContainer}>
						<h2 className={styles.deckName}>Deck</h2>
						<button className={styles.editButton}>
							<img
								src="/media/images/edit.svg"
								alt="Edit name button."
							/>
						</button>
					</div>
					<h3 className={styles.cardCounter}>0/40</h3>
				</div>
				<div className={styles.rightSection}>
					<button className={styles.editModeButton}>Edit mode</button>
				</div>
			</header>
			<section className={styles.cardDisplay}>
				{cards.map((card) => (
					<CardView card={card} />
				))}
				<div className={styles.spacing}></div>
			</section>
		</section>
	);
}
