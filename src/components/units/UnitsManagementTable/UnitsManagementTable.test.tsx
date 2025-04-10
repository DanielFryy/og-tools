import React from "react";

import UnitsManagementTable from "./UnitsManagementTable";
import { render } from "setupTests";

describe("UnitsManagementTable", () => {
  it("renders with default props", () => {
    render(
      <UnitsManagementTable
        units={[]}
        baseUnitName="test"
        onAmountChange={() => {}}
        onBaseUnitChange={() => {}}
        onEnableChange={() => {}}
        title="test"
      />
    );
  });
});
