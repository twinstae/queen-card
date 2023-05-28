import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { CardT } from "./types";

interface CardItemProps {
	card: CardT;
}

function CardItem({ card: { id, title, description, image } }: CardItemProps) {
	return (
		<div
			role="listitem"
			className="w-full md:w-64 rounded-2xl bg-white overflow-hidden shadow-lg ring-1 ring-gray-100"
		>
			<Link href={`/cards/${id}`}>
				<div className="w-full aspect-16/9 relative">
					<Image
						fill={true}
						alt=""
						role="presentation"
						className="object-cover"
						src={image}
					/>
				</div>
				<div className="p-4">
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p>{description}</p>
				</div>
			</Link>
		</div>
	);
}

export default CardItem;
