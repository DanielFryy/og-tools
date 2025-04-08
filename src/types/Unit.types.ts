// Unit types and interfaces

export interface Unit {
  name: string;
  cost: {
    metal: number;
    crystal: number;
    deuterium: number;
  };
}
