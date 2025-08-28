import { Info } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { InfoTooltipProps as Props } from "./InfoTooltip.types";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const InfoTooltip = (props: Props) => {
  const { className, children, id, ariaLabelledBy } = props;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          aria-labelledby={ariaLabelledBy}
          aria-describedby={id}
          variant="ghost"
          className="cursor-help hover:bg-transparent size-4 !p-0"
        >
          <Info className="h-4 w-4 text-muted-foreground min-h-4 min-w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent id={id} className={twMerge("InfoTooltip", className)}>
        {children}
      </TooltipContent>
    </Tooltip>
  );
};

export default InfoTooltip;
