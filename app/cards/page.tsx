import React from "react";
import CardList from "./CardList";
import { getCardList } from "./api";

async function CardListPage() {
	const cardList = await getCardList();
	return <CardList cardList={cardList} />;
}

export default CardListPage;
