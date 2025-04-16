import type { Metadata } from "next";

import './globals.scss'
import styles from './layout.module.scss'
import { AnimatedGradient } from "./AnimatedGradient";
import { IBM_Plex_Sans_KR, Exo, Exo_2  } from 'next/font/google'
import Header from "../components/Header/Header";
import Social from "../components/Social";
import LenisProvider from "../hooks/useLenis";

// body
const ibm = IBM_Plex_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm'
})

// sub title
const exo = Exo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-exo'
})

// title
const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-exo2'
})

export const metadata: Metadata = {
  title: "JINWON SHEN - Frontend Engineer",
  description: "프론트엔드 개발자 JINWON SHEN의 포트폴리오 사이트입니다.",
  keywords: ["JINWON SHEN", "포트폴리오", "프론트엔드 개발자", "Frontend Developer", "Frontend Engineer"],
  authors: [{ name: "Jinwon Shen" }],
}

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html lang="ko" className={`${ibm.variable} ${exo.variable} ${exo2.variable}`}>
      <head>
      <meta property="og:title" content="JINWON SHEN - Frontend Engineer" />
      <meta property="og:description" content="프론트엔드 개발자 JINWON SHEN의 포트폴리오입니다." />
      <meta property="og:image" content="https://your-domain.com/og-image.png" />
      <meta property="og:url" content="https://jinwonshen.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <LenisProvider />
        <AnimatedGradient />
        <Header />
        <Social />
        <div className={styles.wrapper}>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )  
}