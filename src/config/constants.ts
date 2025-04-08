// This file contains the constants used throughout the application.
import { Defense } from "@/types/Defense.types";
import { Ship } from "@/types/Ship.types";

// Ships

const lightFighter: Ship = {
  name: "Light Fighter",
  cost: { metal: 3_000, crystal: 1_000, deuterium: 0 },
  cargoCapacity: 50,
  speed: 12_500,
  type: "combat"
} as const;

const heavyFighter: Ship = {
  name: "Heavy Fighter",
  cost: { metal: 6_000, crystal: 4_000, deuterium: 0 },
  cargoCapacity: 100,
  speed: 10_000,
  type: "combat"
} as const;

const cruiser: Ship = {
  name: "Cruiser",
  cost: { metal: 20_000, crystal: 7_000, deuterium: 2_000 },
  cargoCapacity: 800,
  speed: 15_000,
  type: "combat"
} as const;

const battleship: Ship = {
  name: "Battleship",
  cost: { metal: 45_000, crystal: 15_000, deuterium: 0 },
  cargoCapacity: 1_500,
  speed: 10_000,
  type: "combat"
} as const;

const battlecruiser: Ship = {
  name: "Battlecruiser",
  cost: { metal: 30_000, crystal: 40_000, deuterium: 15_000 },
  cargoCapacity: 750,
  speed: 10_000,
  type: "combat"
} as const;

const bomber: Ship = {
  name: "Bomber",
  cost: { metal: 50_000, crystal: 25_000, deuterium: 15_000 },
  cargoCapacity: 500,
  speed: 5_000,
  type: "combat"
} as const;

const destroyer: Ship = {
  name: "Destroyer",
  cost: { metal: 60_000, crystal: 50_000, deuterium: 15_000 },
  cargoCapacity: 2_000,
  speed: 5_000,
  type: "combat"
} as const;

const deathstar: Ship = {
  name: "Deathstar",
  cost: { metal: 5_000_000, crystal: 4_000_000, deuterium: 1_000_000 },
  cargoCapacity: 1_000_000,
  speed: 100,
  type: "combat"
} as const;

const reaper: Ship = {
  name: "Reaper",
  cost: { metal: 85_000, crystal: 55_000, deuterium: 20_000 },
  cargoCapacity: 10_000,
  speed: 7_000,
  type: "combat"
} as const;

const pathfinder: Ship = {
  name: "Pathfinder",
  cost: { metal: 8_000, crystal: 15_000, deuterium: 8_000 },
  cargoCapacity: 10_000,
  speed: 12_000,
  type: "combat"
} as const;

const smallCargo: Ship = {
  name: "Small Cargo",
  cost: { metal: 2_000, crystal: 2_000, deuterium: 0 },
  cargoCapacity: 5_000,
  speed: 10_000,
  type: "civil"
} as const;

const largeCargo: Ship = {
  name: "Large Cargo",
  cost: { metal: 6_000, crystal: 6_000, deuterium: 0 },
  cargoCapacity: 25_000,
  speed: 7_500,
  type: "civil"
} as const;

const colonyShip: Ship = {
  name: "Colony Ship",
  cost: { metal: 10_000, crystal: 20_000, deuterium: 10_000 },
  cargoCapacity: 7_500,
  speed: 2_500,
  type: "civil"
} as const;

const recycler: Ship = {
  name: "Recycler",
  cost: { metal: 10_000, crystal: 6_000, deuterium: 2_000 },
  cargoCapacity: 20_000,
  speed: 2_000,
  type: "civil"
} as const;

const espionageProbe: Ship = {
  name: "Espionage Probe",
  cost: { metal: 0, crystal: 1_000, deuterium: 0 },
  cargoCapacity: 0,
  speed: 100_000_000,
  type: "civil"
} as const;

const solarSatellite: Ship = {
  name: "Solar Satellite",
  cost: { metal: 0, crystal: 2_000, deuterium: 500 },
  cargoCapacity: 0,
  speed: 0,
  type: "civil"
} as const;

const crawler: Ship = {
  name: "Crawler",
  cost: { metal: 2_000, crystal: 2_000, deuterium: 1_000 },
  cargoCapacity: 0,
  speed: 0,
  type: "civil"
} as const;

const combatShips: Ship[] = [
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

const civilShips: Ship[] = [
  smallCargo,
  largeCargo,
  colonyShip,
  recycler,
  espionageProbe,
  solarSatellite,
  crawler
] as const;

const allShips: Ship[] = [...combatShips, ...civilShips] as const;

// Defenses

const rocketLauncher: Defense = {
  name: "Rocket Launcher",
  cost: { metal: 2_000, crystal: 0, deuterium: 0 }
} as const;

const lightLaser: Defense = {
  name: "Light Laser",
  cost: { metal: 1_500, crystal: 500, deuterium: 0 }
} as const;

const heavyLaser: Defense = {
  name: "Heavy Laser",
  cost: { metal: 6_000, crystal: 2_000, deuterium: 0 }
} as const;

const gaussCannon: Defense = {
  name: "Gauss Cannon",
  cost: { metal: 20_000, crystal: 15_000, deuterium: 2_000 }
} as const;

const ionCannon: Defense = {
  name: "Ion Cannon",
  cost: { metal: 5_000, crystal: 3_000, deuterium: 0 }
} as const;

const plasmaTurret: Defense = {
  name: "Plasma Turret",
  cost: { metal: 50_000, crystal: 50_000, deuterium: 30_000 }
} as const;

const allDefenses: Defense[] = [
  rocketLauncher,
  lightLaser,
  heavyLaser,
  gaussCannon,
  ionCannon,
  plasmaTurret,
  deathstar
] as const;

export const CONSTANTS = {
  SHIPS: {
    COMBAT: combatShips,
    CIVIL: civilShips,
    ALL: allShips
  },
  DEFENSES: allDefenses
} as const;
