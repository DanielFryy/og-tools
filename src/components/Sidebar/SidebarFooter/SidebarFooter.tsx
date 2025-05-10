import { twMerge } from "tailwind-merge";

import { SidebarFooterProps as Props } from "./SidebarFooter.types";
import DonationButtons from "@/components/DonationButtons/DonationButtons";
import { SidebarFooter as SidebarFooterUI } from "@/components/ui/sidebar";

const SidebarFooter = (props: Props) => {
  const { className } = props;

  return (
    <SidebarFooterUI className={twMerge("SidebarFooter", className)}>
      <DonationButtons />
    </SidebarFooterUI>
  );
};

export default SidebarFooter;
