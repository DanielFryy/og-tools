import { ResourceCellProps as Props } from "./ResourceCell.types";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { isUnitAvailableForPlayerClass } from "@/lib/playerClass";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const ResourceCell = (props: Props) => {
  const { unit, resourceType, isFree } = props;
  const { name, cost, amount, enabled } = unit;
  const resource = cost[resourceType];
  const formatNumber = useNumberFormatter();
  const calculatedResource = resource * amount;
  const playerClassType = useGlobalsStore(state => state.selectedPlayerClass.type);
  const disabled = !isUnitAvailableForPlayerClass(name, playerClassType);
  const freeNode = <span>{formatNumber(calculatedResource)}</span>;
  const enabledNode = (
    <span className={enabled ? "" : "text-muted-foreground"}>{formatNumber(calculatedResource)}</span>
  );
  const notFreeNode = disabled ? <span className="text-slate-500 font-medium">-</span> : enabledNode;

  return <TableCell className="text-right">{isFree ? freeNode : notFreeNode}</TableCell>;
};

export default ResourceCell;
