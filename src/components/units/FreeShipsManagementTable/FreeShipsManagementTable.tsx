"use client";

import { FreeShipsManagementTableProps as Props } from "./FreeShipsManagementTable.types";
import UnitsManagementTable from "@/components/units/UnitsManagementTable/UnitsManagementTable";
import { useFreeShipsStore } from "@/stores/freeShips/freeShips.store";

const FreeShipsManagementTable = (props: Props) => {
  const units = useFreeShipsStore(state => state.units);
  const setAmount = useFreeShipsStore(state => state.setAmount);

  return <UnitsManagementTable units={units} onAmountChange={setAmount} title="Free Ships" isFree />;
};

export default FreeShipsManagementTable;
