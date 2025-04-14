import React from "react";

import SettingsSheet from "./SettingsSheet";
import { render } from "setupTests";

describe("SettingsSheet", () => {
  it("renders with default props", () => {
    render(<SettingsSheet open onOpenChange={() => {}} />);
  });
});
