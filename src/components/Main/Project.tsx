import { projects } from "data/project";
import Image from "next/image";
import Link from "next/link";
import styles from "./Project.module.scss";

export default function Project() {
	return (
		<section className={styles.projectContainer} id="project">
			<h1>Project</h1>
			<div className={styles.projectCont}>
				{projects.map((project) => (
					<div key={project.id} className={styles.project}>
						<div className={styles.imgCont}>
							<div className={styles.imgBox}>
								<Image
									src={project.image}
									alt={project.alt}
									width={0}
									height={0}
									sizes="100%"
									style={{ width: "100%", height: "auto", objectFit: "cover" }}
								/>
								<div className={styles.hoverLayer}>
									<Link href={project.visit}>Visit</Link>
									<Link href={project.github}>github</Link>
								</div>
							</div>
						</div>
						<div className={styles.info}>
							<div className={styles.mobileLink}>
								<Link href={project.visit}>Visit</Link>
								<Link href={project.github}>github</Link>
							</div>

							<h2>{project.title}</h2>
							<p>{project.description}</p>

							<div className={styles.skills}>
								{project.skills.map((skill) => (
									<span key={skill}>{skill}</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
