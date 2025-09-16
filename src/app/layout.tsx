import type { Metadata } from "next";

import { Exo, Exo_2, IBM_Plex_Sans_KR } from "next/font/google";
import Header from "../components/Header/Header";
import Social from "../components/Social";
import LenisProvider from "../hooks/useLenis";
import { AnimatedGradient } from "./AnimatedGradient";
import "./globals.scss";
import styles from "./layout.module.scss";

// body
const ibm = IBM_Plex_Sans_KR({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	variable: "--font-ibm",
});

// sub title
const exo = Exo({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	variable: "--font-exo",
});

// title
const exo2 = Exo_2({
	subsets: ["latin"],
	weight: ["700", "800"],
	style: ["normal", "italic"],
	variable: "--font-exo2",
});

export const metadata: Metadata = {
	title: "JINWON SHEN - Web Publisher & Frontend Developer",
	description:
		"웹 표준과 접근성을 준수하는 퍼블리셔이자 프론트엔드 개발자 JINWON SHEN의 포트폴리오 사이트입니다.",
	keywords: [
		"JINWON SHEN",
		"포트폴리오",
		"웹 퍼블리셔",
		"퍼블리싱",
		"프론트엔드 개발자",
		"Web Publisher",
		"Frontend Developer",
		"웹 표준",
		"접근성",
		"HTML5",
		"CSS3",
		"시맨틱 마크업",
		"반응형 웹",
		"크로스브라우징",
	],
	authors: [{ name: "Jinwon Shen" }],
	openGraph: {
		title: "JINWON SHEN - Web Publisher & Frontend Developer",
		description:
			"웹 표준과 접근성을 준수하는 퍼블리셔이자 프론트엔드 개발자 JINWON SHEN의 포트폴리오입니다.",
		url: "https://jinwondev.vercel.app",
		images: [
			{
				url: "https://jinwondev.vercel.app/og-image.png",
				width: 1200,
				height: 630,
				alt: "Jinwon Shen Portfolio - Web Publisher & Frontend Developer",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "JINWON SHEN - Web Publisher & Frontend Developer",
		description:
			"웹 표준과 접근성을 준수하는 퍼블리셔이자 프론트엔드 개발자 JINWON SHEN의 포트폴리오입니다.",
		images: ["https://jinwondev.vercel.app/og-image.png"],
	},
	metadataBase: new URL("https://jinwondev.vercel.app"),
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html
			lang="ko"
			className={`${ibm.variable} ${exo.variable} ${exo2.variable}`}
		>
			<body>
				{/* Skip Navigation for Accessibility */}
				<button
					type="button"
					className="skip-nav"
					onClick={() => {
						const mainContent = document.getElementById("main-content");
						if (mainContent) {
							mainContent.focus();
							mainContent.scrollIntoView({ behavior: "smooth" });
						}
					}}
				>
					메인 콘텐츠로 바로가기
				</button>
				<LenisProvider />
				<AnimatedGradient />
				<Header />
				<Social />
				<div className={styles.wrapper}>
					<main id="main-content" tabIndex={-1} style={{ outline: "none" }}>
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
