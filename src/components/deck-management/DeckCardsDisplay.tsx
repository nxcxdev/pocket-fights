import CardView from "../card/card";
import styles from "./deck-management.module.css";
import { Card } from "../card/card.type";

interface Props {
	cards: Card[];
	editMode: boolean;
}


export function DeckCardsDisplay(props: Props) {
	return (
		<section className={styles.cardDisplay}>
			{props.cards.map((card) => (
				<CardView card={card} key={card.id} editMode={props.editMode}/>
			))}
			<div className={styles.spacing}></div>
		</section>
	);
}
