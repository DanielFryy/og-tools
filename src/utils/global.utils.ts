import { EnhancedShip } from "@/stores/ship/ship.store.types";

export const calculateUnitsDistribution = (baseUnit: EnhancedShip, units: EnhancedShip[]) => {
  const { cost, amount: baseUnitAmount } = baseUnit;
  const { crystal: baseUnitCrystal } = cost;
  // Calculate the total crystal available
  const totalCrystal = baseUnitCrystal * baseUnitAmount;

  // Distribute crystal evenly across all ships
  return units.map(unit => {
    const { cost } = unit;
    const { crystal } = cost;

    // Skip ships with no crystal cost
    if (crystal === 0) return { ...unit, amount: 0 };

    // Calculate the number of ships based on the total crystal available
    const amount = Math.floor(totalCrystal / crystal);

    return { ...unit, amount };
  });
};
