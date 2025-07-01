import React from "react";

import Empty from "./Empty";
import { render } from "setupTests";

describe("Empty", () => {
  it("renders with default props", () => {
    render(<Empty />);
  });
});
