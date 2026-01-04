/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let x = 0;
    let y = s.length - 1;

    while (x < y) {
        const temp = s[x];
        s[x] = s[y];
        s[y] = temp;

        x++;
        y--;
    }
};

let s = ["h", "e", "l", "l", "o"]
reverseString(s)
console.log(s) // ["o","l","l","e","h"]

s = ["H", "a", "n", "n", "a", "h"]
reverseString(s)
console.log(s) // ["h","a","n","n","a","H"]
