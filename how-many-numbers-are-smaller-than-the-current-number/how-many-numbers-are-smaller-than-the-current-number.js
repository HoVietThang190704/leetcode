const nums = [8,1,2,2,3];
var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    const map = new Map();
    for (let i = 0; i < sortedNums.length; i++) {
        if (!map.has(sortedNums[i])) {
            map.set(sortedNums[i], i);
        }
    }
    return nums.map(num => map.get(num));
};
console.log(smallerNumbersThanCurrent(nums));