import type { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DefenseManagementTable from "@/components/units/DefenseManagementTable/DefenseManagementTable";
import RatioDefensesChart from "@/components/units/RatioDefensesChart/RatioDefensesChart";

export const metadata: Metadata = {
  title: "OG-Tools | Defenses - Ratio Calculator",
  description:
    "Pick a base defense and define the ratio for each defense type. The calculator will compute the required quantities to maintain your specified ratios, making it easy to design proportionally balanced setups."
};

const RatioDefensesPage = () => {
  return (
    <div className="RatioCalculatorPage flex-1 flex items-center justify-center h-fit min-h-full">
      <Tabs defaultValue="table" className="flex flex-col gap-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="table" className="cursor-pointer">
            Table
          </TabsTrigger>
          <TabsTrigger value="charts" className="cursor-pointer">
            Charts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="table">
          <DefenseManagementTable />
        </TabsContent>

        <TabsContent value="charts">
          <RatioDefensesChart />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RatioDefensesPage;
