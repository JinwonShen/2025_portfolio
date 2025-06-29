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
