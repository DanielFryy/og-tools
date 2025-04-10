// GlobalsStore types and interfaces
import { PlayerClass } from "@/types/Global.types";

export type GlobalsStore = {
  selectedPlayerClass: PlayerClass | null;
  setSelectedPlayerClass: (playerClassType: string) => void;
  reset: () => void;
};
