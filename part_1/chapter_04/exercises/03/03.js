function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    while (list) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function prepend(elem, list) {
    return {
        value: elem,
        rest: list
    };
}

function nth(index, list) {
    for (let i = 0; list; i++) {
        if (i === index) {
            return list.value;
        }
        list = list.rest;
    }
    return undefined;
}

function nthRecur(index, i, list) {
    if (list) {
        if (i === index) return list.value;
        else return nthRecur(index, i + 1, list.rest);
    }
    return undefined;
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(4, arrayToList([1, 2, 3])));
console.log(nth(2, arrayToList([1, 2, 3, 4, 5])));
console.log(nthRecur(2, 0, arrayToList([1, 2, 3, 4, 5])));
