// DefenseStore types and interfaces
import { Defense } from "@/types/Defense.types";

export interface EnhancedDefense extends Defense {
  enabled: boolean;
  amount: number;
  ratio: string;
}

export type DefenseStore = {
  units: EnhancedDefense[];
  baseUnit: EnhancedDefense | null;
  setEnabled: (unitName: string) => void;
  setBaseUnit: (unitName: string | null) => void;
  setRatio: (unitName: string, ratio: string) => void;
  setAmount: (unitName: string, amount: number) => void;
  reset: () => void;
};
