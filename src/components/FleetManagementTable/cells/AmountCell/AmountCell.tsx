import { AmountCellProps as Props } from "./AmountCell.types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";

const AmountCell = (props: Props) => {
  const { fleetUnit, onChange, baseShipName } = props;
  const { name, amount } = fleetUnit;
  // Check if the current unit is the base ship
  const isBaseShip = name === baseShipName;

  return (
    <TableCell className="text-right">
      {isBaseShip ? (
        <Input
          min="0"
          inputMode="numeric"
          pattern="[0-9]*"
          value={amount}
          onChange={e => onChange(e.target.value, name)}
          className="w-24 ml-auto text-right bg-slate-700 border-slate-600 text-white"
        />
      ) : (
        <span className="text-slate-200">{amount}</span>
      )}
    </TableCell>
  );
};

export default AmountCell;
