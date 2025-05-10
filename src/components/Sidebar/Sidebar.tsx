import { Ban, Calculator, Star } from "lucide-react";
import { twMerge } from "tailwind-merge";

import FavoriteItem from "./FavoriteItem/FavoriteItem";
import MenuItem from "./MenuItem/MenuItem";
import { navItems } from "./Sidebar.helpers";
import { SidebarProps as Props } from "./Sidebar.types";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import { Sidebar as SidebarUI, SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { SidebarRail } from "@/components/ui/sidebar";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const Sidebar = (props: Props) => {
  const { className } = props;
  const favoriteRoutes = useGlobalsStore(state => state.favoriteRoutes);

  return (
    <SidebarUI collapsible="icon" className={twMerge("Sidebar", className)}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Star className="h-3 w-3" height={12} width={12} />
            <span>Favorites</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {favoriteRoutes.length ? (
                favoriteRoutes.map(favoriteRoute => <FavoriteItem key={favoriteRoute.route} item={favoriteRoute} />)
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="No favorites">
                    <Ban />
                    <span>No favorites</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Calculator className="h-3 w-3" height={12} width={12} />
            <span>Calculators</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => (
                <MenuItem key={item.route} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </SidebarUI>
  );
};

export default Sidebar;
