import { AlertCircle, Rocket } from "lucide-react";

import FallbackNavigation from "@/components/FallbackNavigation/FallbackNavigation";

const NotFoundPage = () => {
  return (
    <div className="UnderConstructionPage flex-1 flex items-center justify-center flex-col">
      <div className="container flex flex-col items-center justify-center gap-6 p-4 flex-1">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <AlertCircle className="h-12 w-12 text-muted-foreground" />
          <div className="absolute -right-1 -top-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-xs font-bold">404</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Page Not Found</h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            It seems like you've ventured into deep space. This sector doesn't exist in our galaxy.
          </p>
        </div>
        <FallbackNavigation />
        <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-slate-900 opacity-80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Rocket className="h-16 w-16 animate-pulse" />
              </div>
              <h2 className="text-xl font-bold">Lost in Space</h2>
              <p className="text-sm text-blue-200">
                Your fleet has ventured too far. Use the navigation controls to return to known coordinates.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="flex justify-between p-4 text-xs text-blue-200">
              <span>Sector: Unknown</span>
              <span>Coordinates: 404.404.404</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
