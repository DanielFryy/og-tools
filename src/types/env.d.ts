// env types and interfaces

type EnvSchema = typeof import("@/config/env.config").envSchema;
type Env = import("zod").z.infer<EnvSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}

export {};
