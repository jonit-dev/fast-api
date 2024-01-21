import "dotenv/config";
import "express-async-errors";
import "reflect-metadata"; //! THIS IMPORT MUST ALWAYS COME FIRST. BEWARE VSCODE AUTO IMPORT SORT!!!

import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./src/mocks/server";

if (process.env.UNIT_TEST) {
  // MSW Setup (Unit tests)
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
