import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import styles from './layout.module.scss'
import './globals.scss'

export const metadata: Metadata = {
  title: "JINWON Portfolio",
  description: "프론트엔드 개발자 JINWON 포트폴리오",
}

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <div className={styles.wrapper}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )  
}