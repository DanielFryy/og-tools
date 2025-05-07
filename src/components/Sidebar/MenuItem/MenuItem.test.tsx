import React from "react";

import MenuItem from "./MenuItem";
import { render } from "setupTests";

describe("MenuItem", () => {
  it("renders with default props", () => {
    render(<MenuItem item={{ label: "Favorite Item", route: "/favorite-item" }} />);
  });
});
