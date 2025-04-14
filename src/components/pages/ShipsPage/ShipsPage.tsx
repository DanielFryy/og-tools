import { twMerge } from "tailwind-merge";

import { ShipsPageProps as Props } from "./ShipsPage.types";
import ShipManagementTable from "@/components/units/ShipManagementTable/ShipManagementTable";

const ShipsPage = (props: Props) => {
  const { className } = props;

  return (
    <div className={twMerge("ShipsPage flex-1 flex items-center justify-center", className)}>
      <ShipManagementTable />
    </div>
  );
};

export default ShipsPage;
