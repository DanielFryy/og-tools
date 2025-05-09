import React from "react";

import EmptyState from "./EmptyState";
import { render } from "setupTests";

describe("EmptyState", () => {
  it("renders with default props", () => {
    render(<EmptyState />);
  });
});
