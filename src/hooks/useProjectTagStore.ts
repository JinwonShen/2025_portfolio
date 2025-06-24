import { create } from "zustand";

type ProjectTagStore = {
	selectedTag: string;
	setSelectedTag: (tag: string) => void;
};

export const useProjectTagStore = create<ProjectTagStore>((set) => ({
	selectedTag: "#All",
	setSelectedTag: (tag) => set({ selectedTag: tag }),
}));
