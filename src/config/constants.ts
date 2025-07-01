// This file contains the constants used throughout the application.
import { Defense, Missile } from "@/types/Defense.types";
import { PlayerClass } from "@/types/Global.types";
import { Ship } from "@/types/Ship.types";

// Ships
const lightFighter: Ship = {
  name: "Light Fighter",
  cost: { metal: 3_000, crystal: 1_000, deuterium: 0 },
  cargoCapacity: 50,
  speed: 12_500,
  type: "combat",
  structuralIntegrity: 4_000,
  weaponPower: 50,
  shieldPower: 10
} as const;

const heavyFighter: Ship = {
  name: "Heavy Fighter",
  cost: { metal: 6_000, crystal: 4_000, deuterium: 0 },
  cargoCapacity: 100,
  speed: 10_000,
  type: "combat",
  structuralIntegrity: 10_000,
  weaponPower: 150,
  shieldPower: 25
} as const;

const cruiser: Ship = {
  name: "Cruiser",
  cost: { metal: 20_000, crystal: 7_000, deuterium: 2_000 },
  cargoCapacity: 800,
  speed: 15_000,
  type: "combat",
  structuralIntegrity: 27_000,
  weaponPower: 400,
  shieldPower: 50
} as const;

const battleship: Ship = {
  name: "Battleship",
  cost: { metal: 45_000, crystal: 15_000, deuterium: 0 },
  cargoCapacity: 1_500,
  speed: 10_000,
  type: "combat",
  structuralIntegrity: 60_000,
  weaponPower: 1_000,
  shieldPower: 200
} as const;

const battlecruiser: Ship = {
  name: "Battlecruiser",
  cost: { metal: 30_000, crystal: 40_000, deuterium: 15_000 },
  cargoCapacity: 750,
  speed: 10_000,
  type: "combat",
  structuralIntegrity: 70_000,
  weaponPower: 700,
  shieldPower: 400
} as const;

const bomber: Ship = {
  name: "Bomber",
  cost: { metal: 50_000, crystal: 25_000, deuterium: 15_000 },
  cargoCapacity: 500,
  speed: 5_000,
  type: "combat",
  structuralIntegrity: 75_000,
  weaponPower: 1_000,
  shieldPower: 500
} as const;

const destroyer: Ship = {
  name: "Destroyer",
  cost: { metal: 60_000, crystal: 50_000, deuterium: 15_000 },
  cargoCapacity: 2_000,
  speed: 5_000,
  type: "combat",
  structuralIntegrity: 110_000,
  weaponPower: 2_000,
  shieldPower: 500
} as const;

const deathstar: Ship = {
  name: "Deathstar",
  cost: { metal: 5_000_000, crystal: 4_000_000, deuterium: 1_000_000 },
  cargoCapacity: 1_000_000,
  speed: 100,
  type: "combat",
  structuralIntegrity: 9_000_000,
  weaponPower: 200_000,
  shieldPower: 50_000
} as const;

const reaper: Ship = {
  name: "Reaper",
  cost: { metal: 85_000, crystal: 55_000, deuterium: 20_000 },
  cargoCapacity: 10_000,
  speed: 7_000,
  type: "combat",
  structuralIntegrity: 140_000,
  weaponPower: 2_800,
  shieldPower: 700
} as const;

const pathfinder: Ship = {
  name: "Pathfinder",
  cost: { metal: 8_000, crystal: 15_000, deuterium: 8_000 },
  cargoCapacity: 10_000,
  speed: 12_000,
  type: "combat",
  structuralIntegrity: 23_000,
  weaponPower: 200,
  shieldPower: 100
} as const;

const smallCargo: Ship = {
  name: "Small Cargo",
  cost: { metal: 2_000, crystal: 2_000, deuterium: 0 },
  cargoCapacity: 5_000,
  speed: 10_000,
  type: "civil",
  structuralIntegrity: 4_000,
  weaponPower: 5,
  shieldPower: 10
} as const;

const largeCargo: Ship = {
  name: "Large Cargo",
  cost: { metal: 6_000, crystal: 6_000, deuterium: 0 },
  cargoCapacity: 25_000,
  speed: 7_500,
  type: "civil",
  structuralIntegrity: 12_000,
  weaponPower: 5,
  shieldPower: 25
} as const;

const colonyShip: Ship = {
  name: "Colony Ship",
  cost: { metal: 10_000, crystal: 20_000, deuterium: 10_000 },
  cargoCapacity: 7_500,
  speed: 2_500,
  type: "civil",
  structuralIntegrity: 30_000,
  weaponPower: 50,
  shieldPower: 100
} as const;

export const RECYCLER: Ship = {
  name: "Recycler",
  cost: { metal: 10_000, crystal: 6_000, deuterium: 2_000 },
  cargoCapacity: 20_000,
  speed: 2_000,
  type: "civil",
  structuralIntegrity: 16_000,
  weaponPower: 1,
  shieldPower: 10
} as const;

const espionageProbe: Ship = {
  name: "Espionage Probe",
  cost: { metal: 0, crystal: 1_000, deuterium: 0 },
  cargoCapacity: 0,
  speed: 100_000_000,
  type: "civil",
  structuralIntegrity: 1_000,
  weaponPower: 0,
  shieldPower: 0
} as const;

