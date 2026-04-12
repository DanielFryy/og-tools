import { screen, within } from "@testing-library/react";
import React from "react";

import UnitsManagementTable from "./UnitsManagementTable";
import { CONSTANTS } from "@/config/constants";
import { useGlobalsStore } from "@/stores/globals/globals.store";
import { render } from "setupTests";

describe("UnitsManagementTable", () => {
  const units = CONSTANTS.SHIPS.COMBAT.filter(unit =>
    ["Light Fighter", "Reaper", "Pathfinder"].includes(unit.name)
  ).map(unit => ({
    ...unit,
    amount: 1,
    ratio: 1,
    enabled: true
  }));

  beforeEach(() => {
    localStorage.clear();
    useGlobalsStore.getState().reset();
  });

  it("renders with default props", () => {
    render(
      <UnitsManagementTable
        units={units}
        baseUnitName="Light Fighter"
        onAmountChange={() => {}}
        onBaseUnitChange={() => {}}
        onEnableChange={() => {}}
        title="test"
      />
    );
  });

  it("disables class-locked ship controls for none", () => {
    useGlobalsStore.getState().setSelectedPlayerClass("None");

    render(
      <UnitsManagementTable
        units={units}
        baseUnitName="Light Fighter"
        onAmountChange={() => {}}
        onBaseUnitChange={() => {}}
        onEnableChange={() => {}}
      />
    );

    const reaperRow = screen.getByText("Reaper").closest("tr");
    const pathfinderRow = screen.getByText("Pathfinder").closest("tr");

    expect(reaperRow).toBeTruthy();
    expect(pathfinderRow).toBeTruthy();
    expect(within(reaperRow!).queryByRole("switch")).toBeNull();
    expect(within(pathfinderRow!).queryByRole("switch")).toBeNull();
  });

  it("enables class-locked ship controls for all", () => {
    useGlobalsStore.getState().setSelectedPlayerClass("All");

    render(
      <UnitsManagementTable
        units={units}
        baseUnitName="Light Fighter"
        onAmountChange={() => {}}
        onBaseUnitChange={() => {}}
        onEnableChange={() => {}}
      />
    );

    const reaperRow = screen.getByText("Reaper").closest("tr");
    const pathfinderRow = screen.getByText("Pathfinder").closest("tr");

    expect(reaperRow).toBeTruthy();
    expect(pathfinderRow).toBeTruthy();
    expect(within(reaperRow!).queryByRole("switch")).toBeTruthy();
    expect(within(pathfinderRow!).queryByRole("switch")).toBeTruthy();
  });
});
