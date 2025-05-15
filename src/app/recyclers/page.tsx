import type { Metadata } from "next";

import RecyclerHelpPanel from "@/components/recyclers/RecyclerHelpPanel/RecyclerHelpPanel";
import RecyclersNeededPanel from "@/components/recyclers/RecyclersNeededPanel/RecyclersNeededPanel";
import StaticShipsTable from "@/components/units/StaticShipsTable/StaticShipsTable";

export const metadata: Metadata = {
  title: "OG-Tools | Recyclers",
  description: "Have the minimum number of recyclers for your static units like solar satellites and crawlers."
};

const RecyclersPage = () => {
  return (
    <main className="flex-1 flex items-center justify-center h-fit min-h-full">
      <div className="flex flex-col gap-6 max-w-[120rem]">
        <div className="grid gap-6 @4xl/main:grid-cols-2">
          <StaticShipsTable />
          <RecyclersNeededPanel />
        </div>
        <RecyclerHelpPanel />
      </div>
    </main>
  );
};

export default RecyclersPage;
