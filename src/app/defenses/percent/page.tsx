import type { Metadata } from "next";

import UnderConstructionPage from "@/components/pages/UnderConstructionPage/UnderConstructionPage";

export const metadata: Metadata = {
  title: "OG-Tools | Defenses - Percent Calculator",
  description:
    "Choose a base defense and assign a percentage to each defense type. The calculator distributes the setup according to your chosen percentages, helping you achieve precise resource allocation across your defenses."
};

const PercentDefensesPage = () => {
  return <UnderConstructionPage structure={"defenses/percent"} />;
};

export default PercentDefensesPage;
