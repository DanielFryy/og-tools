// InfoTooltip component types and interfaces
import { ReactNode } from "react";

export interface InfoTooltipProps {
  className?: string;
  children: ReactNode;
  id: string;
  ariaLabelledBy: string;
}
