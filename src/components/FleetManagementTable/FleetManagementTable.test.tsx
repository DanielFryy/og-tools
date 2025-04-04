import React from "react";

import FleetManagementTable from "./FleetManagementTable";
import { render } from "setupTests";

describe("FleetManagementTable", () => {
  it("renders with default props", () => {
    render(<FleetManagementTable />);
  });
});
