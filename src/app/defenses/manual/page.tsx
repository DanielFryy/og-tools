import type { Metadata } from "next";

import FreeDefensesManagementTable from "@/components/units/FreeDefensesManagementTable/FreeDefensesManagementTable";

export const metadata: Metadata = {
  title: "OG-Tools | Defenses - Manual Calculator",
  description:
    "Directly enter the quantity for each defense type to plan your setup exactly as you want. No restrictions—perfect for custom strategies and experimenting with different compositions."
};

const ManualDefensesPage = () => {
  return (
    <div className="ManualCalculatorPage flex-1 flex items-center justify-center h-fit min-h-full">
      <FreeDefensesManagementTable />
    </div>
  );
};

export default ManualDefensesPage;
