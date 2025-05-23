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
import { calculateTotals } from "@/lib/utils";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const UnitsManagementTable = (props: Props) => {
  const { className, units, baseUnitName, onBaseUnitChange, onAmountChange, onRatioChange, title } = props;
  const { onEnableChange, isFree = false } = props;
  const formatNumber = useNumberFormatter();
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType = "Collector" } = selectedPlayerClass ?? {};
  const totals = calculateTotals(units, playerClassType, isFree);
  const totalPoints = (totals.metal + totals.crystal + totals.deuterium) / 1_000;

  return (
    <div className={twMerge("UnitsManagementTable rounded-md overflow-hidden border", className)}>
      {title ? (
        <div className="bg-muted p-4">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      ) : null}
      <div className="bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-32 font-semibold">Unit</TableHead>
              {onEnableChange ? <SwitchHead /> : null}
              {onBaseUnitChange ? <TableHead className="text-center font-semibold">Base Unit</TableHead> : null}
              <TableHead className="text-right font-semibold">Amount</TableHead>
              {onRatioChange ? <TableHead className="text-right font-semibold">Ratio</TableHead> : null}
              <TableHead className="text-right font-semibold">Metal</TableHead>
              <TableHead className="text-right font-semibold">Crystal</TableHead>
              <TableHead className="text-right font-semibold">Deuterium</TableHead>
              <TableHead className="text-right font-semibold">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit, index) => {
              const { name, enabled } = unit;
              const hasRatio = "ratio" in unit;

              return (
                <TableRow
                  key={unit.name}
                  className={twMerge(index % 2 === 0 ? "bg-card" : "bg-muted/50", enabled ? "" : "opacity-60")}
                >
                  <TableCell className={twMerge("font-medium", enabled ? "" : "text-muted-foreground")}>
                    {name}
                  </TableCell>
                  {onEnableChange ? (
                    <SwitchCell baseUnitName={baseUnitName} unit={unit} onChange={onEnableChange} />
                  ) : null}
                  {onBaseUnitChange ? (
                    <BaseUnitCell baseUnitName={baseUnitName} unit={unit} onChange={onBaseUnitChange} />
                  ) : null}
                  <AmountCell baseUnitName={baseUnitName} unit={unit} onChange={onAmountChange} isFree={isFree} />
                  {onRatioChange && hasRatio ? (
                    <RatioCell baseUnitName={baseUnitName} unit={unit} onChange={onRatioChange} />
                  ) : null}
                  <ResourceCell unit={unit} resourceType="metal" isFree={isFree} />
                  <ResourceCell unit={unit} resourceType="crystal" isFree={isFree} />
                  <ResourceCell unit={unit} resourceType="deuterium" isFree={isFree} />
                  <PointsCell unit={unit} isFree={isFree} />
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="font-bold">Total</TableCell>
              {onEnableChange ? <TableCell /> : null}
              {onBaseUnitChange ? <TableCell /> : null}
              <TableCell className="text-right font-bold pr-3">{formatNumber(totals.amount)}</TableCell>
              {onRatioChange ? <TableCell /> : null}
              <TableCell className="text-right font-bold">{formatNumber(totals.metal)}</TableCell>
              <TableCell className="text-right font-bold">{formatNumber(totals.crystal)}</TableCell>
              <TableCell className="text-right font-bold">{formatNumber(totals.deuterium)}</TableCell>
              <TableCell className="text-right font-bold">{formatNumber(totalPoints)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default UnitsManagementTable;
