"use client";

import { twMerge } from "tailwind-merge";

import FieldsBySlotChart from "./FieldsBySlotChart/FieldsBySlotChart";
import { PlanetSlotChartsProps as Props } from "./PlanetSlotCharts.types";
import TemperatureBySlotChart from "./TemperatureBySlotChart/TemperatureBySlotChart";

const PlanetSlotCharts = (props: Props) => {
  const { className } = props;

  return (
    <div className={twMerge("PlanetSlotCharts flex flex-col gap-6", className)}>
      <FieldsBySlotChart />
      <TemperatureBySlotChart />
    </div>
  );
};

export default PlanetSlotCharts;
