import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "JINWON Portfolio",
  description: "프론트엔드 개발자 JINWON 포트폴리오",
}

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )  
}