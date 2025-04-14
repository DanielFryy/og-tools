import { Construction, Wrench, Clock } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { UnderConstructionPageProps as Props } from "./UnderConstructionPage.types";
import FallbackNavigation from "@/components/FallbackNavigation/FallbackNavigation";

const UnderConstructionPage = (props: Props) => {
  const { className, structure } = props;

  return (
    <div className={twMerge("UnderConstructionPage h-full max-h-full flex flex-col", className)}>
      <div className="container flex flex-col items-center justify-center gap-6 p-4 flex-1">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <Construction className="h-12 w-12 text-muted-foreground" />
          <div className="absolute -right-1 -top-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-primary-foreground">
              <Wrench className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
        <div className="space-y-3 text-center">
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
        <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/50 to-slate-900 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Construction className="h-16 w-16" />
              </div>
              <h2 className="text-xl font-bold">{structure} Under Construction</h2>
              <p className="text-sm text-yellow-200">
                Our workers are building new features to enhance your OGame experience. Construction is in progress.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            <div className="flex justify-between p-4 text-xs text-yellow-200">
              <span>Status: In Progress</span>
              <span>Progress: Unknown</span>
            </div>
          </div>
          {/* Animated construction elements */}
          <div className="absolute left-1/4 top-1/3 h-1 w-1 animate-ping rounded-full bg-yellow-400"></div>
          <div className="absolute left-1/2 top-1/4 h-1 w-1 animate-ping rounded-full bg-yellow-400 animation-delay-200"></div>
          <div className="absolute left-3/4 top-2/3 h-1 w-1 animate-ping rounded-full bg-yellow-400 animation-delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
