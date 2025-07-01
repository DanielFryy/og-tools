import React from "react";

import AmountCell from "./AmountCell";
import { render } from "setupTests";

describe("AmountCell", () => {
  it("renders with default props", () => {
    render(
      <AmountCell
        baseUnitName="test"
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
        onChange={() => {}}
      />
    );
  });
});
