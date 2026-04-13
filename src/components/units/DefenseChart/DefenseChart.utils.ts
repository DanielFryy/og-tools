// DefenseChart utility function and data

export const getDatumColor = (payload: unknown) => {
  if (typeof payload !== "object" || payload === null || !("color" in payload)) return;

  return typeof payload.color === "string" ? payload.color : undefined;
};
