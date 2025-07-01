import React from "react";

import CallToAction from "./CallToAction";
import { render } from "setupTests";

describe("CallToAction", () => {
  it("renders with default props", () => {
    render(<CallToAction />);
  });
});
