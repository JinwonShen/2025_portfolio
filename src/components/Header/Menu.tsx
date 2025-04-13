import Link from "next/link"
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menuContainer}>
      <ul>
        <li>
          <Link href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link href={"/project"}>
            Project
          </Link>
        </li>
        <li>
          <Link href={"/guestbook"}>
            GuestBook
          </Link>
        </li>
      </ul>
    </nav>
  )
}