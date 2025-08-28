// Sidebar helper functions and data
import { Shield, Satellite, Recycle, Rocket, Zap } from "lucide-react";

import { NavItem } from "./Sidebar.types";

export const navItems: NavItem[] = [
  {
    icon: Rocket,
    label: "Ships",
    route: "/ships",
    soon: false,
    subRoutes: [
      { label: "Manual", route: "/ships/manual" },
      { label: "Cost match", route: "/ships/cost-match" },
      { label: "Ratio", route: "/ships/ratio", soon: true },
      { label: "Percent", route: "/ships/percent", soon: true }
    ]
  },
  {
    icon: Shield,
    label: "Defenses",
    route: "/defenses",
    soon: false,
    subRoutes: [
      { label: "Manual", route: "/defenses/manual" },
      { label: "Cost match", route: "/defenses/cost-match", soon: true },
      { label: "Ratio", route: "/defenses/ratio" },
      { label: "Percent", route: "/defenses/percent", soon: true }
    ]
  },
  { icon: Recycle, label: "Recyclers", route: "/recyclers" },
  { icon: Satellite, label: "Solar Satellites", route: "/solar-satellites", soon: true },
  { icon: Rocket, label: "IPMs", route: "/ipms" },
  { icon: Zap, label: "Energy", route: "/energy" }
];
