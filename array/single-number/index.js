/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();

    for (const n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    for (const [num, count] of map.entries()) {
        if (count === 1) {
            return num;
        }
    }
};

let nums = [2, 2, 1];
console.log(singleNumber(nums)) // 1

//0000
//0010
//res = 0010
// a -> 2

//0010
//0010
//res = 0000
//a -> 0

//0001
//0001
//res = 1110


nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)) //4

nums = [1];
console.log(singleNumber(nums)) //1