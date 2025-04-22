import React from "react";

import HomePage from "./page";
import { render } from "setupTests";

describe("HomePage", () => {
  it("renders with default props", () => {
    render(<HomePage />);
  });
});
