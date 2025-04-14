import React from "react";

import UnderConstructionPage from "./UnderConstructionPage";
import { render } from "setupTests";

describe("UnderConstructionPage", () => {
  it("renders with default props", () => {
    render(<UnderConstructionPage structure="Test" />);
  });
});
