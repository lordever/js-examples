/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i] += 1;
            return digits;
        }
    }

    return [1, ...digits];
};

function main() {
    const nums = [
        [1, 0, 5],
        [9, 9],
        [1, 9, 3, 2, 1],
        [6, 8],
        [1, 7, 6, 9]
    ];

    nums.forEach((numArray, index) => {
        console.log(`${index + 1}.\tGiven array: [${numArray.join(", ")}]`);
        const result = plusOne(numArray);
        console.log(`\n\tThe result: [${result.join(", ")}]`);
        console.log('-'.repeat(100));
    });
}

main();