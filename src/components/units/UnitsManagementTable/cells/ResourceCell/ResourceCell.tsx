import { ResourceCellProps as Props } from "./ResourceCell.types";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";

const ResourceCell = (props: Props) => {
  const { unit, resourceType } = props;
  const { cost, amount } = unit;
  const resource = cost[resourceType];
  const formatNumber = useNumberFormatter();
  const calculatedResource = formatNumber(resource * amount);

  return <TableCell className="text-right text-slate-200">{calculatedResource}</TableCell>;
};

export default ResourceCell;
