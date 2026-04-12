// GlobalsStore types and interfaces
import { PlayerClass, PlayerClassType } from "@/types/Global.types";

export interface GlobalsState {
  selectedPlayerClass: PlayerClass;
  sidebarOpen: boolean;
  favoriteRoutes: FavoriteRoute[];
}

export interface GlobalsStore extends GlobalsState {
  setFavoriteRoute: (favoriteRoute: FavoriteRoute) => void;
  removeFavoriteRoute: (favoriteRoute: FavoriteRoute) => void;
  setSidebarOpen: (value: boolean) => void;
  setSelectedPlayerClass: (playerClassType: PlayerClassType) => void;
  reset: () => void;
}

export interface FavoriteRoute {
  parentLabel: string;
  label: string;
  route: string;
}
