/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    root: "./src",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@constants": "/constants",
      "@providers": "/providers",
      "@mocks": "/mocks",
      "@entities": "/entities",
      "@repositories": "/repositories",
      "@useCases": "/useCases",
      "@data": "/providers/data",
    },
  },
});
