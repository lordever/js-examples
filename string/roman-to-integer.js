/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanToIntMap = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let i = 0;
    let sum = 0;

    while (i < s.length) {
        if (i < s.length - 1 && romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
            sum += romanToIntMap[s[i + 1]] - romanToIntMap[s[i]];
            i += 2;
        } else {
            sum += romanToIntMap[s[i]];
            i++;
        }
    }

    return sum;
};

/**
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */

let s = "III";
console.log(romanToInt(s)) // 3

s = "LVIII";
console.log(romanToInt(s)) // 58

s = "MCMXCIV"
console.log(romanToInt(s)) // 1994