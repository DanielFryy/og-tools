// Sidebar helper functions and data
import { Shield, Satellite, Recycle, Rocket } from "lucide-react";

import { NavItem } from "./Sidebar.types";
import DefensesPage from "@/components/pages/DefensesPage/DefensesPage";
import ShipsPage from "@/components/pages/ShipsPage/ShipsPage";
import UnderConstructionPage from "@/components/pages/UnderConstructionPage/UnderConstructionPage";

export const navItems: NavItem[] = [
  { icon: Rocket, label: "Ships", route: "ships", soon: false, page: ShipsPage },
  { icon: Shield, label: "Defenses", route: "defenses", soon: false, page: DefensesPage },
  { icon: Recycle, label: "Recyclers", route: "recyclers", soon: true, page: UnderConstructionPage },
  {
    icon: Satellite,
    label: "Solar Satellites",
    route: "solar-satellites",
    soon: true,
    page: UnderConstructionPage
  }
];
