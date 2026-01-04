/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const dictionary = {')': '(', ']': '[', '}': '{'};
    const stack = [];

    for (const c of s) {
        if (!(c in dictionary)) {
            stack.push(c);
        } else if (stack.length === 0 || stack.pop() !== dictionary[c]) {
            return false;
        }
    }

    return stack.length === 0;
};

let s = "()"
console.log(isValid(s)) // true

s = "()[]{}"
console.log(isValid(s)) // true

s = "(]"
console.log(isValid(s)) // false


s = "([])"
console.log(isValid(s)) // true

s = "([)]"
console.log(isValid(s)) // false