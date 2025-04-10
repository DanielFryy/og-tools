// Sidebar helper functions and data
import { Shield, Satellite, Recycle, Rocket } from "lucide-react";

import { NavItem } from "./Sidebar.types";

export const navItems: NavItem[] = [
  { icon: Rocket, label: "Ships", soon: false, active: true },
  { icon: Shield, label: "Defenses", soon: false },
  { icon: Recycle, label: "Recyclers", soon: true },
  { icon: Satellite, label: "Solar Satellites", soon: true }
];
