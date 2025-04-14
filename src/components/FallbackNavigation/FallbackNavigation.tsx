import { Rocket, Home } from "lucide-react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

import { FallbackNavigationProps as Props } from "./FallbackNavigation.types";
import { Button } from "@/components/ui/button";

const FallbackNavigation = (props: Props) => {
  const { className } = props;

  return (
    <div className={twMerge("FallbackNavigation flex flex-col gap-2 min-[400px]:flex-row", className)}>
      <NavLink to="/">
        <Button size="lg" className="gap-1">
          <Home className="h-4 w-4" />
          Return Home
        </Button>
      </NavLink>
      <NavLink to="/ships">
        <Button size="lg" variant="outline" className="gap-1">
          <Rocket className="h-4 w-4" />
          Ships Calculator
        </Button>
      </NavLink>
    </div>
  );
};

export default FallbackNavigation;
