import styles from "./deck.module.css";
import { Deck } from "./deck.type";

interface Props {
	deck: Deck;
}
export default function DeckView(props: Props) {
	return (
		<article>
			<button className={styles.deck}>{props.deck.name}</button>
		</article>
	);
}
