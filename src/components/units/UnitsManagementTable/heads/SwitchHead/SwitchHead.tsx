import { twMerge } from "tailwind-merge";

import { SwitchHeadProps as Props } from "./SwitchHead.types";
import InfoTooltip from "@/components/global/InfoTooltip/InfoTooltip";
import { Label } from "@/components/ui/label";
import { TableHead } from "@/components/ui/table";

const SwitchHead = (props: Props) => {
  const { className } = props;

  return (
    <TableHead className={twMerge("w-[80px] text-center font-semibold", className)}>
      <div className="flex items-center justify-center gap-1">
        <Label id="switch-head-label">Use</Label>
        <InfoTooltip id="switch-head-tooltip" ariaLabelledBy="switch-head-label">
          Toggle to include or exclude units from calculations
        </InfoTooltip>
      </div>
    </TableHead>
  );
};

export default SwitchHead;
