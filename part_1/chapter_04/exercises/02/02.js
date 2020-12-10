/* Reversing an Array */

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    let start = 0;
    let end = array.length - 1;
    for (; start < end; start++, end--) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
    }
}

let arr = [5, 6, 7, 8, 9];
console.log(reverseArray([1, 2, 3, 4 ,5]));
reverseArrayInPlace(arr);
console.log(arr);

// reverseArrayInPlace is useful in more situations
// reverseArrayInPlace is propably faster;
