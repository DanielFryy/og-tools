import { Star } from "lucide-react";
import React from "react";

import HighlightBox from "./HighlightBox";
import { render } from "setupTests";

describe("HighlightBox", () => {
  it("renders with default props", () => {
    render(<HighlightBox title="" description="" icon={Star} />);
  });
});
