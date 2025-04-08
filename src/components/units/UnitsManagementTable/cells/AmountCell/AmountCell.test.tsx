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
          cargoCapacity: 0,
          speed: 0,
          amount: 0,
          ratio: 0,
          type: "civil"
        }}
        onChange={() => {}}
      />
    );
  });
});
