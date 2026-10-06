const strs = ["eat","tea","tan","ate","nat","bat"];

var groupAnagrams = function(strs) {
  const res = {};
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!res[sortedStr]) {
      res[sortedStr] = [];
    }
    res[sortedStr].push(str);
  }
  return Object.values(res);
}

console.log(groupAnagrams(strs));