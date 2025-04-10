import { twMerge } from "tailwind-merge";

import { UnitsManagementTableProps as Props } from "./UnitsManagementTable.types";
import AmountCell from "./cells/AmountCell/AmountCell";
import BaseUnitCell from "./cells/BaseUnitCell/BaseUnitCell";
import PointsCell from "./cells/PointsCell/PointsCell";
import RatioCell from "./cells/RatioCell/RatioCell";
import ResourceCell from "./cells/ResourceCell/ResourceCell";
import SwitchCell from "./cells/SwitchCell/SwitchCell";
import SwitchHead from "./heads/SwitchHead/SwitchHead";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const UnitsManagementTable = (props: Props) => {
  const { className, units, baseUnitName, onBaseUnitChange, onAmountChange, onRatioChange, title, withRatio } = props;
  const { onEnableChange } = props;
  const formatNumber = useNumberFormatter();
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType } = selectedPlayerClass ?? {};
  const totals = units.reduce(
    (acc, unit) => {
      const { name, amount: unitAmount, cost, enabled } = unit;
      const isReaper = name === "Reaper";
      const isPathfinder = name === "Pathfinder";
      const cantBuildReaper = isReaper && playerClassType !== "General";
      const cantBuildPathfinder = isPathfinder && playerClassType !== "Discoverer";
      if (cantBuildReaper || cantBuildPathfinder || !enabled) return acc;

      return {
        amount: acc.amount + unitAmount,
        metal: acc.metal + cost.metal * unitAmount,
        crystal: acc.crystal + cost.crystal * unitAmount,
        deuterium: acc.deuterium + cost.deuterium * unitAmount
      };
    },
    { amount: 0, metal: 0, crystal: 0, deuterium: 0 }
  );

  return (
    <div className={twMerge("UnitsManagementTable md:min-w-3xl rounded-md overflow-hidden border", className)}>
      <div className="bg-muted p-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-32 font-semibold">Unit</TableHead>
              <SwitchHead />
              <TableHead className="text-center font-semibold">Base Unit</TableHead>
              <TableHead className="w-28 text-right font-semibold">Amount</TableHead>
              {withRatio ? <TableHead className="text-center font-semibold">Ratio</TableHead> : null}
              <TableHead className="text-right font-semibold">Metal</TableHead>
              <TableHead className="text-right font-semibold">Crystal</TableHead>
              <TableHead className="text-right font-semibold">Deuterium</TableHead>
              <TableHead className="text-right font-semibold">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit, index) => {
              const { name, enabled } = unit;

              return (
                <TableRow
                  key={unit.name}
                  className={twMerge(index % 2 === 0 ? "bg-card" : "bg-muted/50", enabled ? "" : "opacity-60")}
                >
                  <TableCell className={twMerge("font-medium", enabled ? "" : "text-muted-foreground")}>
                    {name}
                  </TableCell>
                  <SwitchCell baseUnitName={baseUnitName} unit={unit} onChange={onEnableChange} />
                  <BaseUnitCell baseUnitName={baseUnitName} unit={unit} onChange={onBaseUnitChange} />
                  <AmountCell baseUnitName={baseUnitName} unit={unit} onChange={onAmountChange} />
                  {withRatio ? <RatioCell baseUnitName={baseUnitName} unit={unit} onChange={onRatioChange} /> : null}
                  <ResourceCell unit={unit} resourceType="metal" />
                  <ResourceCell unit={unit} resourceType="crystal" />
                  <ResourceCell unit={unit} resourceType="deuterium" />
                  <PointsCell unit={unit} />
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="font-bold">Total</TableCell>
              <TableCell />
              <TableCell />
              <TableCell className="text-right font-bold pr-3">{formatNumber(totals.amount)}</TableCell>
              {withRatio ? <TableCell /> : null}
              <TableCell className="text-right font-bold">{formatNumber(totals.metal)}</TableCell>
              <TableCell className="text-right font-bold">{formatNumber(totals.crystal)}</TableCell>
              <TableCell className="text-right font-bold">{formatNumber(totals.deuterium)}</TableCell>
              <TableCell className="text-right font-bold">
                {formatNumber((totals.metal + totals.crystal + totals.deuterium) / 1_000)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default UnitsManagementTable;
