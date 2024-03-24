import { useContext } from "react";
import styles from "./card.module.css";
import { Card } from "./card.type";

interface Props {
	card: Card;
	editMode: boolean;
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
			<div className={styles.image}></div>
			<footer className={styles.footer}>
				<p className={styles.description}>{props.card.description}</p>
				<div className={styles.quantity}>
					{props.editMode == true && (
						<button className={styles.button}>-</button>
					)}
					<p>{props.card.quantity}</p>
					{props.editMode == true && (
						<button className={styles.button}>+</button>
					)}
				</div>
			</footer>
		</article>
	);
}
