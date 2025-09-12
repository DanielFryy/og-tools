import React from "react";

import Bonuses from "./Bonuses";
import { render } from "setupTests";

describe("Bonuses", () => {
  it("renders with default props", () => {
    render(<Bonuses />);
  });
});
