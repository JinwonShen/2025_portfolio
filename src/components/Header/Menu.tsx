"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "./Menu.module.scss";

export default function Menu() {
	const activeSection = useActiveSection((state) => state.activeSection);
	const setActiveSection = useActiveSection((state) => state.setActiveSection);
	const pathname = usePathname();

	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (!element) return;

		element.scrollIntoView({ behavior: "smooth" });
		setActiveSection(id);
	};

	useEffect(() => {
		console.log("current pathname: ", pathname);
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

		for (const id of sectionIds) {
			const el = document.getElementById(id);
			if (el) {
				observer.observe(el);
			}
		}

		return () => {
			observer.disconnect();
		};
	}, [setActiveSection, pathname]);

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
				</li>
				<li>
					<button
						onClick={() => handleScrollTo("project")}
						type="button"
						className={activeSection === "project" ? styles.active : ""}
					>
						<span>Project</span>
						<span className={styles.more}>
							<Link href="/Project">more</Link>
						</span>
					</button>
				</li>
				<li>
					<button
						onClick={() => handleScrollTo("guestbook")}
						type="button"
						className={activeSection === "guestbook" ? styles.active : ""}
					>
						GuestBook
					</button>
				</li>
			</ul>
		</nav>
	);
}
