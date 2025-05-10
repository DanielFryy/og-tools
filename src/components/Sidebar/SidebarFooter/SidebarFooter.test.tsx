import React from "react";

import SidebarFooter from "./SidebarFooter";
import { render } from "setupTests";

describe("SidebarFooter", () => {
  it("renders with default props", () => {
    render(<SidebarFooter />);
  });
});
