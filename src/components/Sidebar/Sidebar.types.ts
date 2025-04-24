// Sidebar component types and interfaces
import { type LucideIcon } from "lucide-react";

export interface SidebarProps {
  className?: string;
}

export interface NavItem {
  icon?: LucideIcon;
  label: string;
  route: string;
  soon?: boolean;
  subRoutes?: NavItem[];
}
