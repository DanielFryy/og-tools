import { AppProps as Props } from "./App.types";
import DefenseManagementTable from "../units/DefenseManagementTable/DefenseManagementTable";
import ShipManagementTable from "../units/ShipManagementTable/ShipManagementTable";

const App = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh p-4 bg-slate-950 sm:p-20 font-[family-name:var(--font-geist-sans)] gap-4">
      <ShipManagementTable />
      <DefenseManagementTable />
    </div>
  );
};

export default App;
