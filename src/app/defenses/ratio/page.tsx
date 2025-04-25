import type { Metadata } from "next";

import DefenseManagementTable from "@/components/units/DefenseManagementTable/DefenseManagementTable";

export const metadata: Metadata = {
  title: "OG-Tools | Defenses - Ratio Calculator",
  description:
    "Pick a base defense and define the ratio for each defense type. The calculator will compute the required quantities to maintain your specified ratios, making it easy to design proportionally balanced setups."
};

const RatioDefensesPage = () => {
  return (
    <div className="RatioCalculatorPage flex-1 flex items-center justify-center h-fit min-h-full">
      <DefenseManagementTable />
    </div>
  );
};

export default RatioDefensesPage;
