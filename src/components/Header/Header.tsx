'use client'
import Link from 'next/link';
import styles from './Header.module.scss';
import { useState } from 'react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickMenu = (id: string) => {
    if (activeMenu === id) {
      setActiveMenu(null)
    } else {
      setActiveMenu(id)
    }

    handleScrollTo(id)
  }

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
      <ul className={styles.menu}>
        {[
          { id: 'about', label: 'About' },
          { id: 'project', label: 'Project' },
          { id: 'guestbook', label: 'GuestBook' },
        ].map((menu) => (
          <li
            key={menu.id}
            className={`${styles.menuItem} ${activeMenu === menu.id ? styles.active : ''}`}
          >
            <button type="button" onClick={() => handleClickMenu(menu.id)}>
              {menu.label}
            </button>
            <Link href={`/${menu.id}`} className={styles.more}>more +</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}