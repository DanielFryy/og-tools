import { describe, expect, it } from "vitest";

import { calculateTotals } from "./utils";
import { CONSTANTS } from "@/config/constants";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

const units: EnhancedShip[] = CONSTANTS.SHIPS.COMBAT.filter(unit =>
  ["Light Fighter", "Reaper", "Pathfinder"].includes(unit.name)
).map(unit => ({
  ...unit,
  amount: 1,
  ratio: 1,
  enabled: true
}));

describe("calculateTotals", () => {
  it("excludes class-locked ships for none", () => {
    expect(calculateTotals(units, "None", false)).toEqual({
      amount: 1,
      metal: 3_000,
      crystal: 1_000,
      deuterium: 0
    });
  });

  it("excludes class-locked ships for collector", () => {
    expect(calculateTotals(units, "Collector", false)).toEqual({
      amount: 1,
      metal: 3_000,
      crystal: 1_000,
      deuterium: 0
    });
  });

  it("includes only reaper for general", () => {
    expect(calculateTotals(units, "General", false)).toEqual({
      amount: 2,
      metal: 88_000,
      crystal: 56_000,
      deuterium: 20_000
    });
  });

  it("includes only pathfinder for discoverer", () => {
    expect(calculateTotals(units, "Discoverer", false)).toEqual({
      amount: 2,
      metal: 11_000,
      crystal: 16_000,
      deuterium: 8_000
    });
  });

  it("includes both class-locked ships for all", () => {
    expect(calculateTotals(units, "All", false)).toEqual({
      amount: 3,
      metal: 96_000,
      crystal: 71_000,
      deuterium: 28_000
    });
  });
});
