// Defense types and interfaces
import { Unit } from "./Unit.types";

export interface BaseDefense extends Unit {
  type: "structure" | "dome" | "missile";
}

export interface Missile extends BaseDefense {
  type: "missile";
  subType: "anti-ballistic" | "interplanetary";
}

export type Defense = BaseDefense | Missile;
