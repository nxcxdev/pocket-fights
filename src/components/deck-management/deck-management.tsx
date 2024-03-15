import styles from "./deck-management.module.css";
let cardCount = 0;

export default function DeckManagement() {
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
					<h3 className={styles.cardCounter}>{cardCount}/40</h3>
				</div>
				<div className={styles.rightSection}>
					<button className={styles.editModeButton}>Edit mode</button>
				</div>
			</header>
		</section>
	);
}
