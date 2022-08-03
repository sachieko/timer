const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({
  input,
  output,
});
const timePrompt = () => {
  rl.question(`Enter the number of seconds from 1-9 to set a timer for! (To exit use: quit, q, or CMD/CTRL+C)\n`, (reply) => {
    // For sachieko: ON a sigint in this object rl which is waiting for input, it EMITS SIGINT to the PROCESS.
    rl.on("SIGINT", () => {
      process.emit("SIGINT");
    });
    alarm(reply);
    // For sachieko: ON a process SIGINT, output the goodbye text and gracefully terminate the program. AAAH.
    process.on("SIGINT", () => {
      output.write("Thanks for using me, ciao!\n");
      process.exit();
    });
    timePrompt();
  });
};
const alarm = number => {
  let parsed = parseInt(number, 10);
  if (!isNaN([parsed]) && parsed >= 0 && parsed <= 9) {
    output.write(`Setting a timer for ${number} seconds! o7\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parsed * 1000);
  }
};
timePrompt();