"use client";

import { twMerge } from "tailwind-merge";

import { RecyclerHelpPanelProps as Props } from "./RecyclerHelpPanel.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RecyclerHelpPanel = (props: Props) => {
  const { className } = props;

  return (
    <Card className={twMerge("RecyclerHelpPanel", className)}>
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
        <CardDescription>Understanding the recycler calculation</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>
          When ships are destroyed in battle, they leave behind a debris field containing a percentage of the resources
          used to build them. Recyclers can be sent to collect these resources.
        </p>

        <div className="grid gap-4 @lg/main:grid-cols-2 @3xl/main:grid-cols-3 @5xl/main:grid-cols-4">
          <div className="border rounded-md p-3 flex flex-col gap-1">
            <h4 className="font-medium">Debris Field</h4>
            <p className="text-sm text-muted-foreground">
              By default, 30% of metal and crystal from destroyed ships goes into the debris field. Some servers also
              include deuterium in the debris field. You can adjust these settings based on your server configuration.
            </p>
          </div>

          <div className="border rounded-md p-3 flex flex-col gap-1">
            <h4 className="font-medium">Recycler Capacity</h4>
            <p className="text-sm text-muted-foreground">
              Each recycler has a cargo capacity that determines how many resources it can collect. The default is
              20,000 units, but this can vary based on research and server settings.
            </p>
          </div>

          <div className="border rounded-md p-3 flex flex-col gap-1">
            <h4 className="font-medium">Calculation</h4>
            <p className="text-sm text-muted-foreground">
              The number of recyclers needed is calculated by dividing the total debris field size (metal + crystal +
              deuterium if included) by the capacity of each recycler, rounded up.
            </p>
          </div>

          <div className="border rounded-md p-3 flex flex-col gap-1">
            <h4 className="font-medium">Why</h4>
            <p className="text-sm text-muted-foreground">
              Even if you’re online, you can’t move static ships like solar satellites and crawlers. This tool
              calculates the minimum number of recyclers needed to harvest debris fields and maximize your resource
              collection.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecyclerHelpPanel;
