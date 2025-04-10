import React from "react";

import PlayerClassSelect from "./PlayerClassSelect";
import { render } from "setupTests";

describe("PlayerClassSelect", () => {
  it("renders with default props", () => {
    render(<PlayerClassSelect />);
  });
});
