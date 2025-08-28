import React from "react";

import BasicParameters from "./BasicParameters";
import { render } from "setupTests";

describe("BasicParameters", () => {
  it("renders with default props", () => {
    render(<BasicParameters />);
  });
});
