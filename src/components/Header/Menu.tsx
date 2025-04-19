'use client'

// import Link from "next/link"
import styles from './Menu.module.scss'
import { useEffect, useState } from 'react'

export default function Menu() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if(!element) return

    element.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const sectionIds = ['about', 'project', 'guestbook']

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { threshold: 0.5 }
    )

  // sectionIds.forEach((id) => {
  //   const element = document.getElementById(id)
  //   if(element) observer.observe(element)
  // })
  for(const id of sectionIds) {
    const element = document.getElementById(id)
    if(element){
      observer.observe(element)
    }
  }
  
  return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.menuContainer}>
      <ul>
        <li>
          <button onClick={() => handleScrollTo("about")} type="button">About</button>
          className={activeSection === 'about' ? styles.active : ''}
          {/* <Link href={"/about"}>About</Link> */}
        </li>
        <li>
          <button onClick={() => handleScrollTo("project")} type="button">Project</button>
          className={activeSection === 'project' ? styles.active : ''}
          {/* <Link href={"/project"}>Project</Link> */}
        </li>
        <li>
          <button onClick={() => handleScrollTo("guestbook")} type="button">GuestBook</button>
          className={activeSection === 'guestbook' ? styles.active : ''}
          {/* <Link href={"/guestbook"}>GuestBook</Link> */}
        </li>
      </ul>
    </nav>
  )
}