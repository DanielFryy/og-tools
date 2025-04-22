"use client";

import { ProvidersProps as Props } from "./Providers.types";
import SidebarProvider from "../SidebarProvider/SidebarProvider";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

const Providers = (props: Props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <SidebarProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Providers;
