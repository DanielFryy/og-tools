import { PointsCellProps as Props } from "./PointsCell.types";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const PointsCell = (props: Props) => {
  const { unit, isFree } = props;
  const { name, cost, amount, enabled } = unit;
  const { metal, crystal, deuterium } = cost;
  const points = ((metal + crystal + deuterium) * amount) / 1_000;
  const formatNumber = useNumberFormatter();
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType } = selectedPlayerClass ?? {};
  const cantBuildReaper = name === "Reaper" && playerClassType !== "General";
  const cantBuildPathfinder = name === "Pathfinder" && playerClassType !== "Discoverer";
  const disabled = cantBuildReaper || cantBuildPathfinder;

  return (
    <TableCell className="text-right">
      {isFree ? (
        <span>{formatNumber(points)}</span>
      ) : disabled ? (
        <span className="text-slate-500 font-medium">-</span>
      ) : (
        <span className={enabled ? "" : "text-muted-foreground"}>{formatNumber(points)}</span>
      )}
    </TableCell>
  );
};

export default PointsCell;
