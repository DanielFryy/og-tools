import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { AmountCellProps as Props } from "./AmountCell.types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const AmountCell = (props: Props) => {
  const { className, unit, onChange, baseUnitName, isFree } = props;
  const formatNumber = useNumberFormatter();
  const { name, amount, enabled } = unit;
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType } = selectedPlayerClass ?? {};
  const isBaseShip = name === baseUnitName;
  const cantBuildReaper = name === "Reaper" && playerClassType !== "General";
  const cantBuildPathfinder = name === "Pathfinder" && playerClassType !== "Discoverer";
  const disabled = cantBuildReaper || cantBuildPathfinder;

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
      className="w-24 ml-auto text-right"
    />
  );

  if (isFree) {
    return <TableCell className={twMerge("text-right", className)}>{inputNode}</TableCell>;
  }

  return (
    <TableCell className={twMerge("text-right", isBaseShip ? "" : "pr-3", className)}>
      {isBaseShip ? (
        inputNode
      ) : disabled ? (
        <span className="text-slate-500 font-medium">-</span>
      ) : (
        <span className={enabled ? "" : "text-muted-foreground"}>{formatNumber(amount)}</span>
      )}
    </TableCell>
  );
};

export default AmountCell;
