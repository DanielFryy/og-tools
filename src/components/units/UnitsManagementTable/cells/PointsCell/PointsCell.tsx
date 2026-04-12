import { PointsCellProps as Props } from "./PointsCell.types";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { isUnitAvailableForPlayerClass } from "@/lib/playerClass";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const PointsCell = (props: Props) => {
  const { unit, isFree } = props;
  const { name, cost, amount, enabled } = unit;
  const { metal, crystal, deuterium } = cost;
  const points = ((metal + crystal + deuterium) * amount) / 1_000;
  const formatNumber = useNumberFormatter();
  const playerClassType = useGlobalsStore(state => state.selectedPlayerClass.type);
  const disabled = !isUnitAvailableForPlayerClass(name, playerClassType);
  const freeNode = <span>{formatNumber(points)}</span>;
  const enabledNode = <span className={enabled ? "" : "text-muted-foreground"}>{formatNumber(points)}</span>;
  const notFreeNode = disabled ? <span className="text-slate-500 font-medium">-</span> : enabledNode;

  return <TableCell className="text-right">{isFree ? freeNode : notFreeNode}</TableCell>;
};

export default PointsCell;
