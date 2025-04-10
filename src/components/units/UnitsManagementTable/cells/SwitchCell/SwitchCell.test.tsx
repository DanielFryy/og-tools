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
          cargoCapacity: 0,
          speed: 0,
          amount: 0,
          ratio: 0,
          type: "civil",
          enabled: false
        }}
      />
    );
  });
});
