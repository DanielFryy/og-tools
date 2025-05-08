import React from "react";

import BlueBox from "./BlueBox";
import { render } from "setupTests";

describe("BlueBox", () => {
  it("renders with default props", () => {
    render(
      <BlueBox>
        <div />
      </BlueBox>
    );
  });
});
