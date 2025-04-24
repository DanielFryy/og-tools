import React from "react";

import FreeShipsManagementTable from "./FreeShipsManagementTable";
import { render } from "setupTests";

describe("FreeShipsManagementTable", () => {
  it("renders with default props", () => {
    render(<FreeShipsManagementTable />);
  });
});
