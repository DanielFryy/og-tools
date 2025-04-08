import React from "react";

import DefenseManagementTable from "./DefenseManagementTable";
import { render } from "setupTests";

describe("DefenseManagementTable", () => {
  it("renders with default props", () => {
    render(<DefenseManagementTable />);
  });
});
