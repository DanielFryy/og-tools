import React from "react";

import PlanetSlotCharts from "./PlanetSlotCharts";
import { render } from "setupTests";

describe("PlanetSlotCharts", () => {
  it("renders with default props", () => {
    render(<PlanetSlotCharts />);
  });
});
