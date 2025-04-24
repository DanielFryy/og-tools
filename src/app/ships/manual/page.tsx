import type { Metadata } from "next";

import FreeShipsManagementTable from "@/components/units/FreeShipsManagementTable/FreeShipsManagementTable";

export const metadata: Metadata = {
  title: "OG-Tools | Ships - Manual Calculator",
  description:
    "A flexible calculator where you can freely input ship quantities and see the total resource costs. Perfect for planning custom fleet compositions without predefined ratios."
};

const ManualCalculatorPage = () => {
  return (
    <div className="ManualCalculatorPage flex-1 flex items-center justify-center h-fit min-h-full">
      <FreeShipsManagementTable />
    </div>
  );
};

export default ManualCalculatorPage;
