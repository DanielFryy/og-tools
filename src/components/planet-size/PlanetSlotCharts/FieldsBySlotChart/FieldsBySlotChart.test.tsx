import React from "react";

import FieldsBySlotChart from "./FieldsBySlotChart";
import { render } from "setupTests";

describe("FieldsBySlotChart", () => {
  it("renders with default props", () => {
    render(<FieldsBySlotChart />);
  });
});
