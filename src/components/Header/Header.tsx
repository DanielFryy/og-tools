import { Settings, PanelLeft, PanelRightClose } from "lucide-react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

import { HeaderProps as Props } from "./Header.types";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { Button } from "@/components/ui/button";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

const Header = (props: Props) => {
  const { className, onSettingsClick } = props;
  const { open, setOpen } = useSidebar();

  return (
    <header
      className={twMerge(
        "Header sticky top-0 z-10 flex items-center justify-between border-b bg-sidebar p-4 md:px-6",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        {/* Custom sidebar toggle for desktop */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="hidden md:flex md:ml=24"
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
        >
          {open ? <PanelLeft className="h-5 w-5" /> : <PanelRightClose className="h-5 w-5" />}
        </Button>
        <h1 className="text-xl font-bold">
          <NavLink to="/">OG-Tools</NavLink>
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="outline" size="icon" onClick={onSettingsClick} aria-label="Settings">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
