// Unit types and interfaces

export interface Unit {
  name: string;
  cost: UnitCost;
}

export interface UnitCost {
  metal: number;
  crystal: number;
  deuterium: number;
}
