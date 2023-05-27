import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "마음 돌보기 카드",
	description: "매일 탄력적으로 마음을 돌보자",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body className={inter.className}>
				<div className="bg-gray-900 h-screen p-4">{children}</div>
			</body>
		</html>
	);
}
