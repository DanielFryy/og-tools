"use client";

import { Calculator } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { EmptyProps as Props } from "./Empty.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const Empty = (props: Props) => {
  const { className } = props;
  const result = useIpmsStore(state => state.result);

  if (result) return null;

  return (
    <Card className={twMerge("Empty", className)}>
      <CardHeader>
        <CardTitle>Results</CardTitle>
        <CardDescription>Enter defense structures and click calculate to see results</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-muted-foreground py-8">
          <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No calculations performed yet</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Empty;
