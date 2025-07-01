import React from "react";

import SwitchCell from "./SwitchCell";
import { render } from "setupTests";

describe("SwitchCell", () => {
  it("renders with default props", () => {
    render(
      <SwitchCell
        baseUnitName="test"
        onChange={() => {}}
        unit={{
          cost: { crystal: 0, deuterium: 0, metal: 0 },
          name: "test",
          amount: 0,
          enabled: false,
          shieldPower: 0,
          structuralIntegrity: 0,
          weaponPower: 0,
          type: "civil"
        }}
      />
    );
  });
});
