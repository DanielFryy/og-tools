import { DefenseManagementTableProps as Props } from "./DefenseManagementTable.types";
import UnitsManagementTable from "../UnitsManagementTable/UnitsManagementTable";
import { useDefenseStore } from "@/stores/defense/defense.store";

const DefenseManagementTable = (props: Props) => {
  const units = useDefenseStore(state => state.units);
  const baseUnitName = useDefenseStore(state => state.baseUnit?.name);
  const setBaseUnit = useDefenseStore(state => state.setBaseUnit);
  const setRatio = useDefenseStore(state => state.setRatio);
  const setAmount = useDefenseStore(state => state.setAmount);

  return (
    <UnitsManagementTable
      units={units}
      baseUnitName={baseUnitName}
      onBaseUnitChange={setBaseUnit}
      onAmountChange={setAmount}
      onRatioChange={setRatio}
      title="Defense Management"
      withRatio
    />
  );
};

export default DefenseManagementTable;
