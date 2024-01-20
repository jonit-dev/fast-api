import "dotenv/config";
import "express-async-errors";
import "reflect-metadata"; //! THIS IMPORT MUST ALWAYS COME FIRST. BEWARE VSCODE AUTO IMPORT SORT!!!

import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { getRouteInfo, InversifyExpressServer } from "inversify-express-utils";
import morgan from "morgan";
import * as prettyjson from "prettyjson";
import { container, loggerManager, serverHelper } from "./providers/inversify/container";
import { errorHandlerMiddleware } from "./providers/middlewares/ErrorHandlerMiddleware";

const port = process.env.PORT || 5000;

const startTime = Date.now();

const server = new InversifyExpressServer(container);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});

server.setConfig((app) => {
  // Middlewares ========================================
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(express.static("public"));
  app.use(limiter);
});

const app = server.build();
app.listen(port, () => {
  const endTime = Date.now();
  const elapsedTime = endTime - startTime;

  serverHelper.showBootstrapMessage({ env: process.env.ENV, port: Number(port), startTimeMs: elapsedTime });

  loggerManager.setupLogger();
});

if (process.argv.includes("--show-routes")) {
  const routeInfo = getRouteInfo(container);
  console.log(prettyjson.render({ routes: routeInfo }));
}

app.use(errorHandlerMiddleware); //! This must come last, otherwise it fails to catch errors thrown
