import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { FleetUnit, FleetManagementTableProps as Props } from "./FleetManagementTable.types";
import AmountCell from "./cells/AmountCell/AmountCell";
import BaseShipCell from "./cells/BaseShipCell/BaseShipCell";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FleetManagementTable = (props: Props) => {
  const { className } = props;
  const [baseShipId, setBaseShipId] = useState<string | null>(null);
  const [fleetUnits, setFleetUnits] = useState<FleetUnit[]>([
    { name: "Light Fighter", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Heavy Fighter", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Cruiser", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Battleship", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Battlecruiser", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Bomber", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Destroyer", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Deathstar", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Reaper", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Pathfinder", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Small Cargo", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Large Cargo", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Colony Ship", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Recycler", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Espionage Probe", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Solar Satellite", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 },
    { name: "Crawler", amount: 0, ratio: 0, metal: 0, crystal: 0, deuterium: 0 }
  ]);

  // Calculate totals for the footer
  const totals = fleetUnits.reduce(
    (acc, unit) => {
      return {
        amount: acc.amount + unit.amount,
        metal: acc.metal + unit.metal,
        crystal: acc.crystal + unit.crystal,
        deuterium: acc.deuterium + unit.deuterium
      };
    },
    { amount: 0, metal: 0, crystal: 0, deuterium: 0 }
  );
  // Find the base ship in the fleet units
  const baseShip = fleetUnits.find(unit => unit.name === baseShipId);

  // Update amounts based on base ship amount and ratios
  useEffect(() => {
    if (baseShipId) {
      if (baseShip) {
        const baseAmount = baseShip.amount;

        setFleetUnits(prevUnits =>
          prevUnits.map(unit => {
            if (unit.name === baseShipId) {
              return unit; // Don't change the base ship
            } else {
              // Calculate amount based on ratio and base ship amount
              const calculatedAmount = Math.floor(baseAmount * unit.ratio);
              return { ...unit, amount: calculatedAmount };
            }
          })
        );
      }
    }
  }, [baseShipId, baseShip]);

  const handleBaseShipChange = (shipName: string) => {
    // If deselecting the current base ship
    if (shipName === baseShipId) {
      setBaseShipId(null);
      // Reset all amounts when no base ship is selected
      setFleetUnits(prevUnits => prevUnits.map(unit => ({ ...unit, amount: 0 })));
      return;
    }

    // If selecting a new base ship
    setBaseShipId(shipName);

    // Reset the new base ship's amount to 0
    setFleetUnits(prevUnits => prevUnits.map(unit => (unit.name === shipName ? { ...unit, amount: 0 } : unit)));
  };

  const handleBaseShipAmountChange = (value: string, shipName: string) => {
    // Only allow positive numbers
    const numValue = Number.parseInt(value, 10);
    const newAmount = isNaN(numValue) || numValue < 0 ? 0 : numValue;

    setFleetUnits(prevUnits => prevUnits.map(unit => (unit.name === shipName ? { ...unit, amount: newAmount } : unit)));
  };

  const handleRatioChange = (value: string, shipName: string) => {
    // Only allow positive numbers
    const numValue = Number.parseFloat(value);
    const newRatio = isNaN(numValue) || numValue < 0 ? 0 : numValue;

    setFleetUnits(prevUnits => prevUnits.map(unit => (unit.name === shipName ? { ...unit, ratio: newRatio } : unit)));
  };

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
              <TableHead className="w-[200px] text-white font-semibold">Fleet</TableHead>
              <TableHead className="text-center text-white font-semibold">Base Ship</TableHead>
              <TableHead className="text-right text-white font-semibold">Amount</TableHead>
              <TableHead className="text-right text-white font-semibold">Ratio</TableHead>
              <TableHead className="text-right text-white font-semibold">Metal</TableHead>
              <TableHead className="text-right text-white font-semibold">Crystal</TableHead>
              <TableHead className="text-right text-white font-semibold">Deuterium</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fleetUnits.map((unit, index) => {
              const isBaseShip = baseShipId === unit.name;

              return (
                <TableRow key={unit.name} className={index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"}>
                  <TableCell className="font-medium text-slate-200">{unit.name}</TableCell>
                  <BaseShipCell baseShipName={baseShipId} fleetUnit={unit} onChange={handleBaseShipChange} />
                  <AmountCell baseShipName={baseShipId} fleetUnit={unit} onChange={handleBaseShipAmountChange} />
                  <TableCell className="text-right">
                    {isBaseShip ? (
                      <span className="text-slate-500 font-medium">-</span>
                    ) : (
                      <Input
                        min="0"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={unit.ratio}
                        onChange={e => handleRatioChange(e.target.value, unit.name)}
                        className="w-24 ml-auto text-right bg-slate-700 border-slate-600 text-white"
                      />
                    )}
                  </TableCell>
                  <TableCell className="text-right text-slate-200">{unit.metal}</TableCell>
                  <TableCell className="text-right text-slate-200">{unit.crystal}</TableCell>
                  <TableCell className="text-right text-slate-200">{unit.deuterium}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter className="bg-slate-700">
            <TableRow>
              <TableCell className="font-bold text-white">Total</TableCell>
              <TableCell />
              <TableCell className="text-right font-bold text-white">{totals.amount}</TableCell>
              <TableCell />
              <TableCell className="text-right font-bold text-white">{totals.metal}</TableCell>
              <TableCell className="text-right font-bold text-white">{totals.crystal}</TableCell>
              <TableCell className="text-right font-bold text-white">{totals.deuterium}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default FleetManagementTable;
