import React from "react";

import SidebarHeader from "./SidebarHeader";
import { render } from "setupTests";

describe("SidebarHeader", () => {
  it("renders with default props", () => {
    render(<SidebarHeader />);
  });
});
