import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import type { ViteUserConfig } from "vitest/config";

const config: ViteUserConfig = {
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  test: { globals: true, environment: "jsdom", setupFiles: ["./src/setupTestBeforeEnv.ts", "./src/setupTests.tsx"] }
};

export default config;
