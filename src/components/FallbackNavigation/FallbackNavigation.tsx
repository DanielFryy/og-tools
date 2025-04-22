import { Rocket, Home } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { FallbackNavigationProps as Props } from "./FallbackNavigation.types";
import { Button } from "@/components/ui/button";

const FallbackNavigation = (props: Props) => {
  const { className } = props;

  return (
    <div className={twMerge("FallbackNavigation flex flex-col gap-2 min-[400px]:flex-row", className)}>
      <Link href="/">
        <Button size="lg" className="gap-1">
          <Home className="h-4 w-4" />
          Return Home
        </Button>
      </Link>
      <Link href="/ships">
        <Button size="lg" variant="outline" className="gap-1">
          <Rocket className="h-4 w-4" />
          Ships Calculator
        </Button>
      </Link>
    </div>
  );
};

export default FallbackNavigation;
