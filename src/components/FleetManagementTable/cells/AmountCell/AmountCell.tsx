import { twMerge } from "tailwind-merge";

import { AmountCellProps as Props } from "./AmountCell.types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";

const AmountCell = (props: Props) => {
  const { className, ship, onChange, baseShipName } = props;
  const { name, amount } = ship;
  // Check if the current unit is the base ship
  const isBaseShip = name === baseShipName;

  return (
    <TableCell className={twMerge("text-right", isBaseShip ? "" : "pr-3", className)}>
      {isBaseShip ? (
        <Input
          min="0"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={9}
          value={amount}
          onChange={e => onChange(name, +e.target.value)}
          className="w-24 ml-auto text-right bg-slate-700 border-slate-600 text-white"
        />
      ) : (
        <span className="text-slate-200">{amount}</span>
      )}
    </TableCell>
  );
};

export default AmountCell;
