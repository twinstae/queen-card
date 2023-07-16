import { type ActionT, type CardT } from "./types";

export async function getCardList(): Promise<CardT[]> {
	return [
		{
			id: 1,
			title: "15분씩 일주일 시작하기",
			description:
				"처음 마음 돌보기를 시작해보면서 작은 운동, 수면, 마음챙김, 감사일기, 회고 등을 시도해봅니다.",
			image:
				"https://images.unsplash.com/photo-1674148259956-bc48c202b6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		},
		{
			id: 2,
			title: "잠 잘 자기",
			description:
				"과학적으로 잠을 잘 자고, 수용하는 힘을 길러주는 작은 연습들입니다.",
			image:
				"https://images.unsplash.com/photo-1674148259956-bc48c202b6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		},
	];
}

export async function getActionById(id: number): Promise<ActionT[]> {
	return {
		id: 2,
		title: "잠 잘 자기",
		description:
			"과학적으로 잠을 잘 자고, 수용하는 힘을 길러주는 작은 연습들입니다.",
		image:
			"https://images.unsplash.com/photo-1674148259956-bc48c202b6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
	};
}
