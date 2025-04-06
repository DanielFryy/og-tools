// Fleet store helper functions and data
import { Ship } from "./fleet.store.types";
import { FleetUnit } from "@/components/FleetManagementTable/FleetManagementTable.types";

const lightFighter: Ship = {
  name: "Light Fighter",
  resources: { metal: 3_000, crystal: 1_000, deuterium: 0 },
  cargoCapacity: 50,
  speed: 12_500,
  type: "combat"
} as const;

const heavyFighter: Ship = {
  name: "Heavy Fighter",
  resources: { metal: 6_000, crystal: 4_000, deuterium: 0 },
  cargoCapacity: 100,
  speed: 10_000,
  type: "combat"
} as const;

const cruiser: Ship = {
  name: "Cruiser",
  resources: { metal: 20_000, crystal: 7_000, deuterium: 2_000 },
  cargoCapacity: 800,
  speed: 15_000,
  type: "combat"
} as const;

const battleship: Ship = {
  name: "Battleship",
  resources: { metal: 45_000, crystal: 15_000, deuterium: 0 },
  cargoCapacity: 1_500,
  speed: 10_000,
  type: "combat"
} as const;

const battlecruiser: Ship = {
  name: "Battlecruiser",
  resources: { metal: 30_000, crystal: 40_000, deuterium: 15_000 },
  cargoCapacity: 750,
  speed: 10_000,
  type: "combat"
} as const;

const bomber: Ship = {
  name: "Bomber",
  resources: { metal: 50_000, crystal: 25_000, deuterium: 15_000 },
  cargoCapacity: 500,
  speed: 5_000,
  type: "combat"
} as const;

const destroyer: Ship = {
  name: "Destroyer",
  resources: { metal: 60_000, crystal: 50_000, deuterium: 15_000 },
  cargoCapacity: 2_000,
  speed: 5_000,
  type: "combat"
} as const;

const deathstar: Ship = {
  name: "Deathstar",
  resources: { metal: 5_000_000, crystal: 4_000_000, deuterium: 1_000_000 },
  cargoCapacity: 1_000_000,
  speed: 100,
  type: "combat"
} as const;

const reaper: Ship = {
  name: "Reaper",
  resources: { metal: 85_000, crystal: 55_000, deuterium: 20_000 },
  cargoCapacity: 10_000,
  speed: 7_000,
  type: "combat"
} as const;

const pathfinder: Ship = {
  name: "Pathfinder",
  resources: { metal: 8_000, crystal: 15_000, deuterium: 8_000 },
  cargoCapacity: 10_000,
  speed: 12_000,
  type: "combat"
} as const;

const smallCargo: Ship = {
  name: "Small Cargo",
  resources: { metal: 2_000, crystal: 2_000, deuterium: 0 },
  cargoCapacity: 5_000,
  speed: 10_000,
  type: "civil"
} as const;

const largeCargo: Ship = {
  name: "Large Cargo",
  resources: { metal: 6_000, crystal: 6_000, deuterium: 0 },
  cargoCapacity: 25_000,
  speed: 7_500,
  type: "civil"
} as const;

const colonyShip: Ship = {
  name: "Colony Ship",
  resources: { metal: 10_000, crystal: 20_000, deuterium: 10_000 },
  cargoCapacity: 7_500,
  speed: 2_500,
  type: "civil"
} as const;

const recycler: Ship = {
  name: "Recycler",
  resources: { metal: 10_000, crystal: 6_000, deuterium: 2_000 },
  cargoCapacity: 20_000,
  speed: 2_000,
  type: "civil"
} as const;

const espionageProbe: Ship = {
  name: "Espionage Probe",
  resources: { metal: 0, crystal: 1_000, deuterium: 0 },
  cargoCapacity: 0,
  speed: 100_000_000,
  type: "civil"
} as const;

const solarSatellite: Ship = {
  name: "Solar Satellite",
  resources: { metal: 0, crystal: 2_000, deuterium: 500 },
  cargoCapacity: 0,
  speed: 0,
  type: "civil"
} as const;

const crawler: Ship = {
  name: "Crawler",
  resources: { metal: 2_000, crystal: 2_000, deuterium: 1_000 },
  cargoCapacity: 0,
  speed: 0,
  type: "civil"
} as const;

export const combatShips: Ship[] = [
  lightFighter,
  heavyFighter,
  cruiser,
  battleship,
  battlecruiser,
  bomber,
  destroyer,
  deathstar,
  reaper,
  pathfinder
] as const;

export const civilShips: Ship[] = [
  smallCargo,
  largeCargo,
  colonyShip,
  recycler,
  espionageProbe,
  solarSatellite,
  crawler
] as const;

export const allShips: Ship[] = [...combatShips, ...civilShips] as const;

export const calculateFleetDistribution = (baseShip: FleetUnit, fleetUnits: FleetUnit[]) => {
  const { resources, amount: baseShipAmount } = baseShip;
  const { crystal: baseShipCrystal } = resources;
  // Calculate the total crystal available
  const totalCrystal = baseShipCrystal * baseShipAmount;

  // Distribute crystal evenly across all ships
  return fleetUnits.map(unit => {
    const { resources } = unit;
    const { crystal } = resources;

    // Skip ships with no crystal cost
    if (crystal === 0) return { ...unit, amount: 0 };

    // Calculate the number of ships based on the total crystal available
    const amount = Math.floor(totalCrystal / crystal);

    return { ...unit, amount };
  });
};
