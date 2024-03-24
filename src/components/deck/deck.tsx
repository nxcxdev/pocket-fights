import Link from "next/link";
import styles from "./deck.module.css";
import { Deck } from "./deck.type";

interface Props {
	deck: Deck;
}
export default function DeckView(props: Props) {
	return (
		<Link className={styles.deck} href={`/collection/${props.deck.id}`}>
			<p>{props.deck.name}</p>
		</Link>
	);
}
