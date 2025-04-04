import { AppProps as Props } from "./App.types";
import FleetManagementTable from "../FleetManagementTable/FleetManagementTable";

const App = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh p-4 bg-slate-950 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FleetManagementTable className="max-w-4xl" />
    </div>
  );
};

export default App;
