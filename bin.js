const { exec } = require("child_process");

// 要执行的命令
const command = "cd packages && cd cli && npm start -- create a";

// 执行命令
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行命令时出错: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
});
