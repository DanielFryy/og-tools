// {^name^|pascal} store helper functions and data
import { GlobalsState } from "./globals.store.types";
import { CONSTANTS } from "@/config/constants";
import { PlayerClass, PlayerClassType } from "@/types/Global.types";

const { PLAYER_CLASSES } = CONSTANTS;

export const getPlayerClassByType = (playerClassType: PlayerClassType): PlayerClass =>
  PLAYER_CLASSES.find(playerClass => playerClass.type === playerClassType) ?? PLAYER_CLASSES[0];

export const defaultPlayerClass = getPlayerClassByType("None");

export const normalizeGlobalsState = (state?: Partial<GlobalsState> | null): GlobalsState => ({
  selectedPlayerClass: state?.selectedPlayerClass ?? defaultPlayerClass,
  sidebarOpen: state?.sidebarOpen ?? true,
  favoriteRoutes: state?.favoriteRoutes ?? []
});

export const initialState: GlobalsState = {
  selectedPlayerClass: defaultPlayerClass,
  sidebarOpen: true,
  favoriteRoutes: []
} as const;
