const nums = [1,2,3];

var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        count += nums[right] - nums[left];
        left++;
        right--;
    }
    return count;
};

console.log(minMoves2(nums));