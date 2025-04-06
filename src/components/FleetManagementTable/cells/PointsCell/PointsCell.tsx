import { PointsCellProps as Props } from "./PointsCell.types";
import { TableCell } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";

const PointsCell = (props: Props) => {
  const { ship } = props;
  const { resources, amount } = ship;
  const { metal, crystal, deuterium } = resources;
  const points = ((metal + crystal + deuterium) * amount) / 1_000;
  const formatNumber = useNumberFormatter();

  return <TableCell className="text-right font-medium text-slate-200">{formatNumber(points)}</TableCell>;
};

export default PointsCell;
