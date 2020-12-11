const SCRIPTS = require('./scripts.js');

/* Abstracting Repetition */

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function abstractingRepetition() {

    repeat(3, console.log);

    let labels = [];
    repeat(5, i => {
        labels.push(`Unit ${i + 1}`);
    });
    console.log(labels);
}

/* Higher-Order Functions */

function greaterThan(n) {
    return m => m > n;
}

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

function unless(test, then) {
    if (!test) then();
}

function higherOrderFunctions() {
    let greaterThan10 = greaterThan(10);
    console.log(greaterThan10(11));

    noisy(Math.min)(3, 2, 1);
    repeat(3, n => {
        unless(n % 2 == 1, () => {
            console.log(n, "is even");
        });
    });

    ["A", "B"].forEach(l => console.log(l));
}

/* Filtering Arrays */

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

function filteringArrays() {
    console.log(SCRIPTS.filter(s => s.direction == "ttb"));
}

/* Transforming with map */

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

function transformingWithMap() {
    let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
    console.log(map(rtlScripts, s => s.name));
}

/* Summarizing with reduce */

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

function summarizingWithReduce() {
    console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
    console.log([1, 2, 3, 4].reduce((a, b) => a + b));
    console.log(SCRIPTS.reduce((a, b) => {
        return characterCount(a) < characterCount(b) ? b : a;
    }));
}

/* Composability */

function biggest() {
    let biggest = null;
    for (let script of SCRIPTS) {
        if (biggest == null || characterCount(biggest) < characterCount(script)) {
            biggest = script;
        }
    }
    return biggest;
}

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

function composability() {
    console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
    console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));
}

function averageYear() {
    let total = 0, count = 0;
    for (let script of SCRIPTS) {
        if (script.living) {
            total += script.year;
            count += 1;
        }
    }
    return Math.round(total / count);
}

/* Strings and character Codes */

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function stringCharacterCodes() {
    console.log(characterScript(121));
    let horseShoe = "🐴👟";
    console.log(horseShoe.length);
    console.log(horseShoe[0]);
    console.log(horseShoe.charCodeAt(0));
    console.log(horseShoe.codePointAt(0));

    let roseDragon = "🌹🐉";
    for (let char of roseDragon) {
        console.log(char);
    }
}

/* Recognizing Text */

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

function recognizingText() {
    console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
}

// abstractingRepetition();
// higherOrderFunctions();
recognizingText();

