import React from "react";

import ShipManagementTable from "./ShipManagementTable";
import { render } from "setupTests";

describe("ShipManagementTable", () => {
  it("renders with default props", () => {
    render(<ShipManagementTable />);
  });
});
