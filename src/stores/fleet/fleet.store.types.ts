// FleetStore types and interfaces
import { FleetUnit } from "@/components/FleetManagementTable/FleetManagementTable.types";

export type FleetStore = {
  fleetUnits: FleetUnit[];
  baseShip: FleetUnit | null;
  setBaseShip: (shipName: string | null) => void;
  setAmount: (shipName: string, amount: number) => void;
  setRatio: (shipName: string, ratio: number) => void;
  resetAmounts: () => void;
};
