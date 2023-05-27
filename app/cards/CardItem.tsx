import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardItemProps {
	card: {
		id: number;
		title: string;
		description: string;
		image: string;
	};
}

function CardItem({ card: { id, title, description, image } }: CardItemProps) {
	return (
		<Link href={`/cards/${id}`}>
			<div className="w-64 rounded-2xl bg-white overflow-hidden">
				<div className="w-full aspect-16/9 relative">
					<Image
						fill={true}
						alt=""
						role="presentation"
						className="w-full object-cover"
						src={image}
					/>
				</div>
				<div className="p-4">
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</Link>
	);
}

export default CardItem;
