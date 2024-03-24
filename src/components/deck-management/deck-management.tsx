"use client";

import { useState } from "react";
import styles from "./deck-management.module.css";
import { DeckCardsDisplay } from "./DeckCardsDisplay";
import { DeckManagerHeader } from "./DeckManagerHeader";
import { SelectedDeck } from "./selected-deck.type";

export interface Props {
	selectedDeck: SelectedDeck;
}

export default function DeckManager(props: Props) {
	const [editMode, setEditMode] = useState<boolean>(false);

	const displayedCards = !editMode
		? props.selectedDeck.cards.filter((card) => card.quantity > 0)
		: props.selectedDeck.cards;

	const sumCards = displayedCards.reduce(
		(accumulator, card) => accumulator + Number(card.quantity),
		0
	);

	function changeMode(): void {
		setEditMode(!editMode);
	}

	return (
		<section className={styles.section}>
			<DeckManagerHeader
				deckName={props.selectedDeck.name}
				cardsCount={sumCards}
				changeMode={changeMode}
				editMode={editMode}
			/>
			<DeckCardsDisplay cards={displayedCards} editMode={editMode} />
		</section>
	);
}
