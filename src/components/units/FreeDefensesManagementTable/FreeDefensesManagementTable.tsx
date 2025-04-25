"use client";

import UnitsManagementTable from "@/components/units/UnitsManagementTable/UnitsManagementTable";
import { useFreeDefensesStore } from "@/stores/freeDefenses/freeDefenses.store";

const FreeDefensesManagementTable = () => {
  const units = useFreeDefensesStore(state => state.units);
  const setAmount = useFreeDefensesStore(state => state.setAmount);

  return <UnitsManagementTable units={units} onAmountChange={setAmount} title="Free Defenses" isFree />;
};

export default FreeDefensesManagementTable;
