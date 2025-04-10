import { RatioCellProps as Props } from "./RatioCell.types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";

const RatioCell = (props: Props) => {
  const { unit, onChange, baseUnitName } = props;
  const { name, ratio } = unit;
  // Check if the current unit is the base unit
  const isBaseShip = name === baseUnitName;

  return (
    <TableCell className="text-right">
      {isBaseShip ? (
        <span className="text-slate-500 font-medium">-</span>
      ) : (
        <Input
          min="0"
          inputMode="decimal"
          pattern="[0-9]*"
          type="number"
          value={ratio}
          onChange={e => onChange?.(name, e.target.value)}
          className="w-24 ml-auto text-right"
        />
      )}
    </TableCell>
  );
};

export default RatioCell;
