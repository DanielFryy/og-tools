"use client";

import { twMerge } from "tailwind-merge";

import { ResultsProps as Props } from "./Results.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const Results = (props: Props) => {
  const { className } = props;
  const result = useIpmsStore(state => state.result);

  if (!result) return null;

  return (
    <Card className={twMerge("Results", className)}>
      <CardHeader>
        <CardTitle>IPM Requirements</CardTitle>
        <CardDescription>Total Interplanetary Missiles needed to destroy all defenses</CardDescription>
      </CardHeader>
      <CardContent className="text-center flex flex-col items-center gap-2">
        <div className="text-4xl font-bold text-primary">{result}</div>
        <div className="text-lg text-muted-foreground">Interplanetary Missiles</div>
      </CardContent>
    </Card>
  );
};

export default Results;
