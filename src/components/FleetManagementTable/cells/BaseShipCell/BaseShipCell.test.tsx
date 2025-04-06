import React from "react";

import BaseShipCell from "./BaseShipCell";
import { render } from "setupTests";

describe("BaseShipCell", () => {
  it("renders with default props", () => {
    render(
      <BaseShipCell
        baseShipName="test"
        ship={{
          resources: { crystal: 0, deuterium: 0, metal: 0 },
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
