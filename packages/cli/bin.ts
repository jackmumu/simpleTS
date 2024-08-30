import { Command } from "commander";
import create from "./lib/create";
const program = new Command();
program
  .command("create <app-name>")
  .description("创建一个新的应用程序")
  .action((appName: string) => {
    console.log(`创建应用程序: ${appName}`);
    create(appName, {});
  });

program.parse(process.argv);
