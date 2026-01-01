/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }

    return left;
};

let nums = [1, 3, 5, 6]
console.log(searchInsert(nums, 5)) // 2
console.log(searchInsert(nums, 2)) // 1
console.log(searchInsert(nums, 7)) // 4