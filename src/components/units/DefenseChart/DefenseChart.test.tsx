import React from "react";

import DefenseChart from "./DefenseChart";
import { render } from "setupTests";

describe("DefenseChart", () => {
  it("renders with default props", () => {
    render(<DefenseChart units={[]} />);
  });
});
