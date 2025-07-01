import React from "react";

import PointsCell from "./PointsCell";
import { render } from "setupTests";

describe("PointsCell", () => {
  it("renders with default props", () => {
    render(
      <PointsCell
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
