import React from "react";

import StaticShipsTable from "./StaticShipsTable";
import { render } from "setupTests";

describe("StaticShipsTable", () => {
  it("renders with default props", () => {
    render(<StaticShipsTable />);
  });
});
