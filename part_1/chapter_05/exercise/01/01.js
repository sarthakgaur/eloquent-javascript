/* Flattening */

function flatten(arr) {
    return arr.reduce((buffer, elem) => {
        return buffer.concat(elem);
    }, []);
}

console.log(flatten([[1], [2], [3]]));
