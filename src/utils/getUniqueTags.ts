import { projects } from "data/project";

export const getUniqueTags = () => {
	const allTags = projects.flatMap((project) => project.tags);
	const uniqueTags = Array.from(new Set(allTags));
	return ["#All", ...uniqueTags];
};
