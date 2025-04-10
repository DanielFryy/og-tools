import { twMerge } from "tailwind-merge";

import { AmountCellProps as Props } from "./AmountCell.types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const AmountCell = (props: Props) => {
  const { className, unit, onChange, baseUnitName } = props;
  const formatNumber = useNumberFormatter();
  const { name, amount } = unit;
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType } = selectedPlayerClass ?? {};
  const isBaseShip = name === baseUnitName;
  const cantBuildReaper = name === "Reaper" && playerClassType !== "General";
  const cantBuildPathfinder = name === "Pathfinder" && playerClassType !== "Discoverer";
  const disabled = cantBuildReaper || cantBuildPathfinder;

  return (
    <TableCell className={twMerge("text-right", isBaseShip ? "" : "pr-3", className)}>
      {isBaseShip ? (
        <Input
          min="0"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={9}
          type="number"
          value={amount}
          onChange={e => onChange(name, +e.target.value)}
          className="w-24 ml-auto text-right"
        />
      ) : disabled ? (
        <span className="text-slate-500 font-medium">-</span>
      ) : (
        <span>{formatNumber(amount)}</span>
      )}
    </TableCell>
  );
};

export default AmountCell;
