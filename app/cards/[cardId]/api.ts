import { getCardList } from '@/app/cards/api';
import { type CardT } from "@/app/cards/types";

export async function getCardById(id: number): Promise<CardT | undefined> {
	return getCardList().then(list => list.find(value => value.id === id));
}
