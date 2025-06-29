import ProjectCard from "components/common/ProjectCard";
import { projects } from "data/project";
import Link from "next/link";
import styles from "./Project.module.scss";

export default function Project() {
	return (
		<section className={styles.projectContainer} id="project">
			<h1>
				<Link href={"Project"}>
					<span>Project</span>
					<svg
						role="img"
						viewBox="0 0 20 20"
						width={0}
						height={0}
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>arrow right</title>
						<path
							fill="currentColor"
							d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
						/>
					</svg>
				</Link>
			</h1>
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
