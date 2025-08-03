"use client";

import Footer from "components/Footer/Footer";
import ProjectCard from "components/common/ProjectCard";
import { projects } from "data/project";
import { useActiveSection } from "hooks/useActiveSection";
import { useProjectTagStore } from "hooks/useProjectTagStore";
import { useEffect } from "react";
import styles from "./page.module.scss";

export default function ProjectPage() {
	const { selectedTag } = useProjectTagStore();
	const setActiveSection = useActiveSection((state) => state.setActiveSection);

	useEffect(() => {
		setActiveSection("project");

		// 페이지 로드 시 스크롤을 최상단으로 이동
		const scrollToTop = async () => {
			try {
				// Lenis 인스턴스 가져오기
				const { getLenisInstance } = await import("../../hooks/useLenis");
				const lenis = getLenisInstance();

				if (lenis) {
					// Lenis를 사용한 부드러운 스크롤
					lenis.scrollTo(0, { immediate: true });
				} else {
					// Lenis가 없는 경우 일반 스크롤
					window.scrollTo(0, 0);
				}
			} catch (error) {
				// 에러 발생 시 기본 스크롤
				window.scrollTo(0, 0);
			}
		};

		// 약간의 지연을 주어 페이지 렌더링 완료 후 스크롤
		const timer = setTimeout(scrollToTop, 100);

		return () => clearTimeout(timer);
	}, [setActiveSection]);

	const filteredProjects =
		selectedTag === "#All"
			? projects
			: projects.filter((project) => project.tags.includes(selectedTag));
	return (
		<main className={styles.container}>
			<section>
				{filteredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</section>
			<Footer />
		</main>
	);
}
