import { DefaultLegendContent } from "recharts";

import { LegendWithoutRangeProps as Props } from "./LegendWithoutRange.types";

const LegendWithoutRange = (props: Props) => {
  const { payload, content, ...rest } = props;

  const newPayload = payload?.filter(x => x.dataKey !== "minMaxRange");
  // @ts-ignore - Ignoring type issue with recharts
  return <DefaultLegendContent payload={newPayload} {...rest} />;
};

export default LegendWithoutRange;
