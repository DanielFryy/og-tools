import React from "react";

import Header from "./Header";
import { render } from "setupTests";

describe("Header", () => {
  it("renders with default props", () => {
    render(<Header onSettingsClick={() => {}} />);
  });
});
