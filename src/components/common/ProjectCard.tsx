"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ProjectCard.module.scss";

interface Project {
	id: string;
	title: string;
	image: string;
	alt: string;
	visit?: string;
	notion?: string;
	github: string;
	description: string;
	skills: string[];
	tags: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
	const pathname = usePathname();
	const isProjectPage = pathname === "/Project";

	return (
		<article
			className={`${isProjectPage ? styles.projectPage : styles.projectMain}`}
			aria-labelledby={`project-title-${project.id}`}
		>
			<div className={styles.imgCont}>
				<div className={styles.imgBox}>
					<Image
						src={project.image}
						alt={project.alt}
						width={0}
						height={0}
						sizes="100%"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
					<div className={styles.hoverLayer} aria-label="프로젝트 링크">
						{project.visit && (
							<Link
								href={project.visit}
								className={styles.visit}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${project.title} 프로젝트 사이트 방문 (새 창)`}
							>
								<svg
									role="img"
									viewBox="0 0 24 24"
									width={20}
									height={20}
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<title>외부 링크</title>
									<path
										fill="currentColor"
										d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z"
									/>
								</svg>
								<span>Visit</span>
							</Link>
						)}
						{project.notion && (
							<Link
								href={project.notion}
								className={styles.notion}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${project.title} 프로젝트 문서 보기 (새 창)`}
							>
								<svg
									role="img"
									viewBox="0 0 24 24"
									width={20}
									height={20}
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<title>Notion 문서</title>
									<path
										fill="currentColor"
										d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
									/>
								</svg>
								<span>Notion</span>
							</Link>
						)}
						<Link
							href={project.github}
							className={styles.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${project.title} GitHub 저장소 보기 (새 창)`}
						>
							<svg
								role="img"
								viewBox="0 0 24 24"
								width={20}
								height={20}
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<title>GitHub 저장소</title>
								<path
									fill="currentColor"
									d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								/>
							</svg>
							<span>Github</span>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.info}>
				<div className={styles.mobileLink} aria-label="프로젝트 링크 (모바일)">
					{project.visit && (
						<Link
							href={project.visit}
							className={styles.visit}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${project.title} 프로젝트 사이트 방문 (새 창)`}
						>
							Visit
						</Link>
					)}
					{project.notion && (
						<Link
							href={project.notion}
							className={styles.notion}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${project.title} 프로젝트 문서 보기 (새 창)`}
						>
							Notion
						</Link>
					)}
					<Link
						href={project.github}
						className={styles.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${project.title} GitHub 저장소 보기 (새 창)`}
					>
						GitHub
					</Link>
				</div>
				<h3 id={`project-title-${project.id}`}>{project.title}</h3>
				<p>{project.description}</p>
				<ul className={styles.skills} aria-label="사용된 기술 스택">
					{project.skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
		</article>
	);
}
