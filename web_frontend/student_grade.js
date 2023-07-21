const readline = require("readline");

function createGrade(name, score) {
  if (isNaN(score)) {
    console.log("Invalid Score");
    return;
  }

  name = name.toString();
  score = parseInt(score);

  console.log(name, score);

  if (score < 1 || score > 100) {
    console.log("Invalid Score");
    return;
  }

  if (80 <= score && score <= 100) {
    console.log(`${name} get A grade`);
    return;
  }

  if (65 <= score && score <= 79) {
    console.log(`${name} get B grade`);
    return;
  }

  if (50 <= score && score <= 64) {
    console.log(`${name} get C grade`);
    return;
  }

  if (35 <= score && score <= 49) {
    console.log(`${name} get D grade`);
    return;
  }

  if (1 <= score && score <= 34) {
    console.log(`${name} get E grade`);
    return;
  }
}

function userInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter name: ", (name) => {
    rl.question("Enter score : ", (score) => {
      createGrade(name, score);
      rl.close();
      userInput();
    });
  });
}

function main() {
  userInput()
}

main();
