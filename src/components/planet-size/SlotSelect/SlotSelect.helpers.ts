import { SlotData } from "./SlotSelect.types";

export const planetSlots: SlotData[] = [
  { slot: 1, minFields: 96, maxFields: 172, minTemp: 220, maxTemp: 260, bonus: "40% Crystal production bonus" },
  { slot: 2, minFields: 104, maxFields: 176, minTemp: 170, maxTemp: 210, bonus: "30% Crystal production bonus" },
  { slot: 3, minFields: 112, maxFields: 182, minTemp: 120, maxTemp: 160, bonus: "20% Crystal production bonus" },
  { slot: 4, minFields: 118, maxFields: 208, minTemp: 70, maxTemp: 110 },
  { slot: 5, minFields: 133, maxFields: 232, minTemp: 60, maxTemp: 100 },
  { slot: 6, minFields: 146, maxFields: 242, minTemp: 50, maxTemp: 90, bonus: "17% Metal production bonus" },
  { slot: 7, minFields: 152, maxFields: 248, minTemp: 40, maxTemp: 80, bonus: "23% Metal production bonus" },
  { slot: 8, minFields: 156, maxFields: 252, minTemp: 30, maxTemp: 70, bonus: "35% Metal production bonus" },
  { slot: 9, minFields: 150, maxFields: 246, minTemp: 20, maxTemp: 60, bonus: "23% Metal production bonus" },
  { slot: 10, minFields: 142, maxFields: 232, minTemp: 10, maxTemp: 50, bonus: "17% Metal production bonus" },
  { slot: 11, minFields: 136, maxFields: 210, minTemp: 0, maxTemp: 40 },
  { slot: 12, minFields: 125, maxFields: 186, minTemp: -10, maxTemp: 30 },
  { slot: 13, minFields: 114, maxFields: 172, minTemp: -50, maxTemp: -10 },
  { slot: 14, minFields: 100, maxFields: 168, minTemp: -90, maxTemp: -50 },
  { slot: 15, minFields: 90, maxFields: 164, minTemp: -130, maxTemp: -90, bonus: "Highest Deuterium production" }
];
