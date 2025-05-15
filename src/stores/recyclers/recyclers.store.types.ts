// RecyclersStore types and interfaces
import { FreeEnhancedShip } from "@/stores/freeShips/freeShips.store.types";

export type RecyclersStore = {
  units: FreeEnhancedShip[];
  debrisFieldPercentage: number;
  isDeuteriumIncluded: boolean;
  recyclerCargoCapacity: number;
  setDebrisFieldPercentage: (percentage: number) => void;
  setIsDeuteriumIncluded: (isIncluded: boolean) => void;
  setRecyclerCargoCapacity: (capacity: number) => void;
  setAmount: (unitName: string, amount: number) => void;
  reset: () => void;
};
