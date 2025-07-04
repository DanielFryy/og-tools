import React from "react";

import RatioCell from "./RatioCell";
import { render } from "setupTests";

describe("RatioCell", () => {
  it("renders with default props", () => {
    render(
      <RatioCell
        baseUnitName="test"
        unit={{
          cost: { crystal: 0, deuterium: 0, metal: 0 },
          name: "test",
          cargoCapacity: 0,
          speed: 0,
          amount: 0,
          ratio: 0,
          type: "civil",
          enabled: false,
          shieldPower: 0,
          structuralIntegrity: 0,
          weaponPower: 0
        }}
        onChange={() => {}}
      />
    );
  });
});
