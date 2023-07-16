import "./globals.css";
import '@/styled-system/styles.css'
import { Suspense } from 'react';
import Providers from './Providers';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko" data-theme='light'>
			<body>
				<Providers>
					<Suspense fallback={<div>로딩</div>}>
						{children}
					</Suspense>
				</Providers>
			</body>
		</html>
	);
}
