"use client";

import { useEffect, useState } from "react";
// import Link from "next/link"
import styles from "./Menu.module.scss";

export default function Menu() {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (!element) return;

		element.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const sectionIds = ["about", "project", "guestbook"];

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				}
			},
			{ threshold: 0.3 },
		);

		// sectionIds.forEach((id) => {
		//   const element = document.getElementById(id)
		//   if(element) observer.observe(element)
		// })
		for (const id of sectionIds) {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		}

		return () => observer.disconnect();
	}, []);

	return (
		<nav className={styles.menuContainer}>
			<ul>
				<li>
					<button
						onClick={() => handleScrollTo("about")}
						type="button"
						className={activeSection === "about" ? styles.active : ""}
					>
						About
					</button>
					{/* <Link href={"/about"}>About</Link> */}
				</li>
				<li>
					<button
						onClick={() => handleScrollTo("project")}
						type="button"
						className={activeSection === "project" ? styles.active : ""}
					>
						Project
					</button>
					{/* <Link href={"/project"}>Project</Link> */}
				</li>
				<li>
					<button
						onClick={() => handleScrollTo("guestbook")}
						type="button"
						className={activeSection === "guestbook" ? styles.active : ""}
					>
						GuestBook
					</button>
					{/* <Link href={"/guestbook"}>GuestBook</Link> */}
				</li>
			</ul>
		</nav>
	);
}
