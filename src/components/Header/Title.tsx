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
		<header
			className={`${styles.titleContainer} ${
				isProjectPage ? styles.projectPageTitle : ""
			}`}
		>
			<div className={styles.profileSection}>
				<h1>
					<Link
						href="/"
						onClick={() => setActiveSection("about")}
						aria-label="JINWON SHEN - 홈으로 이동"
					>
						{isProjectPage && (
							<span className={styles.prev} aria-hidden="true">
								<svg
									viewBox="0 0 24 24"
									width={30}
									height={30}
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<title>뒤로가기</title>
									<path
										d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z"
										fill="currentColor"
									/>
								</svg>
							</span>
						)}
						<span className={styles.title}>JINWON SHEN</span>
					</Link>
				</h1>
				<p className={styles.subtitle}> • UI Designer · Front-end Projects</p>
				<p className={styles.description}>
					저는 화면을 새로 만드는 일보다, 이미 존재하는 구조와 흐름을 이해하고
					더 명확하게 정리하는 과정을 중요하게 생각합니다. <br />
					<br />
					기능이 많아질수록 UI는 복잡해지기 쉽다고 느꼈고, 사용자가 고민하지
					않아도 되는 화면을 만드는 것이 UI 디자이너의 역할이라고 생각합니다.
					그래서 디자인 과정에서는 보이는 결과물보다 구조, 흐름, 사용 맥락을
					먼저 정리하는 방식으로 문제를 바라보고 있습니다
				</p>
			</div>

			{isProjectPage && (
				<section className={styles.tagsSection} aria-labelledby="project-tags">
					<h2 id="project-tags"># Tags</h2>
					<fieldset className={styles.tagList} aria-label="프로젝트 태그 필터">
						{tagList.map((tag) => (
							<button
								type="button"
								key={tag}
								className={tag === selectedTag ? styles.active : ""}
								onClick={() => setSelectedTag(tag)}
								aria-pressed={tag === selectedTag}
								aria-label={`${tag} 태그로 필터링`}
							>
								{tag}
							</button>
						))}
					</fieldset>
				</section>
			)}
		</header>
	);
}
