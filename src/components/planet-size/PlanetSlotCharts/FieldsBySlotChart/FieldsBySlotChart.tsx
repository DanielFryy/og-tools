import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line } from "recharts";
import { ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { twMerge } from "tailwind-merge";

import { FieldsBySlotChartProps as Props } from "./FieldsBySlotChart.types";
import { planetSlots } from "../../SlotSelect/SlotSelect.helpers";
import LegendWithoutRange from "../LegendWithoutRange/LegendWithoutRange";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FieldsBySlotChart = (props: Props) => {
  const { className } = props;
  const mappedSlots = planetSlots.map(slot => {
    const { minFields, maxFields } = slot;
    return { ...slot, avgFields: Math.round((minFields + maxFields) / 2), minMaxRange: [maxFields, minFields] };
  });

  return (
    <Card className={twMerge("FieldsBySlotChart", className)}>
      <CardHeader>
        <CardTitle>Fields Distribution by Slot</CardTitle>
        <CardDescription>Field capacity ranges across planet slots</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="area" className="w-full flex flex-col gap-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger className="cursor-pointer" value="area">
              Area
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="bar">
              Bar
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="composed">
              Composed
            </TabsTrigger>
          </TabsList>
          <div className="h-80 w-full border rounded-md">
            <TabsContent value="area" className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mappedSlots} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="slot" />
                  <YAxis tickCount={7} />
                  <Tooltip labelClassName="text-primary" wrapperClassName="!bg-muted" />
                  <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: "40px" }} />
                  <Area type="monotone" dataKey="maxFields" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.9} />
                  <Area type="monotone" dataKey="avgFields" stroke="#ffc658" fill="#ffc658" fillOpacity={0.9} />
                  <Area type="monotone" dataKey="minFields" stroke="#8884d8" fill="#8884d8" fillOpacity={0.9} />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="bar" className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mappedSlots} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="slot" />
                  <YAxis tickCount={7} />
                  <Tooltip labelClassName="text-primary" wrapperClassName="!bg-muted" />
                  <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: "40px" }} />
                  <Bar dataKey="minFields" fill="#8884d8" />
                  <Bar dataKey="avgFields" fill="#ffc658" />
                  <Bar dataKey="maxFields" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="composed" className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={mappedSlots} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="slot" />
                  <YAxis tickCount={7} />
                  <Tooltip labelClassName="text-primary" wrapperClassName="!bg-muted" />
                  <Area
                    type="monotone"
                    dataKey="minMaxRange"
                    stroke="none"
                    fill="#cccccc"
                    connectNulls
                    dot={false}
                    activeDot={false}
                  />
                  <Line type="natural" dataKey="avgFields" stroke="#ffc658" connectNulls />
                  <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: "40px" }} content={LegendWithoutRange} />
                </ComposedChart>
              </ResponsiveContainer>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FieldsBySlotChart;
