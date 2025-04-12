import type { Metadata } from "next";

import styles from './layout.module.scss'
import './globals.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: "JINWON Portfolio",
  description: "프론트엔드 개발자 JINWON 포트폴리오",
}

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html lang="ko">
      <body className={roboto.className}>
        <div className={styles.wrapper}>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )  
}