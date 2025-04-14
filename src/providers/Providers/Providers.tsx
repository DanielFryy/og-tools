import { ProvidersProps as Props } from "./Providers.types";
import SidebarProvider from "../SidebarProvider/SidebarProvider";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

const Providers = (props: Props) => {
  const { children } = props;

  return (
    <ThemeProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
};

export default Providers;
