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
          cargoCapacity: 0,
          speed: 0,
          amount: 0,
          ratio: 0,
          type: "civil"
        }}
      />
    );
  });
});
