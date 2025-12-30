/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let x = m - 1;
    let y = n - 1;

    for (let z = m + n - 1; z >= 0; z--) {
        if (x < 0) {
            nums1[z] = nums2[y--]
        } else if (y < 0) {
            break;
        } else if (nums1[x] > nums2[y]) {
            nums1[z] = nums1[x--];
        } else {
            nums1[z] = nums2[y--];
        }
    }
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
merge(nums1, m, nums2, n)
console.log(nums1) // [1,2,2,3,5,6]

nums1 = [1]
m = 1
nums2 = []
n = 0
merge(nums1, m, nums2, n)
console.log(nums1) // [1]

nums1 = [0]
m = 0
nums2 = [1]
n = 1
merge(nums1, m, nums2, n)
console.log(nums1) // [1]
