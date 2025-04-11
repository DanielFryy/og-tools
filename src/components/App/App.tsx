import { useState } from "react";

import { AppProps as Props } from "./App.types";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SettingsSheet from "@/components/SettingsSheet/SettingsSheet";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DefenseManagementTable from "@/components/units/DefenseManagementTable/DefenseManagementTable";
import ShipManagementTable from "@/components/units/ShipManagementTable/ShipManagementTable";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const App = (props: Props) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const sidebarOpen = useGlobalsStore(state => state.sidebarOpen);
  const setSidebarOpen = useGlobalsStore(state => state.setSidebarOpen);

  return (
    <SidebarProvider defaultOpen={sidebarOpen} open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <div className="flex flex-col flex-1">
        <div className="flex flex-1">
          <Sidebar />
          <SidebarInset className="flex flex-1 flex-col max-h-screen">
            <Header onSettingsClick={() => setSettingsOpen(true)} />
            <main className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-x-hidden overflow-y-auto justify-center items-center">
              <ShipManagementTable />
              <DefenseManagementTable />
            </main>
            <Footer />
          </SidebarInset>
        </div>
        <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />
      </div>
    </SidebarProvider>
  );
};

export default App;
