import Breakdown from "@/components/planet-size/Breakdown/Breakdown";
import Information from "@/components/planet-size/Information/Information";
import InputsSection from "@/components/planet-size/InputsSection/InputsSection";
import PlanetSlotCharts from "@/components/planet-size/PlanetSlotCharts/PlanetSlotCharts";
import Results from "@/components/planet-size/Results/Results";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PlanetSizePage() {
  return (
    <div className="PlanetSizePage flex-1 flex items-center justify-center h-fit min-h-full">
      <Tabs defaultValue="values" className="flex flex-col gap-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="values" className="cursor-pointer">
            Values
          </TabsTrigger>
          <TabsTrigger value="graphs" className="cursor-pointer">
            Graphs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="values">
          <div className="grid gap-6 @4xl/main:grid-cols-2 max-w-[120rem]">
            <InputsSection />
            <div className="flex flex-col gap-6">
              <Results />
              <Breakdown />
              <Information />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="graphs">
          <PlanetSlotCharts />
        </TabsContent>
      </Tabs>
    </div>
  );
}
