nums = [12,345,2,6,7896]
var findNumbers = function(nums) {
    let count = 0;
    for (const num of nums) {
        if (num.toString().length % 2 === 0) count++;
    }
    return count;
};
console.log(findNumbers(nums));