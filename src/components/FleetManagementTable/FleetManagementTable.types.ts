// FleetManagementTable component types and interfaces

export interface FleetManagementTableProps {
  className?: string;
}
// Fleet unit data with costs
export interface FleetUnit {
  name: string;
  amount: number;
  ratio: number;
  metal: number;
  crystal: number;
  deuterium: number;
}
