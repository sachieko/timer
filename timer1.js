// System sounds like beep were not working on WSL.
const input = process.argv.slice(2);
const alarm = array => {
  for (const number of array) {
    let parsed = parseInt(number, 10);
    if (!isNaN([parsed]) && parsed >= 0) {
      setTimeout(() => {
        process.stdout.write('Beep. Just pretend you hear a loud beep. Thanks.\n');
      }, parsed * 1000);
    }
  }
};
alarm(input);