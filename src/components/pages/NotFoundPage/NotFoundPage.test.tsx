import React from "react";

import NotFoundPage from "./NotFoundPage";
import { render } from "setupTests";

describe("NotFoundPage", () => {
  it("renders with default props", () => {
    render(<NotFoundPage />);
  });
});
