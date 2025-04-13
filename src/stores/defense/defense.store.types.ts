// DefenseStore types and interfaces
import { EnhancedUnit, UnitStore } from "@/types/Stores.types";

export type EnhancedDefense = EnhancedUnit<"defense">;

export type DefenseStore = UnitStore<EnhancedDefense>;
