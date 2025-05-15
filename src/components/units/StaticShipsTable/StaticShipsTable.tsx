"use client";

import { twMerge } from "tailwind-merge";

import { StaticShipsTableProps as Props } from "./StaticShipsTable.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import UnitsManagementTable from "@/components/units/UnitsManagementTable/UnitsManagementTable";
import { useRecyclersStore } from "@/stores/recyclers/recyclers.store";

const StaticShipsTable = (props: Props) => {
  const { className } = props;
  const units = useRecyclersStore(state => state.units);
  const setAmount = useRecyclersStore(state => state.setAmount);

  return (
    <Card className={twMerge("StaticShipsTable", className)}>
      <CardHeader>
        <CardTitle>Static Ships</CardTitle>
        <CardDescription>Enter the amount of static ships that will be destroyed</CardDescription>
      </CardHeader>
      <CardContent>
        <UnitsManagementTable units={units} onAmountChange={setAmount} isFree />
      </CardContent>
    </Card>
  );
};

export default StaticShipsTable;
