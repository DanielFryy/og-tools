import { beforeEach, describe, expect, it } from "vitest";

import { useGlobalsStore } from "./globals.store";
import { initialState } from "./globals.store.helpers";

describe("globals store", () => {
  beforeEach(() => {
    localStorage.clear();
    useGlobalsStore.setState(initialState);
  });

  it("defaults and resets to none", () => {
    expect(useGlobalsStore.getState().selectedPlayerClass.type).toBe("None");

    useGlobalsStore.getState().setSelectedPlayerClass("General");
    expect(useGlobalsStore.getState().selectedPlayerClass.type).toBe("General");

    useGlobalsStore.getState().reset();
    expect(useGlobalsStore.getState().selectedPlayerClass.type).toBe("None");
  });

  it("migrates legacy null selectedPlayerClass to none", async () => {
    const migrate = useGlobalsStore.persist.getOptions().migrate;
    const migratedState = await migrate?.(
      {
        selectedPlayerClass: null,
        sidebarOpen: false,
        favoriteRoutes: []
      },
      0
    );

    expect(migratedState).toEqual({
      selectedPlayerClass: initialState.selectedPlayerClass,
      sidebarOpen: false,
      favoriteRoutes: []
    });
  });
});
