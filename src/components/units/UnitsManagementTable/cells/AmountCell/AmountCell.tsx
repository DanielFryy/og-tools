import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { AmountCellProps as Props } from "./AmountCell.types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { isUnitAvailableForPlayerClass } from "@/lib/playerClass";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const AmountCell = (props: Props) => {
  const { className, unit, onChange, baseUnitName, isFree } = props;
  const formatNumber = useNumberFormatter();
  const { name, amount, enabled } = unit;
  const playerClassType = useGlobalsStore(state => state.selectedPlayerClass.type);
  const isBaseShip = name === baseUnitName;
  const disabled = !isUnitAvailableForPlayerClass(name, playerClassType);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 9) onChange(name, +value);
  };

  const inputNode = (
    <Input
      min={0}
      inputMode="numeric"
      pattern="\d{0,9}"
      maxLength={9}
      max={999_999_999}
      type="number"
      value={amount}
      onChange={changeHandler}
      className="min-w-14 max-w-24 ml-auto text-right"
    />
  );

  if (isFree) {
    return <TableCell className={twMerge("text-right", className)}>{inputNode}</TableCell>;
  }

  const enabledNode = <span className={enabled ? "" : "text-muted-foreground"}>{formatNumber(amount)}</span>;
  const notBaseShipNode = disabled ? <span className="text-slate-500 font-medium">-</span> : enabledNode;

  return (
    <TableCell className={twMerge("text-right", isBaseShip ? "" : "pr-3", className)}>
      {isBaseShip ? inputNode : notBaseShipNode}
    </TableCell>
  );
};

export default AmountCell;
