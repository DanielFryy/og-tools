// PlanetSizeStore types and interfaces

export type PlanetSizeStore = {
  planetSlot: string;
  discovererClassBonus: boolean;
  researchersAllianceBonus: boolean;
  kaeleshDiscovererEnhancementLevel: number;
  universeBonus: number;
  setPlanetSlot: (slot: string) => void;
  setDiscovererClassBonus: (enabled: boolean) => void;
  setResearchersAllianceBonus: (enabled: boolean) => void;
  setKaeleshDiscovererEnhancementLevel: (level: number) => void;
  setUniverseBonus: (bonus: number) => void;
  reset: () => void;
};
