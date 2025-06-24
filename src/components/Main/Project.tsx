import ProjectCard from "components/common/ProjectCard";
import { projects } from "data/project";
import styles from "./Project.module.scss";

export default function Project() {
	return (
		<section className={styles.projectContainer} id="project">
			<h1>Project</h1>
			<div className={styles.projectCont}>
				{projects
					.filter((project) => project.tags.includes("#개인 프로젝트"))
					.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
			</div>
		</section>
	);
}
