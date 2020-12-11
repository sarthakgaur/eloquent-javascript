/* Everything */

function every(array, predicate) {
    for (let elem of array) {
        if (!predicate(elem)) return false;
    }
    return true;
}

function every2(array, predicate) {
    return !array.some((elem) => {
        return !predicate(elem);
    });
}

console.log(every([1, 2, 3, 4], (elem) => elem > 0));
console.log(every2([0, 2, 3, 4], (elem) => elem > 0));