const solarSatellite: Ship = {
  name: "Solar Satellite",
  cost: { metal: 0, crystal: 2_000, deuterium: 500 },
  cargoCapacity: 0,
  speed: 0,
  type: "civil",
  structuralIntegrity: 2_000,
  weaponPower: 1,
  shieldPower: 1
} as const;

const crawler: Ship = {
  name: "Crawler",
  cost: { metal: 2_000, crystal: 2_000, deuterium: 1_000 },
  cargoCapacity: 0,
  speed: 0,
  type: "civil",
  structuralIntegrity: 4_000,
  weaponPower: 1,
  shieldPower: 1
} as const;

// Ships that can't be moved just like defenses
const staticShips: Ship[] = [solarSatellite, crawler] as const;

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
  RECYCLER,
  espionageProbe,
  solarSatellite,
  crawler
] as const;

const allShips: Ship[] = [...combatShips, ...civilShips] as const;

// Defenses
const rocketLauncher: Defense = {
  name: "Rocket Launcher",
  cost: { metal: 2_000, crystal: 0, deuterium: 0 },
  type: "structure",
  structuralIntegrity: 2_000,
  weaponPower: 80,
  shieldPower: 20
} as const;

const lightLaser: Defense = {
  name: "Light Laser",
  cost: { metal: 1_500, crystal: 500, deuterium: 0 },
  type: "structure",
  structuralIntegrity: 2_000,
  weaponPower: 100,
  shieldPower: 25
} as const;

const heavyLaser: Defense = {
  name: "Heavy Laser",
  cost: { metal: 6_000, crystal: 2_000, deuterium: 0 },
  type: "structure",
  structuralIntegrity: 8_000,
  weaponPower: 250,
  shieldPower: 100
} as const;

const gaussCannon: Defense = {
  name: "Gauss Cannon",
  cost: { metal: 20_000, crystal: 15_000, deuterium: 2_000 },
  type: "structure",
  structuralIntegrity: 35_000,
  weaponPower: 1_100,
  shieldPower: 200
} as const;

const ionCannon: Defense = {
  name: "Ion Cannon",
  cost: { metal: 5_000, crystal: 3_000, deuterium: 0 },
  type: "structure",
  structuralIntegrity: 8_000,
  weaponPower: 150,
  shieldPower: 500
} as const;

const plasmaTurret: Defense = {
  name: "Plasma Turret",
  cost: { metal: 50_000, crystal: 50_000, deuterium: 30_000 },
  type: "structure",
  structuralIntegrity: 100_000,
  weaponPower: 3_000,
  shieldPower: 300
} as const;

const smallShieldDome: Defense = {
  name: "Small Shield Dome",
  cost: { metal: 10_000, crystal: 10_000, deuterium: 0 },
  type: "dome",
  structuralIntegrity: 20_000,
  weaponPower: 1,
  shieldPower: 2_000
} as const;

const largeShieldDome: Defense = {
  name: "Large Shield Dome",
  cost: { metal: 50_000, crystal: 50_000, deuterium: 0 },
  type: "dome",
  structuralIntegrity: 100_000,
  weaponPower: 1,
  shieldPower: 10_000
} as const;

export const ANTI_BALLISTIC_MISSILES: Missile = {
  name: "Anti-Ballistic Missiles",
  cost: { metal: 8_000, crystal: 0, deuterium: 2_000 },
  type: "missile",
  subType: "anti-ballistic",
  structuralIntegrity: 8_000,
  weaponPower: 1,
  shieldPower: 1
} as const;

export const INTERPLANETARY_MISSILES: Missile = {
  name: "Interplanetary Missiles",
  cost: { metal: 12_000, crystal: 2_500, deuterium: 10_000 },
  type: "missile",
  subType: "interplanetary",
  structuralIntegrity: 15_000,
  weaponPower: 12_000,
  shieldPower: 1
} as const;

const mainDefenses: Defense[] = [rocketLauncher, lightLaser, heavyLaser, gaussCannon, ionCannon, plasmaTurret] as const;

const shieldDefenses: Defense[] = [smallShieldDome, largeShieldDome] as const;

const missileDefenses: Defense[] = [ANTI_BALLISTIC_MISSILES, INTERPLANETARY_MISSILES] as const;

const allDefenses: Defense[] = [...mainDefenses, ...shieldDefenses, ...missileDefenses] as const;

// @ts-ignore deathstar is a ship but also a defense in this case the type is irrelevant
const enhancedDefenses: Defense[] = [...mainDefenses, deathstar] as const;

// Player Classes
const collector: PlayerClass = {
  type: "Collector",
  bonuses: []
} as const;

const general: PlayerClass = {
  type: "General",
  bonuses: []
} as const;

const discoverer: PlayerClass = {
  type: "Discoverer",
  bonuses: []
} as const;

const playerClasses: PlayerClass[] = [collector, general, discoverer] as const;

export const CONSTANTS = {
  SHIPS: {
    STATIC: staticShips,
    COMBAT: combatShips,
    CIVIL: civilShips,
    ALL: allShips
  },
  DEFENSES: {
    MAIN: mainDefenses,
    SHIELD: shieldDefenses,
    MISSILE: missileDefenses,
    ALL: allDefenses,
    ENHANCED: enhancedDefenses
  },
  PLAYER_CLASSES: playerClasses
} as const;
