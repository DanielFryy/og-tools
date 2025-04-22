import React from "react";

import AppLayout from "./AppLayout";
import { render } from "setupTests";

describe("AppLayout", () => {
  it("renders with default props", () => {
    render(<AppLayout children={null} />);
  });
});
