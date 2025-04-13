// ShipStore types and interfaces
import { EnhancedUnit, UnitStore } from "@/types/Stores.types";

export type EnhancedShip = EnhancedUnit<"ship">;

export type ShipStore = UnitStore<EnhancedShip>;
