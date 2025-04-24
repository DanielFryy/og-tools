"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { AppLayoutProps as Props } from "./AppLayout.types";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SettingsSheet from "@/components/SettingsSheet/SettingsSheet";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar";

const AppLayout = (props: Props) => {
  const { children } = props;
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { open } = useSidebar();

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-1">
        <Sidebar />
        <SidebarInset className="flex flex-1 flex-col max-h-svh">
          <Header onSettingsClick={() => setSettingsOpen(true)} />
          <main
            className={twMerge(
              "flex-1 p-4 md:p-6 flex overflow-auto",
              open ? "max-w-[calc(100svw-var(--sidebar-width))]" : "max-w-[calc(100svw-var(--sidebar-width-icon))]"
            )}
          >
            {children}
          </main>
          <Footer />
        </SidebarInset>
      </div>
      <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  );
};

export default AppLayout;
