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
          cargoCapacity: 0,
          speed: 0,
          amount: 0,
          ratio: 0,
          type: "civil",
          enabled: false
        }}
        resourceType="metal"
      />
    );
  });
});
