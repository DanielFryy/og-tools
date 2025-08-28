import type { Metadata } from "next";

import Breakdown from "@/components/ipms/Breakdown/Breakdown";
import Calculations from "@/components/ipms/Calculations/Calculations";
import CallToAction from "@/components/ipms/CallToAction/CallToAction";
import Defenses from "@/components/ipms/Defenses/Defenses";
import Empty from "@/components/ipms/Empty/Empty";
import ResourceCost from "@/components/ipms/ResourceCost/ResourceCost";
import Results from "@/components/ipms/Results/Results";
import TechLevels from "@/components/ipms/TechLevels/TechLevels";

export const metadata: Metadata = {
  title: "OG-Tools | IPM Calculator",
  description: "Calculate the interplanetary missile required to defeat enemy defenses."
};

const IPMsPage = () => {
  return (
    <div className="IPMCalculatorPage flex-1 flex items-center justify-center h-fit min-h-full">
      <div className="grid gap-6 @4xl/main:grid-cols-2 max-w-[120rem]">
        <div className="flex flex-col gap-6">
          <TechLevels />
          <Defenses />
          <CallToAction />
        </div>
        <div className="flex flex-col gap-6">
          <Results />
          <ResourceCost />
          <Breakdown />
          <Calculations />
          <Empty />
        </div>
      </div>
    </div>
  );
};

export default IPMsPage;
