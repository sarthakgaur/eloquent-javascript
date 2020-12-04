/* Recursion */

function isEven(num) {
    if (num < 2) return num === 0;
    return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));

function isEven2(num) {
    if (num < 0) num = -num;
    if (num < 2) return num === 0;
    return isEven(num - 2);
}

console.log(isEven2(-100));
console.log(isEven2(-99));

