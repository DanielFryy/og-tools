// Sidebar helper functions and data
import { Shield, Satellite, Recycle, Rocket } from "lucide-react";

import { NavItem } from "./Sidebar.types";
import UnderConstructionPage from "@/components/pages/UnderConstructionPage/UnderConstructionPage";
import DefenseManagementTable from "@/components/units/DefenseManagementTable/DefenseManagementTable";
import ShipManagementTable from "@/components/units/ShipManagementTable/ShipManagementTable";

export const navItems: NavItem[] = [
  { icon: Rocket, label: "Ships", route: "ships", soon: false, page: ShipManagementTable },
  { icon: Shield, label: "Defenses", route: "defenses", soon: false, page: DefenseManagementTable },
  { icon: Recycle, label: "Recyclers", route: "recyclers", soon: true, page: UnderConstructionPage },
  {
    icon: Satellite,
    label: "Solar Satellites",
    route: "solar-satellites",
    soon: true,
    page: UnderConstructionPage
  }
];
