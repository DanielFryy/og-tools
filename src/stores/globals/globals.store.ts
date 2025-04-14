import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialState } from "./globals.store.helpers";
import { GlobalsStore } from "./globals.store.types";
import { CONSTANTS } from "@/config/constants";

const { PLAYER_CLASSES } = CONSTANTS;

export const useGlobalsStore = create<GlobalsStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setSidebarOpen: value => {
        set({ sidebarOpen: value });
      },
      setSelectedPlayerClass: playerClassType => {
        const playerClass = PLAYER_CLASSES.find(playerClass => playerClass.type === playerClassType);
        if (!playerClass) return;
        set({ selectedPlayerClass: playerClass });
      },
      reset: () => {
        set(state => ({ ...state, ...initialState }));
      }
    }),
    { name: "globals" }
  )
);
