const s = "())";
var minAddToMakeValid = function(s) {
  let openCount = 0;
  let closeCount = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '(') {
      openCount++;
    } else if (char === ')') {
      if (openCount > 0) {
        openCount--;
      } else {
        closeCount++;
      }
    }
  }
  return openCount + closeCount;
}
console.log(minAddToMakeValid(s));