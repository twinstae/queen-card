"use client";
import React, { useEffect, useReducer } from "react";
import useNow from '@/src/app/hooks/useNow';

const TIMER_DURATION = 15 * 60;

// 시작을 안 한 거
// 진행 중
// 멈춘 거
// 완료된 거

// FSM
type TimerStateT = {
	type: 'playing',
	end: number
} | {
	type: 'idle' | 'stop' | 'end',
	remain: number,
};

type TimerActionT = {
	type: 'start' | 'restart' | 'finish'
} | {
	type: 'pause',
	remain: number
}

function ActionDetailPage({ params }: { params: { actionId: string } }) {
	const action = {
		id: 110,
		title: '자기자비',
		description: '자기 자비는 무엇일까요? 호호호'
	}

	const [state, dispatch] = useReducer((old: TimerStateT, action: TimerActionT): TimerStateT => {

		if (action.type === "start") {
			if (old.type === 'idle') {
				return {
					type: 'playing',
					end: Date.now() + TIMER_DURATION * 1000
				}
			}
		}
		if (action.type === "pause") {
			if (old.type === 'playing') {
				return {
					type: 'stop',
					remain: action.remain
				}
			}
		}
		if (action.type === "restart") {
			if (old.type === 'stop') {
				return {
					type: 'playing',
					end: Date.now() + old.remain * 1000
				}
			}
		}
		if (action.type === "finish") {
			if (old.type === 'playing') {
				return {
					type: 'end',
					remain: 0
				}
			}
		}
		throw Error('invalid')
	}, {
		remain: TIMER_DURATION,
		type: 'idle'
	});

	const remain = useNow((now) => {
		if (state.type === 'playing') {
			return Math.max((state.end - now) / 1000, 0);
		}
		return state.remain;
	}, [state])

	const remainRatio = (remain / TIMER_DURATION * 100);

	useEffect(() => {
		if (remain === 0) {
			dispatch({ type: 'finish' });
		}
	}, [remain])

	return (
		<main className="flex flex-col space-y-16">
			<section className="text-center">
				<h1 className="text-6xl text-primary py-16">{action.title}</h1>
				<p className="p-2 text-xl">{action.description}</p>
			</section>
			<section className="p-8 flex flex-col space-y-4 items-center" aria-labelledby='timer-title'>
				<h2 id="timer-title" className="text-3xl mb-4">포모도로 타이머</h2>
				<div className="radial-progress bg-primary-content text-primary" style={{ "--value": remainRatio, "--size": "12rem", "--thickness": "0.5rem" }}>
					<div>
						<span className="countdown font-mono text-xl">
							<span style={{ "--value": Math.floor(remain / 60) }} />분
						</span>
						{' '}
						<span className="countdown font-mono text-xl">
							<span style={{ "--value": Math.floor(remain % 60) }} />초
						</span>
					</div>
				</div>
				<button type="button" className="btn btn-primary w-80 text-lg" onClick={() => {
					if (state.type === 'idle') {
						dispatch({ type: 'start' });
					}
					if (state.type === 'playing') {
						dispatch({ type: 'pause', remain });
					}
					if (state.type === 'stop') {
						dispatch({ type: 'restart' });
					}
				}}>
					{state.type === 'idle' ? '시작하기' : state.type === 'playing' ? '멈추기' : state.type === 'stop' ? '이어서 하기' : '회고하기!'}
				</button>
			</section>
		</main>
	);
}

export default ActionDetailPage;