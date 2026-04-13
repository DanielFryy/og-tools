"use client";
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Rectangle, ResponsiveContainer } from "recharts";
import { Sector, Tooltip, XAxis, YAxis } from "recharts";
import type { BarShapeProps, PieSectorShapeProps, RectangleProps, SectorProps } from "recharts";

import { DefenseChartDatum, DefenseChartProps as Props } from "./DefenseChart.types";
import { getDatumColor } from "./DefenseChart.utils";
import EmptyState from "@/components/global/EmptyState/EmptyState";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { calculateTotals } from "@/lib/utils";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const renderPieShape = (props: PieSectorShapeProps) => {
  const { index, isActive, payload, ...sectorProps } = props;

  return <Sector {...(sectorProps as SectorProps)} fill={getDatumColor(payload) ?? props.fill} />;
};

const renderBarShape = (props: BarShapeProps) => {
  const { index, isActive, option, payload, ...rectangleProps } = props;

  return <Rectangle {...(rectangleProps as RectangleProps)} fill={getDatumColor(payload) ?? props.fill} />;
};

const DefenseChart = (props: Props) => {
  const { units } = props;
  const playerClassType = useGlobalsStore(state => state.selectedPlayerClass.type);

  const totals = calculateTotals(units, playerClassType, false);

  // Calculate total and percentages
  const totalPoints = (totals.crystal + totals.deuterium + totals.metal) / 1_000;
  const hasData = totalPoints > 0;

  const data: DefenseChartDatum[] = units
    .map((unit, index) => {
      const { name, amount, cost, enabled } = unit;
      const { metal, crystal, deuterium } = cost;
      const points = (amount * (metal + crystal + deuterium)) / 1_000;
      const percentage = ((points / totalPoints) * 100).toFixed(2);

      if (!enabled) return;

      return {
        name,
        value: points,
        percentage,
        color: `var(--chart-${index + 1})`
      };
    })
    .filter(Boolean);

  return (
    <Card className="w-full md:min-w-3xl">
      <CardHeader>
        <CardTitle>Defense Points Distribution</CardTitle>
        <CardDescription>All defense structures balance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="donut" className="w-full flex flex-col gap-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger className="cursor-pointer" value="donut">
              Donut Chart
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="pie">
              Pie Chart
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="bar">
              Bar Chart
            </TabsTrigger>
          </TabsList>

          <div className="h-80 w-full border rounded-md">
            {hasData ? (
              <>
                <TabsContent value="donut" className="h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent = 0 }) => `${name}: ${(percent * 100).toFixed(2)}%`}
                        labelLine={false}
                        shape={renderPieShape}
                      />
                      <Tooltip
                        formatter={value => [`${value?.toLocaleString()} points`, "Points"]}
                        labelFormatter={name => name}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </TabsContent>

                <TabsContent value="pie" className="h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, percent = 0 }) => `${name}: ${(percent * 100).toFixed(2)}%`}
                        shape={renderPieShape}
                      />
                      <Tooltip
                        formatter={value => [`${value?.toLocaleString()} points`, "Points"]}
                        labelFormatter={name => name}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </TabsContent>

                <TabsContent value="bar" className="h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip
                        formatter={(value, name, item) => {
                          const { percentage = "0" } = item.payload;
                          return [`${value?.toLocaleString()} points (${percentage}%)`, "Points"];
                        }}
                        labelFormatter={name => name}
                      />
                      <Legend />
                      <Bar dataKey="value" name="Points" radius={[0, 4, 4, 0]} shape={renderBarShape} />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
              </>
            ) : (
              <EmptyState />
            )}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DefenseChart;
