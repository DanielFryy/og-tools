"use client";

import { RatioDefensesChartProps as Props } from "./RatioDefensesChart.types";
import DefenseChart from "../DefenseChart/DefenseChart";
import { useDefenseStore } from "@/stores/defense/defense.store";

const RatioDefensesChart = (props: Props) => {
  const units = useDefenseStore(state => state.units);

  return <DefenseChart units={units} />;
};

export default RatioDefensesChart;
