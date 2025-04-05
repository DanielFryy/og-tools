import { BaseShipCellProps as Props } from "./BaseShipCell.types";
import { TableCell } from "@/components/ui/table";

const BaseShipCell = (props: Props) => {
  const { ship, onChange, baseShipName } = props;
  const { name } = ship;
  // Check if the current unit is the base ship
  const isBaseShip = name === baseShipName;

  return (
    <TableCell className="text-center">
      <div className="flex justify-center items-center">
        <input
          type="radio"
          id={`base-ship-${name}`}
          name="baseShip"
          className="h-4 w-4 cursor-pointer accent-blue-500"
          checked={isBaseShip}
          onChange={() => onChange(name)}
        />
        <label htmlFor={`base-ship-${name}`} className="sr-only">
          Select {name} as base ship
        </label>
      </div>
    </TableCell>
  );
};

export default BaseShipCell;
