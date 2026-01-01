/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort();

    const first = strs[0];
    const last = strs[strs.length - 1];
    const minLength = Math.min(first.length, last.length);

    let i = 0;

    while (i <= minLength && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i);
};

let strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs)) // fl

strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs)) // ""