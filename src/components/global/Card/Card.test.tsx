import React from "react";

import Card from "./Card";
import { render } from "setupTests";

describe("Card", () => {
  it("renders with default props", () => {
    render(<Card title="Card title" description="Card description" link="/" />);
  });
});
