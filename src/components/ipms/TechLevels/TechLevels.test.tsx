import React from "react";

import TechLevels from "./TechLevels";
import { render } from "setupTests";

describe("TechLevels", () => {
  it("renders with default props", () => {
    render(<TechLevels />);
  });
});
