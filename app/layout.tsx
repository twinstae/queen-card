"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./globals.css";
import { Suspense } from 'react';

const queryClient = new QueryClient();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body>
				<div className="h-screen p-4">
					<QueryClientProvider client={queryClient}>
						<Suspense fallback={<div>로딩</div>}>
							{children}
						</Suspense>
					</QueryClientProvider>
				</div>
			</body>
		</html>
	);
}
