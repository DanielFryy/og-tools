import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_ENV: z.union([z.literal("develop"), z.literal("production")]),
  NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: z.string(),
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string()
});

envSchema.parse(process.env);
