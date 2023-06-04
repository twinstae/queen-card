import React from "react";
import CardList from "./CardList";
import { getCardList } from "./api";

// SSG 캐시가 기본임!
// cookie, header 등을 다이내믹 펑션을 이용하면 SSR이 될 수도 있음

async function CardListPage() {
	const cardList = await getCardList();

	return <>
		<main className="flex flex-col space-y-16 p-8">
			<section className="text-center">
				<h1 className="text-6xl text-primary py-16">마음 돌보기 카드</h1>
				<p className="p-2 text-xl"> 마음을 돌보기 위한 작은 행동을 실천해보고, 카드를 모아보세요.</p>
			</section>

			<section aria-labelledby='card-list-title'>
				<h2 id="card-list-title" className="text-3xl mb-4">도전하고 카드를 얻자!</h2>
				<CardList cardList={cardList} />
			</section>

			<section aria-labelledby='my-card-list-title'>
				<h2 id="my-card-list-title" className="text-3xl mb-4">내가 모은 카드</h2>
				<div className="border-2 w-64 h-96 rounded-lg p-4 bg-primary-content">
					test
				</div>
			</section>
		</main>
	</>;
}

export default CardListPage;
