import { atom, useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';
import { useCallback } from 'react';

export const TIMER_INTERVAL = 200;

const nowAtom = atom(Date.now());

nowAtom.onMount = (setNow) => {
	const id = setInterval(() => {
		setNow(Date.now())
	}, TIMER_INTERVAL)

	return () => {
		clearInterval(id);
	}
}

function useNow<T>(select: (now: number) => T, dependencies: unknown[]): T {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const cachedSelect = useCallback(select, dependencies) as (now: number) => T;
	const remainAtom = selectAtom(nowAtom, cachedSelect);
	return useAtomValue(remainAtom);
}

export default useNow;