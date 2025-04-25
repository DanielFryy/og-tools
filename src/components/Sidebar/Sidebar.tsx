import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { navItems } from "./Sidebar.helpers";
import { SidebarProps as Props } from "./Sidebar.types";
import Soon from "@/components/global/Soon/Soon";
import { Sidebar as SidebarUI, SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "@/components/ui/sidebar";
import { SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import { SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";

const Sidebar = (props: Props) => {
  const { className } = props;
  const pathname = usePathname();

  return (
    <SidebarUI collapsible="icon" className={twMerge("Sidebar", className)}>
      <SidebarHeader className="group-data-[collapsible=icon]:hidden transition-opacity">
        <div className="flex h-16 items-center px-4">
          <Link href="/">
            <span className="text-lg font-semibold">OG-Tools</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Calculators</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => {
                const { label, icon: Icon, soon, route, subRoutes } = item;

                return (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton isActive={pathname === route} tooltip={label} asChild>
                      <Link
                        href={route}
                        className={twMerge("flex items-center", soon ? "pointer-events-none opacity-50" : "")}
                      >
                        {Icon ? <Icon className="mr-2 h-4 w-4" /> : null}
                        <span>{label}</span>
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
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </SidebarUI>
  );
};

export default Sidebar;
