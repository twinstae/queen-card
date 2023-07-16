import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { CardT } from "./types";
import { Box, VStack } from "@/styled-system/jsx";
import { stack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";

interface CardItemProps {
	card: CardT;
}

function CardItem({ card: { id, title, description, image } }: CardItemProps) {
	return (
		<Box
			role="listitem"
			width="64"
			rounded="md"
			bg="gray.100"
			shadow="lg"
			transition="all"
			overflow="hidden"
		>
			<Link href={`/cards/${id}`} className={stack({ height: "full", gap: 0 })}>
				<Box
					width="full"
					aspectRatio="16/9"
					position="relative"
					roundedTop="md"
				>
					<Image
						fill={true}
						alt=""
						role="presentation"
						className="object-cover"
						src={image}
					/>
				</Box>
				<VStack
					padding="4"
					flexGrow="1"
					backgroundColor="white"
					justifyContent="space-between"
				>
					<div>
						<h3
							className={css({
								fontSize: "xl",
								fontWeight: "semibold",
								mb: "2",
							})}
						>
							{title}
						</h3>
						<p>{description}</p>
					</div>
					<span
						className={css({
							width: "full",
							textAlign: "right",
							marginTop: "2",
							color: "red.400",
						})}
					>
						시작하기 {">"}
					</span>
				</VStack>
			</Link>
		</Box>
	);
}

export default CardItem;
