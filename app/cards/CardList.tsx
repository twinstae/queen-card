"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import CardItem from "./CardItem";
import type { CardT } from "./types";
import { getCardList } from "./api";

function CardList({ cardList }: { cardList: CardT[] }) {
	const { data } = useQuery({
		queryKey: ["cardList"],
		queryFn: getCardList,
		initialData: cardList,
		suspense: true
	});

	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-2">
			{data.map((card) => (
				<CardItem key={card.id} card={card} />
			))}
		</ul>
	);
}

export default CardList;

// 처음 사용자가 빠르게 페이지를 보게 해주고 싶다!

// SSR
// 매번 페이지를 그린다... 최신화된 데이터를 항상~ 사용자 맞춤형으로 그려줄 수도 있음

// SSG
// 미리 데이터를 불러오고, 페이지를 그려서... HTML 파일로 구워둔다
// 돈도 적게 들고, 성능도 괜찮아요
// 사용자 맞춤으로 하기가 힘듬
// 데이터가 최신으로 유지하기가 힘들어요 (조금만 바뀌어도 빌드를 모두 다시 해야 함~)

// ISR Incremental Static Regeneration
// 점진적으로 정적 페이지 다시 생성
// 변경된 페이지만 다시 그리면 되잖아?
