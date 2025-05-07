import { MoreHorizontal, StarOff } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { FavoriteItemProps as Props } from "./FavoriteItem.types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenuItem, SidebarMenuButton, SidebarMenuAction } from "@/components/ui/sidebar";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const FavoriteItem = (props: Props) => {
  const { className, item } = props;
  const { label, route, parentIcon: Icon, parentLabel } = item;
  const pathname = usePathname();
  const removeFavoriteRoute = useGlobalsStore(state => state.removeFavoriteRoute);

  const removeFavoriteRouteHandler = () => {
    removeFavoriteRoute(item);
  };

  return (
    <SidebarMenuItem className={twMerge("FavoriteItem group/favorite-item", className)}>
      <SidebarMenuButton isActive={pathname === route} tooltip={label} asChild>
        <Link href={route}>
          {Icon ? <Icon className="mr-2 h-4 w-4" /> : <span>{parentLabel} / </span>}
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction className="cursor-pointer">
            <MoreHorizontal />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start">
          <DropdownMenuItem onClick={removeFavoriteRouteHandler}>
            <StarOff />
            <span>Remove favorite</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
};

export default FavoriteItem;
