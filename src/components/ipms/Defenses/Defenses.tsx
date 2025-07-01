"use client";

import { twMerge } from "tailwind-merge";

import { DefensesProps as Props } from "./Defenses.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const Defenses = (props: Props) => {
  const { className } = props;
  const units = useIpmsStore(state => state.units);
  const setAmount = useIpmsStore(state => state.setAmount);

  return (
    <Card className={twMerge("Defenses", className)}>
      <CardHeader>
        <CardTitle>Enemy Defense Structures</CardTitle>
        <CardDescription>Enter the amount of each unit structure the enemy has</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {units.map(unit => {
          const { name, type, amount } = unit;
          return (
            <div key={name} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-1">
                <Label htmlFor={name} className="text-sm font-medium">
                  {name}
                </Label>
              </div>
              <div className="w-24">
                {type === "dome" ? (
                  <Switch
                    id={name}
                    checked={Boolean(amount)}
                    onCheckedChange={checked => setAmount(name, Number(checked))}
                  />
                ) : (
                  <Input
                    id={name}
                    type="number"
                    min="0"
                    value={amount}
                    onChange={e => setAmount(name, parseInt(e.target.value, 10) || 0)}
                    className="text-right"
                    placeholder="0"
                  />
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Defenses;
