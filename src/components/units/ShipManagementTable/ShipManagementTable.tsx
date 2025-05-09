"use client";

import { ShipManagementTableProps as Props } from "./ShipManagementTable.types";
import UnitsManagementTable from "../UnitsManagementTable/UnitsManagementTable";
import { useShipStore } from "@/stores/ship/ship.store";

const ShipManagementTable = (props: Props) => {
  const units = useShipStore(state => state.units);
  const baseUnitName = useShipStore(state => state.baseUnit?.name);
  const setBaseUnit = useShipStore(state => state.setBaseUnit);
  const setAmount = useShipStore(state => state.setAmount);
  const setEnabled = useShipStore(state => state.setEnabled);

  return (
    <UnitsManagementTable
      units={units}
      baseUnitName={baseUnitName}
      onBaseUnitChange={setBaseUnit}
      onAmountChange={setAmount}
      onEnableChange={setEnabled}
      title="Ships Management"
    />
  );
};

export default ShipManagementTable;
