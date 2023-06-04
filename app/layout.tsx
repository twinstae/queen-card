import "./globals.css";
import { Suspense } from 'react';
import Providers from './Providers';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko" data-theme='light'>
			<body className="m-8 rounded-lg max-w-3xl border-2 mx-auto shadow-lg overflow-hidden">
				<Providers>
					<Suspense fallback={<div>로딩</div>}>
						{children}
					</Suspense>
				</Providers>
			</body>
		</html>
	);
}
