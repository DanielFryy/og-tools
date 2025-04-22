// Sidebar helper functions and data
import { Shield, Satellite, Recycle, Rocket } from "lucide-react";

import { NavItem } from "./Sidebar.types";

export const navItems: NavItem[] = [
  { icon: Rocket, label: "Ships", route: "/ships", soon: false },
  { icon: Shield, label: "Defenses", route: "/defenses", soon: false },
  { icon: Recycle, label: "Recyclers", route: "/recyclers", soon: true },
  { icon: Satellite, label: "Solar Satellites", route: "/solar-satellites", soon: true }
];
