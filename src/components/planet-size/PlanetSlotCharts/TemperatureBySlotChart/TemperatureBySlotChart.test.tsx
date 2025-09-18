import React from "react";

import TemperatureBySlotChart from "./TemperatureBySlotChart";
import { render } from "setupTests";

describe("TemperatureBySlotChart", () => {
  it("renders with default props", () => {
    render(<TemperatureBySlotChart />);
  });
});
