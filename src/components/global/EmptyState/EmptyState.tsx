import { BarChart3 } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { EmptyStateProps as Props } from "./EmptyState.types";

const EmptyState = (props: Props) => {
  const { className } = props;

  return (
    <div
      className={twMerge(
        "EmptyState flex flex-col items-center justify-center h-full w-full p-6 text-center gap-4",
        className
      )}
    >
      <div className="rounded-full bg-muted p-3">
        <BarChart3 className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">No defense data available</h3>
        <p className="text-sm text-muted-foreground max-w-[300px]">
          Add some defense structures to see the points distribution chart.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
