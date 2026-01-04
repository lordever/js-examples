/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && count > 0) {
            return count;
        }

        if (s[i] === ' ') {
            continue;
        }

        if (s[i] !== ' ') {
            count++;
        }
    }


    return count;
};

let s = "Hello World";
console.log(lengthOfLastWord(s)) // 5

s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s)) // 4

s = "luffy is still joyboy";
console.log(lengthOfLastWord(s)) // 6

s = "a";
console.log(lengthOfLastWord(s)) // 1