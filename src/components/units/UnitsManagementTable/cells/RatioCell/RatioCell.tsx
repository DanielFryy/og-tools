import { ChangeEvent } from "react";

import { RatioCellProps as Props } from "./RatioCell.types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";

const RatioCell = (props: Props) => {
  const { unit, onChange, baseUnitName } = props;
  const { name, ratio } = unit;
  const isBaseShip = name === baseUnitName;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Remove non-numeric and non-decimal characters
    const parts = value.split(".");
    if (parts.length <= 4 && parts[0].length <= 5 && (!parts[1] || parts[1].length <= 4)) {
      onChange?.(name, parseFloat(value) ?? 0);
    }
  };

  return (
    <TableCell className="text-right">
      {isBaseShip ? (
        <span className="text-slate-500 font-medium">-</span>
      ) : (
        <Input
          min={0}
          inputMode="numeric"
          pattern="\d*\.?\d*"
          maxLength={9}
          type="number"
          step={0.01}
          value={ratio}
          onChange={changeHandler}
          className="min-w-14 max-w-24 ml-auto text-right"
        />
      )}
    </TableCell>
  );
};

export default RatioCell;
