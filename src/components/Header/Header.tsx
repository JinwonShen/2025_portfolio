import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1>
          <Link href="/">
            JINWON SHEN
          </Link>
        </h1>
        <h2>
          Front-end Engineer
        </h2>
        <p>
        디자인 감각과 사용자 경험에 대한 깊은 이해를 바탕으로,
        프론트엔드 개발까지 연결하는 하이브리드형 인재입니다.
        </p>
      </div>
      <nav>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/guestbook">GuestBook</Link>
        </li>
      </nav>
    </header>
  );
}