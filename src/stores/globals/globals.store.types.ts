// GlobalsStore types and interfaces
import { PlayerClass } from "@/types/Global.types";

export type GlobalsStore = {
  selectedPlayerClass: PlayerClass | null;
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  setSelectedPlayerClass: (playerClassType: string) => void;
  reset: () => void;
};
