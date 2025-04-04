import React from "react";

import AmountCell from "./AmountCell";
import { render } from "setupTests";

describe("AmountCell", () => {
  it("renders with default props", () => {
    render(
      <AmountCell
        baseShipName="test"
        fleetUnit={{ amount: 0, crystal: 0, deuterium: 0, metal: 0, name: "test", ratio: 0 }}
        onChange={() => {}}
      />
    );
  });
});
