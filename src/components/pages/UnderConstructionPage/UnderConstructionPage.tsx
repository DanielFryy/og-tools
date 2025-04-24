import { Construction, Wrench, Clock } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { UnderConstructionPageProps as Props } from "./UnderConstructionPage.types";
import FallbackNavigation from "@/components/FallbackNavigation/FallbackNavigation";

const UnderConstructionPage = (props: Props) => {
  const { className, structure } = props;

  return (
    <div
      className={twMerge(
        "UnderConstructionPage flex-1 flex items-center justify-center flex-col gap-6 h-fit min-h-full",
        className
      )}
    >
      <div className="relative flex p-6 items-center justify-center rounded-full bg-muted">
        <Construction className="h-12 w-12 text-muted-foreground" />
        <div className="absolute -right-1 -top-1">
          <div className="flex p-2 items-center justify-center rounded-full bg-yellow-500 text-primary-foreground">
            <Wrench className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Under Construction</h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
          Our engineers are working hard to build this feature. Please check back soon.
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">Estimated completion: Soon™</span>
      </div>
      <FallbackNavigation />
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-lg min-h-72">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 to-slate-900 opacity-80" />
        <div className="flex flex-col text-center z-10">
          <div className="flex flex-col gap-2 px-6 pt-16 pb-4">
            <div className="flex justify-center">
              <Construction className="h-16 w-16" />
            </div>
            <h2 className="text-xl font-bold">{structure} Under Construction</h2>
            <p className="text-sm text-yellow-200">
              Our workers are building new features to enhance your OGame experience. Construction is in progress.
            </p>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          <div className="flex justify-between p-4 text-xs text-yellow-200">
            <span>Status: In Progress</span>
            <span>Progress: Unknown</span>
          </div>
        </div>
        {/* Animated construction elements */}
        <div className="absolute left-1/4 top-1/3 h-1 w-1 animate-ping rounded-full bg-yellow-400 z-10" />
        <div className="absolute left-1/2 top-1/4 h-1 w-1 animate-ping rounded-full bg-yellow-400 animation-delay-200 z-10" />
        <div className="absolute left-3/4 top-2/3 h-1 w-1 animate-ping rounded-full bg-yellow-400 animation-delay-500 z-10" />
      </div>
    </div>
  );
};

export default UnderConstructionPage;
