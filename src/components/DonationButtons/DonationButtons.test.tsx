import React from "react";

import DonationButtons from "./DonationButtons";
import { render } from "setupTests";

describe("DonationButtons", () => {
  it("renders with default props", () => {
    render(<DonationButtons />);
  });
});
