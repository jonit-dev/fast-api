/// <reference types="vitest" />

import { defineConfig } from "vite";
import swc from "vite-plugin-swc-transform";

export default defineConfig({
  test: {
    root: "./src",
    setupFiles: ["./vitest.setup.ts"],
  },
  plugins: [
    // @ts-ignore
    swc({
      // required for supertest working with vitest
      swcOptions: {
        jsc: {
          target: "es2022",
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            useDefineForClassFields: false,
          },
          // externalHelpers: true,
        },
      },
    }),
  ],
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
