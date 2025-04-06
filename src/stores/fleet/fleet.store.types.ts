// FleetStore types and interfaces
import { FleetUnit } from "@/components/FleetManagementTable/FleetManagementTable.types";

export interface Ship {
  name: string;
  resources: {
    metal: number;
    crystal: number;
    deuterium: number;
  };
  cargoCapacity: number;
  speed: number;
  type: "civil" | "combat";
}

export type FleetStore = {
  fleetUnits: FleetUnit[];
  baseShip: FleetUnit | null;
  setBaseShip: (shipName: string | null) => void;
  setAmount: (shipName: string, amount: number) => void;
  resetAmounts: () => void;
};
