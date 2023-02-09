import { create } from "zustand";

interface SearhTypes {
   searchText: string;
   updateSearchText: (value: string) => void;
}

const useStore = create<SearhTypes>(set => ({
   searchText: "",
   updateSearchText: newText => set({ searchText: newText }),
}));
