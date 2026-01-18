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
				<p className={styles.subtitle}>UI Designer & Publisher</p>
				<p className={styles.description}>
					디자인과 개발 사이의 간극을 좁히고, 의도를 정확하게 구현하는 UI
					디자이너이자 퍼블리셔입니다. 웹 표준과 접근성을 준수하며, 작지만
					정밀한 마크업으로 프로젝트의 완성도를 높이는 것을 목표로 합니다.
					협업에서는 피드백을 적극 수용하며, 디자이너와 개발자 사이의 소통을
					원활하게 연결하는 역할이 강점이라 말할 수 있습니다.
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
