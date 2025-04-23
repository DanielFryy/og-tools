import React from "react";

import AdSense from "./AdSense";
import { render } from "setupTests";

describe("AdSense", () => {
  it("renders with default props", () => {
    render(<AdSense publisherId="ca-pub-1234567890" />);
  });
});
