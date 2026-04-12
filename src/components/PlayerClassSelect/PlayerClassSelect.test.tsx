import { fireEvent, screen } from "@testing-library/react";
import React from "react";

import PlayerClassSelect from "./PlayerClassSelect";
import { useGlobalsStore } from "@/stores/globals/globals.store";
import { render } from "setupTests";

describe("PlayerClassSelect", () => {
  beforeEach(() => {
    localStorage.clear();
    useGlobalsStore.getState().reset();
  });

  it("renders all player class options with none selected by default", async () => {
    render(<PlayerClassSelect />);

    const trigger = screen.getByRole("combobox");

    expect(trigger.textContent).toContain("None");

    fireEvent.click(trigger);

    expect(await screen.findByRole("option", { name: "All" })).toBeTruthy();
    expect(screen.getByRole("option", { name: "None" })).toBeTruthy();
    expect(screen.getByRole("option", { name: "Collector" })).toBeTruthy();
    expect(screen.getByRole("option", { name: "General" })).toBeTruthy();
    expect(screen.getByRole("option", { name: "Discoverer" })).toBeTruthy();
  });
});
