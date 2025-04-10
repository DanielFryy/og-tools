// Global types and interfaces
export type PlayerClassType = "Collector" | "General" | "Discoverer";

export interface PlayerClass {
  type: PlayerClassType;
  bonuses: string[];
}

export type AllianceClassType = "Traders" | "Warriors" | "Researchers";

export interface AllianceClass {
  type: AllianceClassType;
  bonuses: string[];
}
