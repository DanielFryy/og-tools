"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import { DefenseChartProps as Props } from "./DefenseChart.types";
import EmptyState from "@/components/global/EmptyState/EmptyState";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { calculateTotals } from "@/lib/utils";
import { useGlobalsStore } from "@/stores/globals/globals.store";

const DefenseChart = (props: Props) => {
  const { units } = props;
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType = "Collector" } = selectedPlayerClass ?? {};

  const totals = calculateTotals(units, playerClassType, false);

  // Calculate total and percentages
  const totalPoints = (totals.crystal + totals.deuterium + totals.metal) / 1_000;
  const hasData = totalPoints > 0;

  const data = units
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
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                        labelLine={false}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={value => [`${value.toLocaleString()} points`, "Points"]}
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
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={value => [`${value.toLocaleString()} points`, "Points"]}
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
                        formatter={value => [
                          `${value.toLocaleString()} points (${data.find(item => item.value === value)?.percentage}%)`,
                          "Points"
                        ]}
                        labelFormatter={name => name}
                      />
                      <Legend />
                      <Bar dataKey="value" name="Points" radius={[0, 4, 4, 0]}>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
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
