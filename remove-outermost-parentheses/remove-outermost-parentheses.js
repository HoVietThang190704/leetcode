const s = "(()())(())";
var removeOuterParentheses = function(s) {
  let res = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '(') {
      if (count > 0) {
        res += char;
      }
      count ++;
    } else if (char === ')') {
      count --;
      if (count > 0) {
        res += char;
      }
    }
  }
  return res;
}
console.log(removeOuterParentheses(s));