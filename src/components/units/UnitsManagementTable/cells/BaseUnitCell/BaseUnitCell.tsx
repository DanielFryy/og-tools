import { BaseUnitCellProps as Props } from "./BaseUnitCell.types";
import { TableCell } from "@/components/ui/table";

const BaseUnitCell = (props: Props) => {
  const { unit, onChange, baseUnitName } = props;

  const { name } = unit;
  // Check if the current unit is the base unit
  const isBaseUnit = name === baseUnitName;

  return (
    <TableCell className="text-center">
      <div className="flex justify-center items-center">
        <input
          type="radio"
          id={`base-unit-${name}`}
          name="baseUnit"
          className="h-4 w-4 cursor-pointer accent-blue-500"
          checked={isBaseUnit}
          onChange={() => onChange(name)}
        />
        <label htmlFor={`base-unit-${name}`} className="sr-only">
          Select {name} as base unit
        </label>
      </div>
    </TableCell>
  );
};

export default BaseUnitCell;
