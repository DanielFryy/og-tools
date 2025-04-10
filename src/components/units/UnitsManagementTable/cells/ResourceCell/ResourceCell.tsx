import { ResourceCellProps as Props } from "./ResourceCell.types";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const ResourceCell = (props: Props) => {
  const { unit, resourceType } = props;
  const { name, cost, amount } = unit;
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
      {disabled ? <span className="text-slate-500 font-medium">-</span> : formatNumber(calculatedResource)}
    </TableCell>
  );
};

export default ResourceCell;
