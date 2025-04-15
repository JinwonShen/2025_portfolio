import type { Metadata } from "next";

import './globals.scss'
import styles from './layout.module.scss'
import { AnimatedGradient } from "@/app/AnimatedGradient";
import { IBM_Plex_Sans_KR, Exo, Exo_2  } from 'next/font/google'
import Header from "@/components/Header/Header";
import Social from "@/components/Social";
import LenisProvider from "@/hooks/useLenis";

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
  title: "JINWON Portfolio",
  description: "Frontend Engineer JINWON SHEN",
}

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html lang="ko" className={`${ibm.variable} ${exo.variable} ${exo2.variable}`}>
      <body>
        <LenisProvider />
        <AnimatedGradient />
        <Header />
        <div className={styles.wrapper}>
          <Social />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )  
}