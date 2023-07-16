import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { CardT } from "./types";
import * as panda from '@/styled-system/jsx';

interface CardItemProps {
	card: CardT;
}

function CardItem({ card: { id, title, description, image } }: CardItemProps) {
	return (
		<panda.Box
			role="listitem"
			// "w-64 rounded-md bg-base-100 shadow-lg hover:scale-105 transition-transform overflow-hidden"
			width="64"
			rounded="md"
			bg="gray.100"
			shadow="lg"
			transition="all"
			overflow="hidden"
		>
			<Link href={`/cards/${id}`} className="h-full flex flex-col">
				<div className="w-full aspect-16/9 relative rounded-t-md">
					<Image
						fill={true}
						alt=""
						role="presentation"
						className="object-cover"
						src={image}
					/>
				</div>
				<div className="p-4 flex-grow bg-primary-content flex flex-col justify-between">
					<div>
						<h3 className="text-xl font-semibold mb-2">{title}</h3>
						<p>{description}</p>
					</div>
					<span className="text-right mt-2 text-primary justify-self-end">
						{" "}
						시작하기 {">"}
					</span>
				</div>
			</Link>
		</panda.Box>
	);
}

export default CardItem;
