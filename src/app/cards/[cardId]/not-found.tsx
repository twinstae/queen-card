import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<h2>카드를 찾을 수 없습니다.</h2>
			<p>
				<Link href="/cards">카드 목록으로 돌아가기</Link>
			</p>
		</div>
	);
}