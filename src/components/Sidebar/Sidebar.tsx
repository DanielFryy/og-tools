import { twMerge } from "tailwind-merge";

import { navItems } from "./Sidebar.helpers";
import { SidebarProps as Props } from "./Sidebar.types";
import { Sidebar as SidebarUI, SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import { SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";

const Sidebar = (props: Props) => {
  const { className } = props;

  return (
    <SidebarUI collapsible="icon" className={twMerge("Sidebar", className)}>
      <SidebarHeader className="group-data-[collapsible=icon]:hidden transition-opacity">
        <div className="flex h-16 items-center px-4">
          <span className="text-lg font-semibold">OG-Tools</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Calculators</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => {
                const { label, icon: Icon, active, soon } = item;

                return (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton asChild isActive={active} tooltip={label} disabled={soon}>
                      <a href="#" className="flex items-center">
                        <Icon className="mr-2 h-4 w-4" />
                        <span>{label}</span>
                      </a>
                    </SidebarMenuButton>
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
