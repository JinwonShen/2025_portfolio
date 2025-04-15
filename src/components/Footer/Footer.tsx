import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.txtCont}>
        <p>읽어주셔서 감사합니다. 🙇🏻🔥 <br />
        더 나은 사용자 경험을 만드는 개발자가 되겠습니다.</p>
        <p>그 외 작업물은 <Link href="https://github.com/JinwonShen" target="_blank" rel='noreferrer'>GitHub</Link> 에서 확인하실 수 있어요.</p>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 JINWON SHEN. All rights reserved.</p>
        <p>React, Next.js, TypeScript, css modules를 사용해 제작한 포트폴리오입니다.</p>
      </div>
    </footer>
  )
}