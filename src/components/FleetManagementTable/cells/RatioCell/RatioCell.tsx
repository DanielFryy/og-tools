import { RatioCellProps as Props } from "./RatioCell.types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";

const RatioCell = (props: Props) => {
  const { ship, onChange, baseShipName } = props;
  const { name, ratio } = ship;
  // Check if the current unit is the base ship
  const isBaseShip = name === baseShipName;

  return (
    <TableCell className="text-right">
      {isBaseShip ? (
        <span className="text-slate-500 font-medium">-</span>
      ) : (
        <Input
          min="0"
          inputMode="numeric"
          pattern="[0-9]*"
          value={ratio}
          onChange={e => onChange(name, +e.target.value)}
          className="w-24 ml-auto text-right bg-slate-700 border-slate-600 text-white"
        />
      )}
    </TableCell>
  );
};

export default RatioCell;
