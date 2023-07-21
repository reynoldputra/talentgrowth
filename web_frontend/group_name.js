const readline = require("readline");

function isAlphabet(char) {
  return /^[A-Za-z]$/.test(char);
}

function checkGroup (name) {
  const firstChar = name[0]
  if(!isAlphabet(firstChar)) {
    console.log("Invalid")
    return
  }

  const group = [
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h", "i"]
  ]

  if(group[0].includes(firstChar)) {
    console.log("In a first group")
    return
  }

  if(group[1].includes(firstChar)) {
    console.log("In a second group")
    return
  }

  console.log("In a last group")
  return
}

function userInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter name: ", (name) => {
    console.log(name);
    checkGroup(name)
    rl.close();
    userInput();
  });
}

function main() {
  userInput();
}

main();
