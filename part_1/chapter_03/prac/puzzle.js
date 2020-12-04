function solver(num) {
    let operation = "*";

    if (num === 1) return "_";
    if (num < 1) return null;

    res = solver(num / 3);

    if (res === null) {
        operation = "+";
        res = solver(num - 5);
    }

    return res && res + operation;
}

console.log(solver(24));

