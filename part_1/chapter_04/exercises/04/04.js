function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (!(obj1 && obj2)) return false;
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let i = 0; i < keys1.length; i++) {
        let propEqual = deepEqual(obj1[keys1[i]], obj2[keys1[i]])
        if (!propEqual) return false;
    }
    return true;
}

let c = {
    mango: 4
}

let a = {
    apple: 1,
    banana: 2,
    orange: 3,
    mango: c,
}

let b = {
    apple: 1,
    banana: 2,
    orange: 3,
    mango: c,
}

let arr1 = [1, 2, 3, 4, a]
let arr2 = [1, 2, 3, 4, b]

console.log(deepEqual(arr1, arr2));
