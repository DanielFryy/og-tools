import { twMerge } from "tailwind-merge";

import { SwitchCellProps as Props } from "./SwitchCell.types";
import { Switch } from "@/components/ui/switch";
import { TableCell } from "@/components/ui/table";
import { isUnitAvailableForPlayerClass } from "@/lib/playerClass";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const SwitchCell = (props: Props) => {
  const { className, unit, onChange, baseUnitName } = props;
  const { name, enabled } = unit;
  const canSwitch = name !== baseUnitName;
  const playerClassType = useGlobalsStore(state => state.selectedPlayerClass.type);
  const disabled = !isUnitAvailableForPlayerClass(name, playerClassType);
  const switchNode = <Switch checked={enabled} onCheckedChange={() => onChange(name)} aria-label={`Toggle ${name}`} />;
  const dashNode = <span className="text-slate-500 font-medium">-</span>;
  const enabledNode = canSwitch ? switchNode : dashNode;

  return <TableCell className={twMerge("text-center", className)}>{disabled ? dashNode : enabledNode}</TableCell>;
};

export default SwitchCell;
