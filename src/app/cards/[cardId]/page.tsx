import React from "react";
import { getCardById } from "./api";
import notFound from "./not-found";
import Image from "next/image";
import Link from 'next/link';

async function CardDetailPage({ params }: { params: { cardId: string } }) {
	const card = await getCardById(parseInt(params.cardId));
	if (!card) {
		return notFound();
	}

	return (
		<main className="flex flex-col space-y-16">
			<section className="text-center">
				<div className="relative h-64 rounded-t-lg overflow-hidden">
					<Image src={card.image} fill={true} alt={""} />
				</div>
				<h1 className="text-6xl text-primary py-16">{card.title}</h1>
				<p className="p-2 text-xl">{card.description}</p>
			</section>


			<section className="p-8" aria-labelledby='action-list-title'>
				<h2 id="action-list-title" className="text-3xl mb-4">다음 행동</h2>
				<ul className="steps steps-horizontal text-xl w-full">
					<li className="step step-primary">자기자비</li>
					<li className="step step-primary">운동</li>
					<li className="step">수면</li>
					<li className="step">마음챙김</li>
					<li className="step">감사</li>
					<li className="step">회고</li>
				</ul>
				<Link className="btn btn-primary w-full mt-8" href={`/cards/${card.id}/actions/0`}> 시작하기 </Link>
			</section>
		</main>
	);
}

export default CardDetailPage;
