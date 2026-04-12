import { BaseUnitCellProps as Props } from "./BaseUnitCell.types";
import { TableCell } from "@/components/ui/table";
import { isUnitAvailableForPlayerClass } from "@/lib/playerClass";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const BaseUnitCell = (props: Props) => {
  const { unit, onChange, baseUnitName } = props;
  const { name } = unit;
  const playerClassType = useGlobalsStore(state => state.selectedPlayerClass.type);
  const isBaseUnit = name === baseUnitName;
  const disabled = !isUnitAvailableForPlayerClass(name, playerClassType);

  return (
    <TableCell className="text-center">
      <div className="flex justify-center items-center">
        {disabled ? (
          <span className="text-slate-500 font-medium">-</span>
        ) : (
          <>
            <input
              type="radio"
              id={`base-unit-${name}`}
              name="baseUnit"
              className="h-4 w-4 cursor-pointer"
              checked={isBaseUnit}
              onChange={() => onChange(name)}
            />
            <label htmlFor={`base-unit-${name}`} className="sr-only">
              Select {name} as base unit
            </label>
          </>
        )}
      </div>
    </TableCell>
  );
};

export default BaseUnitCell;
