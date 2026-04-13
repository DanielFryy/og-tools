import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { ViteUserConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
const config: ViteUserConfig = {
  plugins: [react()],
  resolve: { alias: { "/public": path.resolve(__dirname, "./public") }, tsconfigPaths: true },
  test: { globals: true, environment: "jsdom", setupFiles: ["./src/setupTestBeforeEnv.ts", "./src/setupTests.tsx"] }
};

export default config;
