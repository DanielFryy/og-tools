import React from "react";

import ShipsPage from "./ShipsPage";
import { render } from "setupTests";

describe("ShipsPage", () => {
  it("renders with default props", () => {
    render(<ShipsPage />);
  });
});
