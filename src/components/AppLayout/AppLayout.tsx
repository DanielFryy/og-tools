import { useState } from "react";
import { Outlet } from "react-router";

import { AppLayoutProps as Props } from "./AppLayout.types";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SettingsSheet from "@/components/SettingsSheet/SettingsSheet";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarInset } from "@/components/ui/sidebar";

const AppLayout = (props: Props) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-1">
        <Sidebar />
        <SidebarInset className="flex flex-1 flex-col max-h-screen">
          <Header onSettingsClick={() => setSettingsOpen(true)} />
          <main className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-x-hidden overflow-y-auto justify-center items-center">
            <Outlet />
          </main>
          <Footer />
        </SidebarInset>
      </div>
      <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  );
};

export default AppLayout;
