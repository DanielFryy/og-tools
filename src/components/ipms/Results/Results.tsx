"use client";

import { twMerge } from "tailwind-merge";

import { ResultsProps as Props } from "./Results.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const Results = (props: Props) => {
  const { className } = props;
  const result = useIpmsStore(state => state.result);
  const missileSiloLevel = useIpmsStore(state => state.missileSiloLevel);

  // missiles per round: commonly silo level * 5 (game rule). If level is 0, treat as unlimited single-shot (no rounds)
  const missilesPerRound = missileSiloLevel > 0 ? missileSiloLevel * 5 : 0;

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
        {missilesPerRound > 0 ? (
          <div className="pt-2 text-sm text-muted-foreground">
            {(() => {
              const fullRounds = Math.floor(result / missilesPerRound);
              const remainder = result % missilesPerRound;
              const needsExtra = remainder > 0 ? 1 : 0;
              return (
                <div>
                  <div>
                    Missiles per round: <span className="font-medium">{missilesPerRound}</span>
                  </div>
                  <div>
                    Full rounds: <span className="font-medium">{fullRounds}</span>
                    {needsExtra ? (
                      <span>
                        + 1 partial round with <span className="font-medium">{remainder}</span> missiles
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })()}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default Results;
