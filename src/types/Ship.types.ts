// Ship types and interfaces
import { Unit } from "./Unit.types";

export interface Ship extends Unit {
  cargoCapacity: number;
  speed: number;
  type: "civil" | "combat";
}
