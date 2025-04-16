import { Info } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { SwitchHeadProps as Props } from "./SwitchHead.types";
import { TableHead } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SwitchHead = (props: Props) => {
  const { className } = props;

  return (
    <TableHead className={twMerge("w-[80px] text-center font-semibold", className)}>
      <div className="flex items-center justify-center gap-1">
        Use
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle to include or exclude units from calculations</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </TableHead>
  );
};

export default SwitchHead;
