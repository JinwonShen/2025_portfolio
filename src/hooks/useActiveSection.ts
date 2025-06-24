import { create } from "zustand";

interface ActiveSectionState {
	activeSection: string | null;
	setActiveSection: (section: string | null) => void;
}

export const useActiveSection = create<ActiveSectionState>((set) => ({
	activeSection: null,
	setActiveSection: (section) => set({ activeSection: section }),
}));
