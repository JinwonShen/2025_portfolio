import ProjectCard from "components/common/ProjectCard";
import { projects } from "data/project";
import Link from "next/link";
import styles from "./Project.module.scss";

export default function Project() {
	return (
		<section
			className={styles.projectContainer}
			id="project"
			aria-labelledby="project-heading"
		>
			<h2 id="project-heading">
				<Link href={"Project"} aria-label="프로젝트 섹션 - 상세 페이지로 이동">
					<span>Project →</span>
					<svg
						role="img"
						viewBox="0 0 20 20"
						width={0}
						height={0}
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<title>화살표 오른쪽</title>
						<path
							fill="currentColor"
							d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
						/>
					</svg>
				</Link>
			</h2>
			<div className={styles.projectCont}>
				{projects
					.filter((project) => project.tags.includes("#메인 프로젝트"))
					.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
			</div>
		</section>
	);
}
