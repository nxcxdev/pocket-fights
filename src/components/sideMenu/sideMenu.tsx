import styles from "./sideMenu.module.css";

export default function component() {
	return (
		<aside>
			<div className={styles.deckContainer}>
				<a></a>
			</div>
			<button>+ Create a new deck</button>
		</aside>
	);
}
