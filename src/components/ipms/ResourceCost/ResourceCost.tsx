"use client";

import { twMerge } from "tailwind-merge";

import { ResourceCostProps as Props } from "./ResourceCost.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { INTERPLANETARY_MISSILES } from "@/config/constants";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const { cost: IPM_COSTS } = INTERPLANETARY_MISSILES;

const ResourceCost = (props: Props) => {
  const { className } = props;
  const result = useIpmsStore(state => state.result);

  if (!result) return null;

  return (
    <Card className={twMerge("ResourceCost", className)}>
      <CardHeader>
        <CardTitle>Resource Cost</CardTitle>
        <CardDescription>Total resources needed to build the required IPMs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-red-500">{(IPM_COSTS.metal * result).toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Metal</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-blue-500">{(IPM_COSTS.crystal * result).toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Crystal</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-green-500">{(IPM_COSTS.deuterium * result).toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Deuterium</div>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Cost per IPM: {IPM_COSTS.metal.toLocaleString()} Metal, {IPM_COSTS.crystal.toLocaleString()} Crystal,{" "}
          {IPM_COSTS.deuterium.toLocaleString()} Deuterium
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCost;
