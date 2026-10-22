const command = "G()(al)";
var interpret = function(command) {
  let result = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] == '(' && command[i + 1] == ')') {
      result += 'o';
    } else if (command[i] == '(' && command[i + 1] == 'a' && command[i + 2] == 'l' && command[i + 3] == ')') {
      result += 'al';
    } else if (command[i] == 'G') {
      result += 'G';
    }
  }
  return result;
};
console.log(interpret(command));