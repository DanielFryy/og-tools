import { create } from "zustand";

import { initialState } from "./globals.store.helpers";
import { GlobalsStore } from "./globals.store.types";
import { CONSTANTS } from "@/config/constants";

export const useGlobalsStore = create<GlobalsStore>((set, get) => ({
  selectedPlayerClass: null,
  setSelectedPlayerClass: playerClassType => {
    const playerClass = CONSTANTS.PLAYER_CLASSES.find(playerClass => playerClass.type === playerClassType);
    if (!playerClass) return;
    set({ selectedPlayerClass: playerClass });
  },
  reset: () => {
    set(state => ({ ...state, ...initialState }));
  }
}));
