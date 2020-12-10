/* The Sum of a Range */

function range(start, end) {
    let buffer = [];
    let step = start < end ? 1 : -1
    while (start !== end) {
        buffer.push(start);
        start += step;
    }
    if (buffer) buffer.push(start);
    return buffer;
}

function sum(array) {
    let sum = 0;
    for (let elem of array) {
        sum += elem;
    }
    return sum;
}

function range2(start, end, step = 1) {
    let buffer = [];
    let curr = start;
    if ((start <= end && step > 0) || (end <= start && step < 0)) {
        for (; start <= end ? curr <= end : end <= curr; curr += step) {
            buffer.push(curr);
        }
    }
    return buffer;
}

console.log(sum(range2(1, 10, 2)));
console.log(sum(range2(5, 2, -1)));
console.log(sum(range2(1, 10, -1)));
console.log(sum(range2(1, 10, 0)));
console.log(sum(range2(10, 1, 1)));
console.log(sum(range2(10, 1)));
console.log(sum(range2(1, 10)));
