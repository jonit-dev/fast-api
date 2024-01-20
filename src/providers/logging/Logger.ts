import { provide } from "inversify-binding-decorators";

import { createLogger, format, Logger } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

@provide(LoggerManager)
export class LoggerManager {
  public setupLogger(): Logger {
    return createLogger({
      level: "warn",
      format: format.json(),
      transports: [
        new DailyRotateFile({
          filename: "logs/error-%DATE%.log",
          datePattern: "YYYY-MM-DD",
          zippedArchive: true,
          maxSize: "20m",
          maxFiles: "14d",
          level: "error",
        }),
        new DailyRotateFile({
          filename: "logs/combined-%DATE%.log",
          datePattern: "YYYY-MM-DD",
          zippedArchive: true,
          maxSize: "20m",
          maxFiles: "14d",
        }),
      ],
    });
  }
}
