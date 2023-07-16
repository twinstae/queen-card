"use client";
import React from "react";

import CardItem from "./CardItem";
import type { CardT } from "./types";
import { useQuery } from '@tanstack/react-query';
import { getCardList } from './api';
import { HStack } from '@/styled-system/jsx';
import { css } from '@/styled-system/css';

// pages router
// getServerSideProps, getStaticProps <- 여기, 페이지 맨 위에서만 데이터를 불러올 수 있었다
// client component
// 서버에서 모든 페이지를 그림!
// 클라이언트에서 페이지 전체를 하이드레이션 함!

// app router
// server 서버에서만 데이터 가져와서 서버에서만 그림 <- 서버에 있는 데이터만으로 다 그릴 수 있는 거~
// client 옛날처럼 서버에서 그리고, 클라이언트에서 하이드레이션 <- 브라우저나 사용자에게만 있는 데이터가 필요한 거

function CardList({ cardList }: { cardList: CardT[] }) {
	const { data } = useQuery({
		queryKey: ["cardList"],
		queryFn: getCardList,
		initialData: cardList,
		suspense: true
	});
	return (
		<HStack className={css({ gap: 4})}>
			{data.map((card) => (
				<CardItem key={card.id} card={card} />
			))}
		</HStack>
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
