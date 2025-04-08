import { twMerge } from "tailwind-merge";

import { UnitsManagementTableProps as Props } from "./UnitsManagementTable.types";
import AmountCell from "./cells/AmountCell/AmountCell";
import BaseUnitCell from "./cells/BaseUnitCell/BaseUnitCell";
import PointsCell from "./cells/PointsCell/PointsCell";
import RatioCell from "./cells/RatioCell/RatioCell";
import ResourceCell from "./cells/ResourceCell/ResourceCell";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";

const UnitsManagementTable = (props: Props) => {
  const { className, units, baseUnitName, onBaseUnitChange, onAmountChange, onRatioChange, title, withRatio } = props;
  const formatNumber = useNumberFormatter();
  const totals = units.reduce(
    (acc, unit) => ({
      amount: acc.amount + unit.amount,
      metal: acc.metal + unit.cost.metal * unit.amount,
      crystal: acc.crystal + unit.cost.crystal * unit.amount,
      deuterium: acc.deuterium + unit.cost.deuterium * unit.amount
    }),
    { amount: 0, metal: 0, crystal: 0, deuterium: 0 }
  );

  return (
    <div
      className={twMerge(
        "UnitsManagementTable min-w-3xl rounded-md overflow-hidden border border-slate-800",
        className
      )}
    >
      <div className="bg-slate-900 p-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="bg-slate-950">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="w-32 text-white font-semibold">Unit</TableHead>
              <TableHead className="text-center text-white font-semibold">Base Unit</TableHead>
              <TableHead className="w-28 text-right text-white font-semibold">Amount</TableHead>
              {withRatio ? <TableHead className="text-center text-white font-semibold">Ratio</TableHead> : null}
              <TableHead className="text-right text-white font-semibold">Metal</TableHead>
              <TableHead className="text-right text-white font-semibold">Crystal</TableHead>
              <TableHead className="text-right text-white font-semibold">Deuterium</TableHead>
              <TableHead className="text-right text-white font-semibold">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {units.map((unit, index) => {
              const { name } = unit;

              return (
                <TableRow key={unit.name} className={index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"}>
                  <TableCell className="font-medium text-slate-200">{name}</TableCell>
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
          <TableFooter className="bg-slate-700">
            <TableRow>
              <TableCell className="font-bold text-white">Total</TableCell>
              <TableCell />
              <TableCell className="text-right font-bold text-white pr-3">{formatNumber(totals.amount)}</TableCell>
              {withRatio ? <TableCell /> : null}
              <TableCell className="text-right font-bold text-white">{formatNumber(totals.metal)}</TableCell>
              <TableCell className="text-right font-bold text-white">{formatNumber(totals.crystal)}</TableCell>
              <TableCell className="text-right font-bold text-white">{formatNumber(totals.deuterium)}</TableCell>
              <TableCell className="text-right font-bold text-white">
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
