import React from "react";

import SidebarProvider from "./SidebarProvider";
import { render } from "setupTests";

describe("SidebarProvider", () => {
  it("renders with default props", () => {
    render(
      <SidebarProvider>
        <div />
      </SidebarProvider>
    );
  });
});
