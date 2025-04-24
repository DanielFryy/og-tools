import { ResourceCellProps as Props } from "./ResourceCell.types";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const ResourceCell = (props: Props) => {
  const { unit, resourceType, isFree } = props;
  const { name, cost, amount, enabled } = unit;
  const resource = cost[resourceType];
  const formatNumber = useNumberFormatter();
  const calculatedResource = resource * amount;
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType } = selectedPlayerClass ?? {};
  const cantBuildReaper = name === "Reaper" && playerClassType !== "General";
  const cantBuildPathfinder = name === "Pathfinder" && playerClassType !== "Discoverer";
  const disabled = cantBuildReaper || cantBuildPathfinder;

  return (
    <TableCell className="text-right">
      {isFree ? (
        <span>{formatNumber(calculatedResource)}</span>
      ) : disabled ? (
        <span className="text-slate-500 font-medium">-</span>
      ) : (
        <span className={enabled ? "" : "text-muted-foreground"}>{formatNumber(calculatedResource)}</span>
      )}
    </TableCell>
  );
};

export default ResourceCell;
