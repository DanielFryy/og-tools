// Unit types and interfaces

export interface Unit {
  name: string;
  cost: UnitCost;
  structuralIntegrity: number;
  weaponPower: number;
  shieldPower: number;
}

export interface UnitCost {
  metal: number;
  crystal: number;
  deuterium: number;
}
