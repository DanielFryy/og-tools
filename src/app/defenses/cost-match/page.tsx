import type { Metadata } from "next";

import UnderConstructionPage from "@/components/pages/UnderConstructionPage/UnderConstructionPage";

export const metadata: Metadata = {
  title: "OG-Tools | Defenses - Cost Match Calculator",
  description:
    "Select a base defense and set its quantity. The calculator will automatically adjust the quantities of other defenses so that their total resource cost matches your chosen base defense. Ideal for balancing defenses by a specific resource."
};

const CostMatchDefensesPage = () => {
  return <UnderConstructionPage structure={"defenses/cost-match"} />;
};

export default CostMatchDefensesPage;
