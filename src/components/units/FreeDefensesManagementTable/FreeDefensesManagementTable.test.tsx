import React from "react";

import FreeDefensesManagementTable from "./FreeDefensesManagementTable";
import { render } from "setupTests";

describe("FreeDefensesManagementTable", () => {
  it("renders with default props", () => {
    render(<FreeDefensesManagementTable />);
  });
});
