import { Card } from "@/components/card/card.type";
import Collection from "@/components/collection/collection";

export default function Page({ params }: { params: { deck: string } }) {
	return <Collection deckId={params.deck} />;
}
