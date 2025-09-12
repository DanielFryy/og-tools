import Breakdown from "@/components/planet-size/Breakdown/Breakdown";
import Information from "@/components/planet-size/Information/Information";
import InputsSection from "@/components/planet-size/InputsSection/InputsSection";
import Results from "@/components/planet-size/Results/Results";

export default function PlanetSizePage() {
  return (
    <div className="PlanetSizePage flex-1 flex items-center justify-center h-fit min-h-full">
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
