import { screen } from "@testing-library/react";
import React from "react";

import DefenseChart from "./DefenseChart";
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { render } from "setupTests";

const units: EnhancedDefense[] = [
  {
    name: "Rocket Launcher",
    type: "structure",
    cost: {
      metal: 2_000,
      crystal: 0,
      deuterium: 0
    },
    structuralIntegrity: 2_000,
    weaponPower: 80,
    shieldPower: 20,
    enabled: true,
    amount: 10,
    ratio: 1
  }
];

describe("DefenseChart", () => {
  it("renders with default props", () => {
    render(<DefenseChart units={[]} />);
  });

  it("renders charts when units have points data", () => {
    render(<DefenseChart units={units} />);

    expect(screen.getByText("Defense Points Distribution")).toBeTruthy();
    expect(screen.queryByText("No defense data available")).toBeNull();
  });
});
