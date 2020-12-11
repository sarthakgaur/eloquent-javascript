/* Your Own Loop */

function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

loop(
    0,
    (value) => value < 11,
    (value) => ++value,
    (value) => { console.log(value) }
);
