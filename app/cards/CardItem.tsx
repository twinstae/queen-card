import Image from "next/image";
import React from "react";

interface CardItemProps {
	card: {
		title: string;
		description: string;
		image: string;
	};
}

function CardItem({ card: { title, description, image } }: CardItemProps) {
	return (
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
	);
}

export default CardItem;
