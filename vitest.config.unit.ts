import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
  },
  resolve: {
    alias: {
      create: "/src/pages/api/create",
      read: "/src/pages/api/read",
    },
  },
});
