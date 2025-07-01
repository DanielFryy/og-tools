import React from "react";

import Calculations from "./Calculations";
import { render } from "setupTests";

describe("Calculations", () => {
  it("renders with default props", () => {
    render(<Calculations />);
  });
});
