import { provide } from "inversify-binding-decorators";
import { ConsoleHelper } from "./ConsoleHelper";

@provide(ServerHelper)
export class ServerHelper {
  constructor(private consoleHelper: ConsoleHelper) {}

  public showBootstrapMessage(config: { env: string; port: number; startTimeMs: number }): void {
    const { port, env, startTimeMs } = config;

    this.consoleHelper.coloredLog(
      `⚙️  Server running: ${env} | Port ${port} | Bootstrap time: ${startTimeMs}ms`,
      "YELLOW"
    );
  }

  public async sleep(ms): Promise<void> {
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }
}
