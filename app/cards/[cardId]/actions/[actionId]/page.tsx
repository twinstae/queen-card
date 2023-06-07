"use client";
import React, { useEffect, useReducer, useState } from "react";
import useNow from "@/app/hooks/useNow";
import { useRouter } from "next/navigation";

const TIMER_DURATION = 5;

// 시작을 안 한 거
// 진행 중
// 멈춘 거
// 완료된 거

// FSM
type TimerStateT =
	| {
			type: "playing";
			end: number;
	  }
	| {
			type: "idle" | "stop" | "end";
			remain: number;
	  };

type TimerActionT =
	| {
			type: "start" | "restart" | "finish";
	  }
	| {
			type: "pause";
			remain: number;
	  };

function ActionDetailPage({ params }: { params: { actionId: string } }) {
	const action = {
		id: 110,
		title: "자기자비",
		description: "자기 자비는 무엇일까요? 호호호",
	};

	const [isWritingReview, setIsWritingReview] = useState(false);

	const [state, dispatch] = useReducer(
		(old: TimerStateT, action: TimerActionT): TimerStateT => {
			if (action.type === "start") {
				if (old.type === "idle") {
					return {
						type: "playing",
						end: Date.now() + TIMER_DURATION * 1000,
					};
				}
			}
			if (action.type === "pause") {
				if (old.type === "playing") {
					return {
						type: "stop",
						remain: action.remain,
					};
				}
			}
			if (action.type === "restart") {
				if (old.type === "stop") {
					return {
						type: "playing",
						end: Date.now() + old.remain * 1000,
					};
				}
			}
			if (action.type === "finish") {
				if (old.type === "playing") {
					return {
						type: "end",
						remain: 0,
					};
				}
			}
			throw Error("invalid");
		},
		{
			remain: TIMER_DURATION,
			type: "idle",
		},
	);

	const remain = useNow(
		(now) => {
			if (state.type === "playing") {
				return Math.max((state.end - now) / 1000, 0);
			}
			return state.remain;
		},
		[state],
	);

	const remainRatio = (remain / TIMER_DURATION) * 100;

	useEffect(() => {
		if (remain === 0) {
			dispatch({ type: "finish" });
		}
	}, [remain]);

	const handleWriteReview = () => {
		setIsWritingReview(true);
	};

	const handleCancelReview = () => {
		setIsWritingReview(false);
	};

	return (
		<main className="flex flex-col space-y-16">
			{!isWritingReview ? (
				<>
					<section className="text-center">
						<h1 className="text-6xl text-primary py-16">{action.title}</h1>
						<p className="p-2 text-xl">{action.description}</p>
					</section>
					<section
						className="p-8 flex flex-col space-y-4 items-center"
						aria-labelledby="timer-title"
					>
						<h2 id="timer-title" className="text-3xl mb-4">
							포모도로 타이머
						</h2>
						<div
							className="radial-progress bg-primary-content text-primary"
							style={{
								"--value": remainRatio,
								"--size": "12rem",
								"--thickness": "0.5rem",
							}}
						>
							<div>
								<span className="countdown font-mono text-xl">
									<span style={{ "--value": Math.floor(remain / 60) }} />
									분
								</span>{" "}
								<span className="countdown font-mono text-xl">
									<span style={{ "--value": Math.floor(remain % 60) }} />
									초
								</span>
							</div>
						</div>
						<button
							type="button"
							className="btn btn-primary w-80 text-lg"
							onClick={() => {
								if (state.type === "idle") {
									dispatch({ type: "start" });
								}
								if (state.type === "playing") {
									dispatch({ type: "pause", remain });
								}
								if (state.type === "stop") {
									dispatch({ type: "restart" });
								}
								if (state.type === "end") {
									handleWriteReview();
								}
							}}
						>
							{state.type === "idle"
								? "시작하기"
								: state.type === "playing"
								? "멈추기"
								: state.type === "stop"
								? "이어서 하기"
								: "회고하기!"}
						</button>
					</section>
				</>
			) : (
				<Review title={action.title} handleCancelReview={handleCancelReview} />
			)}
		</main>
	);
}

export default ActionDetailPage;

function Review({
	title,
	handleCancelReview,
}: { title: string; handleCancelReview: () => void }) {
	const router = useRouter();

	return (
		<section className="p-8 flex flex-col items-center w-full">
			<h2 className="text-3xl mb-4 text-center text-primary">
				회고하기 {":)"}
			</h2>
			<p>
				<span className="font-semibold">{title}</span> 액션을 수행하며 느낀점을
				자유롭게 적어주세요!
			</p>
			<form
				className="flex flex-col w-full"
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.currentTarget);
					const a1 = formData.get("q1") as string;
					if (a1.trim().length) {
						router.push("/cards");
					}
				}}
			>
				<label htmlFor="q1" className="mb-2">
					1. 1번 질문
				</label>
				<input
					name="q1"
					id="q1"
					className="border rounded-md p-2 focus:outline-primary"
				/>
				<div className="">
					<button
						type="button"
						className="btn w-80 text-lg mt-4 self-center mr-2"
						onClick={handleCancelReview}
					>
						취소
					</button>
					<button
						type="submit"
						className="btn btn-primary w-80 text-lg mt-4 self-center"
					>
						완료
					</button>
				</div>
			</form>
		</section>
	);
}
