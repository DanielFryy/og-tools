import React from "react";

import BaseUnitCell from "./BaseUnitCell";
import { render } from "setupTests";

describe("BaseUnitCell", () => {
  it("renders with default props", () => {
    render(
      <BaseUnitCell
        baseUnitName="test"
        unit={{
          cost: { crystal: 0, deuterium: 0, metal: 0 },
          name: "test"
        }}
        onChange={() => {}}
      />
    );
  });
});
