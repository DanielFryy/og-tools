// {^name^|pascal} store helper functions and data
import { GlobalsStore } from "./globals.store.types";
import { OmitFunctionProperties } from "@/types/Utils.types";

export const initialState: OmitFunctionProperties<GlobalsStore> = {
  selectedPlayerClass: null,
  sidebarOpen: true,
  favoriteRoutes: []
} as const;
