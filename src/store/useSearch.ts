import { create } from "zustand";

interface SearhTypes {
   searchText: string;
   updateSearchText: (value: string) => void;
}

export const useSearchStore = create<SearhTypes>(set => ({
   searchText: "keyboard",
   updateSearchText: newText => set({ searchText: newText }),
}));
