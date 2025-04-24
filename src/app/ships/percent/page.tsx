import type { Metadata } from "next";

import UnderConstructionPage from "@/components/pages/UnderConstructionPage/UnderConstructionPage";

export const metadata: Metadata = {
  title: "OG-Tools | Ships - Percent Calculator",
  description:
    "Choose a base ship and assign a percentage to each ship type. The calculator distributes the fleet according to your chosen percentages, helping you achieve precise resource allocation across your ships."
};

const PercentPage = () => {
  return <UnderConstructionPage structure={"ships/percent"} />;
};

export default PercentPage;
