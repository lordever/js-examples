/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let x = 0;
    let y = s.length - 1;

    while (x < y) {
        while (x < y && !/[a-zA-Z0-9]/.test(s[x])) {
            x++;
        }

        while (x < y && !/[a-zA-Z0-9]/.test(s[y])) {
            y--;
        }

        if (x < y && s[x].toLowerCase() !== s[y].toLowerCase()) {
            return false;
        }

        x++;
        y--;
    }

    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('race a car')) // false
console.log(isPalindrome(' ')) // true