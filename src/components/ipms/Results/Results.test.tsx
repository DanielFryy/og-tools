import React from "react";

import Results from "./Results";
import { render } from "setupTests";

describe("Results", () => {
  it("renders with default props", () => {
    render(<Results />);
  });
});
