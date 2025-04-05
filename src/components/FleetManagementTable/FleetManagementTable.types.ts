// FleetManagementTable component types and interfaces

export interface FleetManagementTableProps {
  className?: string;
}

export interface Ship {
  name: string;
  resources: {
    metal: number;
    crystal: number;
    deuterium: number;
  };
  cargoCapacity: number;
  speed: number;
}

export interface FleetUnit extends Ship {
  amount: number;
  ratio: number;
}
