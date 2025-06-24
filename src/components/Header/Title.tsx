"use client";

import { useProjectTagStore } from "hooks/useProjectTagStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUniqueTags } from "utils/getUniqueTags";
import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "./Title.module.scss";

export default function Title() {
	const setActiveSection = useActiveSection((state) => state.setActiveSection);
	const pathname = usePathname();
	const isProjectPage = pathname === "/Project";
	const tagList = getUniqueTags();
	const { selectedTag, setSelectedTag } = useProjectTagStore();

	return (
		<div
			className={`${styles.titleContainer} ${
				isProjectPage ? styles.projectPageTitle : ""
			}`}
		>
			<h1>
				<Link href="/" onClick={() => setActiveSection("about")}>
					JINWON SHEN
				</Link>
			</h1>
			<h2>Front-end Engineer</h2>
			<p>
				디자인 감각과 사용자 경험에 대한 깊은 이해를 바탕으로, 프론트엔드 까지
				아우르는 하이브리드형 인재입니다. 기획부터 디자인, 개발까지 모든 과정에
				유연하게 참여하며 사용자에게 더 나은 경험을 제공하는 것을 목표로 하고
				있습니다.
			</p>
			<section
				className={`${styles.titleContainer} ${
					isProjectPage ? styles.projectPageTitle : ""
				}`}
			>
				<h3># Tags</h3>
				<aside className={styles.tagList}>
					{tagList.map((tag) => (
						<button
							type="button"
							key={tag}
							className={tag === selectedTag ? styles.active : ""}
							onClick={() => setSelectedTag(tag)}
						>
							{tag}
						</button>
					))}
				</aside>
			</section>
		</div>
	);
}
