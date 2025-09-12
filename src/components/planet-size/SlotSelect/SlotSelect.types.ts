// SlotSelect component types and interfaces

export interface SlotSelectProps {
  className?: string;
}

export interface SlotData {
  slot: number;
  minFields: number;
  maxFields: number;
  minTemp: number;
  maxTemp: number;
  bonus?: string;
}
