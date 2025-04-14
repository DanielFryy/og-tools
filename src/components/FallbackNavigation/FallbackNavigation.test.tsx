import React from "react";

import FallbackNavigation from "./FallbackNavigation";
import { render } from "setupTests";

describe("FallbackNavigation", () => {
  it("renders with default props", () => {
    render(<FallbackNavigation />);
  });
});
