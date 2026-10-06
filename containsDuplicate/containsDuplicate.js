const nums = [1, 2, 3, 4, 5];

var containsDuplicate = function(nums) {
  let set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

console.log(containsDuplicate(nums));