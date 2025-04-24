import type { Metadata } from "next";

import UnderConstructionPage from "@/components/pages/UnderConstructionPage/UnderConstructionPage";

export const metadata: Metadata = {
  title: "OG-Tools | Ships - Ratio Calculator",
  description:
    "Pick a base ship and define the ratio for each ship type. The calculator will compute the required quantities to maintain your specified ratios, making it easy to design proportionally balanced fleets."
};

const RatioPage = () => {
  return <UnderConstructionPage structure={"ships/ratio"} />;
};

export default RatioPage;
