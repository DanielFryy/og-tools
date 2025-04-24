import type { Metadata } from "next";

import ShipManagementTable from "@/components/units/ShipManagementTable/ShipManagementTable";

export const metadata: Metadata = {
  title: "OG-Tools | Ships - Cost Match Calculator",
  description: "Calculate the number of ships needed to match a specific resource cost. Perfect for quick calculations."
};

const ResourceBasedShipsPage = () => {
  return (
    <div className="ResourceBasedShipsPage flex-1 flex items-center justify-center h-fit min-h-full">
      <ShipManagementTable />
    </div>
  );
};

export default ResourceBasedShipsPage;
