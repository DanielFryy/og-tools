import { BaseUnitCellProps as Props } from "./BaseUnitCell.types";
import { TableCell } from "@/components/ui/table";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const BaseUnitCell = (props: Props) => {
  const { unit, onChange, baseUnitName } = props;
  const { name } = unit;
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType } = selectedPlayerClass ?? {};
  const isBaseUnit = name === baseUnitName;
  const cantBuildReaper = name === "Reaper" && playerClassType !== "General";
  const cantBuildPathfinder = name === "Pathfinder" && playerClassType !== "Discoverer";
  const disabled = cantBuildReaper || cantBuildPathfinder;

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
