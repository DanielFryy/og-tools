import { twMerge } from "tailwind-merge";

import { DefensesPageProps as Props } from "./DefensesPage.types";
import DefenseManagementTable from "@/components/units/DefenseManagementTable/DefenseManagementTable";

const DefensesPage = (props: Props) => {
  const { className } = props;

  return (
    <div className={twMerge("DefensesPage flex-1 flex items-center justify-center", className)}>
      <DefenseManagementTable />
    </div>
  );
};

export default DefensesPage;
