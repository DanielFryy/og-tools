import React from "react";

import Information from "./Information";
import { render } from "setupTests";

describe("Information (planet-size)", () => {
  it("renders with default props", () => {
    render(<Information />);
  });
});
