import { getCardList } from '@/src/app/cards/api';
import { type CardT } from "@/src/app/cards/types";

export async function getCardById(id: number): Promise<CardT | undefined> {
	return getCardList().then(list => list.find(value => value.id === id));
}
