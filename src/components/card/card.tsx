import styles from "./card.module.css";
import { Card } from "./card.type";

interface Props {
	card: Card;
}

function capitalizeFirstLetter(text: string): string {
	return text[0].toUpperCase() + text.substring(1);
}

export default function CardView(props: Props) {
	return (
		<article className={styles.card}>
			<header className={styles.header}>
				<div className={styles.cardCost}>{props.card.cost}</div>
				<p className={styles.cardName}>
					{capitalizeFirstLetter(props.card.name)}
				</p>
				<div className={styles.cardValue}>{props.card.value}</div>
			</header>
			<div></div>
			<footer className={styles.footer}>
				<p className={styles.description}>{props.card.description}</p>
			</footer>
		</article>
	);
}
