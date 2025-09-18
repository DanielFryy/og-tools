import { useTheme } from "next-themes";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ReferenceLine } from "recharts";
import { ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { twMerge } from "tailwind-merge";

import { TemperatureBySlotChartProps as Props } from "./TemperatureBySlotChart.types";
import { planetSlots } from "../../SlotSelect/SlotSelect.helpers";
import LegendWithoutRange from "../LegendWithoutRange/LegendWithoutRange";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TemperatureBySlotChart = (props: Props) => {
  const { className } = props;
  const { theme } = useTheme();
  const minColor = theme === "dark" ? "oklch(70.7% 0.165 254.624)" : "oklch(54.6% 0.245 262.881)";
  const avgColor = theme === "dark" ? "oklch(85.2% 0.199 91.936)" : "oklch(68.1% 0.162 75.834)";
  const maxColor = theme === "dark" ? "oklch(70.4% 0.191 22.216)" : "oklch(57.7% 0.245 27.325)";
  const primary = theme === "dark" ? "#ffffff" : "#000000";
  const mappedSlots = planetSlots.map(slot => {
    const { minTemp, maxTemp } = slot;
    return { ...slot, avgTemp: Math.round((minTemp + maxTemp) / 2), minMaxRange: [maxTemp, minTemp] };
  });

  return (
    <Card className={twMerge("TemperatureBySlotChart w-full md:min-w-3xl", className)}>
      <CardHeader>
        <CardTitle>Temperature by Planet Slot</CardTitle>
        <CardDescription>
          Visual representation of the temperature ranges across different planet slots.
        </CardDescription>
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
                  <ReferenceLine y={0} stroke={primary} />
                  <Area type="monotone" dataKey="maxTemp" stroke={maxColor} fill={maxColor} fillOpacity={0.9} />
                  <Area type="monotone" dataKey="avgTemp" stroke={avgColor} fill={avgColor} fillOpacity={0.9} />
                  <Area type="monotone" dataKey="minTemp" stroke={minColor} fill={minColor} fillOpacity={0.9} />
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
                  <ReferenceLine y={0} stroke={primary} />
                  <Bar dataKey="minTemp" fill={minColor} />
                  <Bar dataKey="avgTemp" fill={avgColor} />
                  <Bar dataKey="maxTemp" fill={maxColor} />
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
                  <Line type="natural" dataKey="avgTemp" stroke={avgColor} connectNulls />
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

export default TemperatureBySlotChart;
