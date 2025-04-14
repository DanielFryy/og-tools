import React from "react";

import ThemeProvider from "./ThemeProvider";
import { render } from "setupTests";

describe("ThemeProvider", () => {
  it("renders with default props", () => {
    render(<ThemeProvider />);
  });
});
