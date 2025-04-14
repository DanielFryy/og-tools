import React from "react";

import Sidebar from "./Sidebar";
import { render } from "setupTests";

describe("Sidebar", () => {
  it("renders with default props", () => {
    render(<Sidebar />);
  });
});
