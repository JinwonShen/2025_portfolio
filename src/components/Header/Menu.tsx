'use client'

// import Link from "next/link"
import styles from './Menu.module.scss'

export default function Menu() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if(!element) return
    element.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <nav className={styles.menuContainer}>
      <ul>
        <li>
          <button onClick={() => handleScrollTo("about")} type="button">About</button>
          {/* <Link href={"/about"}>About</Link> */}
        </li>
        <li>
          <button onClick={() => handleScrollTo("project")} type="button">Project</button>
          {/* <Link href={"/project"}>Project</Link> */}
        </li>
        <li>
          <button onClick={() => handleScrollTo("guestbook")} type="button">GuestBook</button>
          {/* <Link href={"/guestbook"}>GuestBook</Link> */}
        </li>
      </ul>
    </nav>
  )
}