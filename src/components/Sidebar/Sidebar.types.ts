// Sidebar component types and interfaces
import { ElementType } from "react";

export interface SidebarProps {
  className?: string;
}

export interface NavItem {
  icon: ElementType;
  label: string;
  route: string;
  soon?: boolean;
  page: ElementType;
}
