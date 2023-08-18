import { create } from "zustand";

interface Choice  {
    isOpen: boolean;
    setIsOpen: () => void;
}

export const useChoices = create<Choice>((set) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({isOpen: !state.isOpen}))
}))