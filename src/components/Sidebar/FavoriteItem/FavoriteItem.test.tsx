import React from "react";

import FavoriteItem from "./FavoriteItem";
import { render } from "setupTests";

describe("FavoriteItem", () => {
  it("renders with default props", () => {
    render(
      <FavoriteItem
        item={{ label: "Favorite Item", route: "/favorite-item", parentIcon: undefined, parentLabel: "Favorite Item" }}
      />
    );
  });
});
