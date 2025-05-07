// GlobalsStore types and interfaces
import { PlayerClass } from "@/types/Global.types";

export interface GlobalsStore {
  selectedPlayerClass: PlayerClass | null;
  sidebarOpen: boolean;
  favoriteRoutes: FavoriteRoute[];
  setFavoriteRoute: (favoriteRoute: FavoriteRoute) => void;
  removeFavoriteRoute: (favoriteRoute: FavoriteRoute) => void;
  setSidebarOpen: (value: boolean) => void;
  setSelectedPlayerClass: (playerClassType: string) => void;
  reset: () => void;
}

export interface FavoriteRoute {
  parentLabel: string;
  label: string;
  route: string;
}
