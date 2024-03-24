import styles from "./deck-management.module.css";

interface Props {
	deckName: string;
	cardsCount: number;
	changeMode: () => void;
	editMode: boolean;
}

export function DeckManagerHeader(props: Props) {
	return (
		<header className={styles.header}>
			<div className={styles.leftSection}>
				<div className={styles.nameContainer}>
					<h2 className={styles.deckName}>{props.deckName}</h2>
				</div>
				<h3 className={styles.cardCounter}>{props.cardsCount}/40</h3>
			</div>
			<div className={styles.rightSection}>
				<button
					className={styles.editModeButton}
					onClick={props.changeMode}
				>
					{props.editMode ? "Save deck" : "Edit mode"}
				</button>
			</div>
		</header>
	);
}
