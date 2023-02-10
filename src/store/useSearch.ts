import { create } from "zustand";
import { SearhTypes } from "../types/types";

export const useSearchStore = create<SearhTypes>(set => ({
   searchText: "keyboard",
   updateSearchText: newText => set({ searchText: newText }),
}));
