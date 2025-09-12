import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialState } from "./planet-size.store.helpers";
import { PlanetSizeStore } from "./planet-size.store.types";

export const usePlanetSizeStore = create<PlanetSizeStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setPlanetSlot: slot => {
        set({ planetSlot: slot });
      },
      setDiscovererClassBonus: enabled => {
        set({ discovererClassBonus: enabled });
      },
      setResearchersAllianceBonus: enabled => {
        set({ researchersAllianceBonus: enabled });
      },
      setKaeleshDiscovererEnhancementLevel: level => {
        set({ kaeleshDiscovererEnhancementLevel: level });
      },
      setUniverseBonus: bonus => {
        set({ universeBonus: bonus });
      },
      reset: () => {
        set(state => ({ ...state, ...initialState }));
      }
    }),
    { name: "planet-size-store" }
  )
);
