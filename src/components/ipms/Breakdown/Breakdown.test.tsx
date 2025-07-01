import React from "react";

import Breakdown from "./Breakdown";
import { render } from "setupTests";

describe("Breakdown", () => {
  it("renders with default props", () => {
    render(<Breakdown />);
  });
});
