import React from "react";

import InfoTooltip from "./InfoTooltip";
import { render } from "setupTests";

describe("InfoTooltip", () => {
  it("renders with default props", () => {
    render(
      <InfoTooltip id="test-tooltip" ariaLabelledBy="test-label">
        Test tooltip content
      </InfoTooltip>
    );
  });
});
