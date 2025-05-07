import { MoreHorizontal, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { MenuItemProps as Props } from "./MenuItem.types";
import Soon from "@/components/global/Soon/Soon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { SidebarMenuAction, SidebarMenuSubButton } from "@/components/ui/sidebar";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const MenuItem = (props: Props) => {
  const { className, item } = props;
  const { label: parentLabel, icon: ParentIcon, soon, route, subRoutes } = item;
  const pathname = usePathname();
  const setFavoriteRoute = useGlobalsStore(state => state.setFavoriteRoute);

  return (
    <SidebarMenuItem className={twMerge("MenuItem", className)}>
      <SidebarMenuButton isActive={pathname === route} tooltip={parentLabel} asChild>
        <Link href={route} className={twMerge("flex items-center", soon ? "pointer-events-none opacity-50" : "")}>
          {ParentIcon ? <ParentIcon className="mr-2 h-4 w-4" /> : null}
          <span>{parentLabel}</span>
          {soon ? <Soon className="ml-auto" /> : null}
        </Link>
      </SidebarMenuButton>
      <SidebarMenuSub>
        {subRoutes?.map(item => {
          const { label, icon: Icon, soon, route } = item;

          return (
            <SidebarMenuSubItem key={label}>
              <SidebarMenuSubButton isActive={pathname === route} asChild>
                <Link
                  href={route}
                  className={twMerge("flex items-center", soon ? "pointer-events-none opacity-50" : "")}
                >
                  {Icon ? <Icon className="mr-2 h-4 w-4" /> : null}
                  <span>{label}</span>
                  {soon ? <Soon className="ml-auto" /> : null}
                </Link>
              </SidebarMenuSubButton>
              {!soon ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction className="cursor-pointer">
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem
                      onClick={() => setFavoriteRoute({ label, route, parentLabel, parentIcon: ParentIcon })}
                    >
                      <Star />
                      <span>Set as favorite</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}
            </SidebarMenuSubItem>
          );
        })}
      </SidebarMenuSub>
    </SidebarMenuItem>
  );
};

export default MenuItem;
