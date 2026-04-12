import { create } from "zustand";
import { persist } from "zustand/middleware";

import { getPlayerClassByType, initialState, normalizeGlobalsState } from "./globals.store.helpers";
import { GlobalsStore } from "./globals.store.types";

export const useGlobalsStore = create<GlobalsStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setSidebarOpen: value => {
        set({ sidebarOpen: value });
      },
      setSelectedPlayerClass: playerClassType => {
        const playerClass = getPlayerClassByType(playerClassType);
        set({ selectedPlayerClass: playerClass });
      },
      setFavoriteRoute: favoriteRoute => {
        const { favoriteRoutes } = get();
        const alreadyAdded = favoriteRoutes.some(item => item.route === favoriteRoute.route);
        if (alreadyAdded) return;
        const updatedFavoriteRoutes = [...favoriteRoutes, favoriteRoute];
        set({ favoriteRoutes: updatedFavoriteRoutes });
      },
      removeFavoriteRoute: favoriteRoute => {
        const { favoriteRoutes } = get();
        const updatedFavoriteRoutes = favoriteRoutes.filter(item => item.route !== favoriteRoute.route);
        set({ favoriteRoutes: updatedFavoriteRoutes });
      },
      reset: () => {
        set(state => ({ ...state, ...initialState }));
      }
    }),
    {
      name: "globals",
      version: 1,
      migrate: persistedState => normalizeGlobalsState(persistedState as Partial<typeof initialState> | null),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...normalizeGlobalsState(persistedState as Partial<typeof initialState> | null)
      })
    }
  )
);
