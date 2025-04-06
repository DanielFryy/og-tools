import { twMerge } from "tailwind-merge";

import { FleetManagementTableProps as Props } from "./FleetManagementTable.types";
import AmountCell from "./cells/AmountCell/AmountCell";
import BaseShipCell from "./cells/BaseShipCell/BaseShipCell";
import PointsCell from "./cells/PointsCell/PointsCell";
import ResourceCell from "./cells/ResourceCell/ResourceCell";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { useFleetStore } from "@/stores/fleet/fleet.store";

const FleetManagementTable = (props: Props) => {
  const { className } = props;
  const formatNumber = useNumberFormatter();
  const { fleetUnits, baseShip, setBaseShip, setAmount } = useFleetStore();
  const { name: baseShipName } = baseShip ?? {};

  const totals = fleetUnits.reduce(
    (acc, unit) => ({
      amount: acc.amount + unit.amount,
      metal: acc.metal + unit.resources.metal * unit.amount,
      crystal: acc.crystal + unit.resources.crystal * unit.amount,
      deuterium: acc.deuterium + unit.resources.deuterium * unit.amount
    }),
    { amount: 0, metal: 0, crystal: 0, deuterium: 0 }
  );

  return (
    <div
      className={twMerge("FleetManagementTable w-full rounded-md overflow-hidden border border-slate-800", className)}
    >
      <div className="bg-slate-900 p-4">
        <h2 className="text-xl font-bold text-white">Fleet Management</h2>
      </div>
      <div className="bg-slate-950">
        <Table>
          <TableHeader className="bg-slate-800">
            <TableRow>
              <TableHead className="w-32 text-white font-semibold">Fleet</TableHead>
              <TableHead className="text-center text-white font-semibold">Base Ship</TableHead>
              <TableHead className="w-28 text-right text-white font-semibold">Amount</TableHead>
              <TableHead className="text-right text-white font-semibold">Metal</TableHead>
              <TableHead className="text-right text-white font-semibold">Crystal</TableHead>
              <TableHead className="text-right text-white font-semibold">Deuterium</TableHead>
              <TableHead className="text-right text-white font-semibold">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fleetUnits.map((ship, index) => {
              const { name } = ship;

              return (
                <TableRow key={ship.name} className={index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"}>
                  <TableCell className="font-medium text-slate-200">{name}</TableCell>
                  <BaseShipCell baseShipName={baseShipName} ship={ship} onChange={setBaseShip} />
                  <AmountCell baseShipName={baseShipName} ship={ship} onChange={setAmount} />
                  <ResourceCell ship={ship} resourceType="metal" />
                  <ResourceCell ship={ship} resourceType="crystal" />
                  <ResourceCell ship={ship} resourceType="deuterium" />
                  <PointsCell ship={ship} />
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter className="bg-slate-700">
            <TableRow>
              <TableCell className="font-bold text-white">Total</TableCell>
              <TableCell />
              <TableCell className="text-right font-bold text-white pr-3">{formatNumber(totals.amount)}</TableCell>
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

export default FleetManagementTable;
