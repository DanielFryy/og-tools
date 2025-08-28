import Breakdown from "@/components/energy/Breakdown/Breakdown";
import Information from "@/components/energy/Information/Information";
import InputsSection from "@/components/energy/InputsSection/InputsSection";
import Results from "@/components/energy/Results/Results";

export default function FusionCalculatorPage() {
  return (
    <div className="EnergyCalculatorPage flex-1 flex items-center justify-center h-fit min-h-full">
      <div className="grid gap-6 @4xl/main:grid-cols-2 max-w-[120rem]">
        <InputsSection />
        <div className="flex flex-col gap-6">
          <Results />
          <Breakdown />
          <Information />
        </div>
      </div>
    </div>
  );
}
