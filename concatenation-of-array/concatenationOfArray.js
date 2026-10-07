const nums = [1, 2, 1];
var getConcatenation = function(nums) {
  let newnums = [];
  for (let i = 1; i <= 2; i++) {
    for (let num of nums) {
      newnums.push(num);
    }
  }
  return newnums;
}
console.log(getConcatenation(nums));