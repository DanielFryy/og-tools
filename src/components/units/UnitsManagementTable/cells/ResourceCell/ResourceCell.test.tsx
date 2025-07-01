import React from "react";

import ResourceCell from "./ResourceCell";
import { render } from "setupTests";

describe("ResourceCell", () => {
  it("renders with default props", () => {
    render(
      <ResourceCell
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
        resourceType="metal"
      />
    );
  });
});
