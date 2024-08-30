import path from "path";
import fs from "fs-extra";
export default async function create(projectName: string, options: any) {
  console.log("create", projectName, options);
  const cwd = process.cwd();
  console.log("cwd", cwd);
  const targetDir = path.resolve(cwd, projectName || ".");
  console.log(targetDir, cwd);
  if (fs.existsSync(targetDir)) {
    console.error(`目录已经存在: ${targetDir}`);
    await fs.remove(targetDir);
  }
  await fs.copy("../template", targetDir);
}
