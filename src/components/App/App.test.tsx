import React from "react";

import App from "./App";
import { render } from "setupTests";

describe("App", () => {
  it("renders with default props", () => {
    render(<App />);
  });
});
