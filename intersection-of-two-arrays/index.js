/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let uniqueSet = new Set(nums1);
    return [...new Set(nums2.filter(n => uniqueSet.has(n)))];
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // [2]

nums1 = [4, 9, 5]
nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2)) // [9,4]