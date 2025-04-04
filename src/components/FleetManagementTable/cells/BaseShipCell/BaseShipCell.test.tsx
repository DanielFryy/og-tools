import React from "react";

import BaseShipCell from "./BaseShipCell";
import { render } from "setupTests";

describe("BaseShipCell", () => {
  it("renders with default props", () => {
    render(
      <BaseShipCell
        baseShipName="test"
        fleetUnit={{ amount: 0, crystal: 0, deuterium: 0, metal: 0, name: "test", ratio: 0 }}
        onChange={() => {}}
      />
    );
  });
});
