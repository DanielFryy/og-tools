import { SidebarProviderProps as Props } from "./SidebarProvider.types";
import { SidebarProvider as SidebarProviderUI } from "@/components/ui/sidebar";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const SidebarProvider = (props: Props) => {
  const { children } = props;
  const sidebarOpen = useGlobalsStore(state => state.sidebarOpen);
  const setSidebarOpen = useGlobalsStore(state => state.setSidebarOpen);

  return (
    <SidebarProviderUI defaultOpen={sidebarOpen} open={sidebarOpen} onOpenChange={setSidebarOpen}>
      {children}
    </SidebarProviderUI>
  );
};

export default SidebarProvider;
