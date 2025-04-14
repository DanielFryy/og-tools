import { twMerge } from "tailwind-merge";

import { SwitchCellProps as Props } from "./SwitchCell.types";
import { Switch } from "@/components/ui/switch";
import { TableCell } from "@/components/ui/table";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const SwitchCell = (props: Props) => {
  const { className, unit, onChange, baseUnitName } = props;
  const { name, enabled } = unit;
  const canSwitch = name !== baseUnitName;
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType } = selectedPlayerClass ?? {};
  const cantBuildReaper = name === "Reaper" && playerClassType !== "General";
  const cantBuildPathfinder = name === "Pathfinder" && playerClassType !== "Discoverer";
  const disabled = cantBuildReaper || cantBuildPathfinder;

  return (
    <TableCell className={twMerge("text-center", className)}>
      {disabled ? (
        <span className="text-slate-500 font-medium">-</span>
      ) : canSwitch ? (
        <Switch checked={enabled} onCheckedChange={() => onChange(name)} aria-label={`Toggle ${name}`} />
      ) : (
        <span className="text-slate-500 font-medium">-</span>
      )}
    </TableCell>
  );
};

export default SwitchCell;
