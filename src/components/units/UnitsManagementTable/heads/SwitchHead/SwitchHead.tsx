import { useId } from "react";
import { twMerge } from "tailwind-merge";

import { SwitchHeadProps as Props } from "./SwitchHead.types";
import InfoTooltip from "@/components/global/InfoTooltip/InfoTooltip";
import { TableHead } from "@/components/ui/table";

const SwitchHead = (props: Props) => {
  const { className } = props;
  const id = useId();

  return (
    <TableHead className={twMerge("w-[80px] text-center font-semibold", className)}>
      <div className="flex items-center justify-center gap-1">
        <span id={id}>Use</span>
        <InfoTooltip id={`${id}-tooltip`} ariaLabelledBy={id}>
          Toggle to include or exclude units from calculations
        </InfoTooltip>
      </div>
    </TableHead>
  );
};

export default SwitchHead;
