const JOURNAL = require('./journal.js');

/* Data Sets */

function dataSets() {
    let listofNumbers = [2, 3, 5, 7, 11];
    console.log(listofNumbers[2]);
    console.log(listofNumbers[0]);
    console.log(listofNumbers[2 - 1]);
}

/* Properties */

function properties() {
    console.log(null.length); // TypeError
}

/* Methods */

function methods() {
    let doh = "Doh";
    console.log(typeof doh.toUpperCase);
    console.log(doh.toUpperCase());

    let sequence = [1, 2, 3];
    sequence.push(4);
    sequence.push(5);
    console.log(sequence);
    console.log(sequence.pop());
    console.log(sequence);
}

/* Objects */

function objects() {
    let day1 = {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running"]
    };
    console.log(day1.squirrel);
    console.log(day1.wolf);
    day1.wolf = false;
    console.log(day1.wolf);

    let descriptions = {
        work: "Went to work",
        "touched tree": "Touched a tree"
    };

    let anObject = {left: 1, right: 2};
    console.log(anObject.left);

    delete anObject.left;
    console.log(anObject.left);
    console.log("left" in anObject);
    console.log("right" in anObject);

    console.log(Object.keys({x: 0, y: 0, z: 2}));

    let objectA = {a: 1, b: 2};
    Object.assign(objectA, {b: 3, c: 4});
    console.log(objectA);
}

/* Mutability */

function mutability() {
    let object1 = {value: 10};
    let object2 = object1;
    let object3 = {value: 10};

    console.log(object1 == object2);
    console.log(object1 == object3);

    object1.value = 15;
    console.log(object2.value);
    console.log(object3.value);

    const score = {visitors: 0, home: 0};
    // This is okay
    score.visitors = 1;
    // This isn't allowed
    // score = {visitors: 1, home: 1};
}

/* The lycanthrope's Log */

function lycanthropeLog() {
    let journal = [];

    function addEntry(events, squirrel) {
        journal.push({events, squirrel});
    }

    addEntry(["work", "touched tree", "pizza", "running", "television"], false);
    addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
    addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
}

/* Computing Correlation */

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

/* Array Loops */

function arrayLoops() {
    for (let i = 0; i < JOURNAL.length; i++) {
        let entry = JOURNAL[i];
    }

    for (let entry of JOURNAL) {
        console.log(`${entry.events.length} events.`);
    }
}

/* Final Analysis */

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

function allCorrelations() {
    for (let event of journalEvents(JOURNAL)) {
        console.log(event + ":", phi(tableFor(event, JOURNAL)));
    }
}

function correlationsFilter() {
    for (let event of journalEvents(JOURNAL)) {
        let correlation = phi(tableFor(event, JOURNAL));
        if (correlation > 0.1 || correlation < -0.1) {
            console.log(event + ":", correlation);
        }
    }
}

function finalCorrelation() {
    for (let entry of JOURNAL) {
        if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
            entry.events.push("peanut teeth");
        }
    }
}

/* Further Arrayology */

function furtherArrayology() {
    let todoList = [];
    function remember(task) {
        todoList.push(task);
    }
    function getTask() {
        return todoList.shift();
    }
    function remeberUrgently(task) {
        todoList.unshift(task);
    }
    console.log([1, 2, 3, 2, 1].indexOf(2));
    console.log([1, 2, 3, 2, 1].lastIndexOf(2));

    console.log([0, 1, 2, 3, 4].slice(2, 4));
    console.log([0, 1, 2, 3, 4].slice(2));

    function remove(array, index) {
        return array.slice(0, index).concat(array.slice(index + 1));
    }
    console.log(remove(["a", "b", "c", "d", "e"], 2));
}

/* Strings and Their Properties */

function stringsProperties() {
    let kim = "Kim";
    kim.age = 88;
    console.log(kim.age);

    console.log("coconuts".slice(4, 7));
    console.log("coconuts".indexOf("u"));
    console.log("one two three".indexOf("ee"));
    console.log("  okay \n ".trim());
    console.log(String(6).padStart(3, "0"));

    let sentence = "Secretarybirds specialize in stomping";
    let words = sentence.split(" ");
    console.log(words);
    console.log(words.join(". "));

    console.log("LA".repeat(3));

    let string = "abc";
    console.log(string.length);
    console.log(string[1]);
}

/* Rest Parameters */

function restParameters() {
    function max(...numbers) {
        let result = -Infinity;
        for (let number of numbers) {
            if (number > result) result = number;
        }
        return result;
    }
    console.log(max(4, 1, 9, -2));

    let numbers = [5, 1, 7];
    console.log(max(...numbers));

    let words = ["never", "fully"];
    console.log(["will", ...words, "understand"]);
}

/* The Math Object */

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}

function randomTest() {
    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.floor(Math.random() * 10));
}

/* Destructuring */

function phi2([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01)/
        Math.sqrt((n10 + n11) * (n00 + n01) *
            (n01 + n11) * (n00 + n10));
}

function destructuring() {
    let {name} = {name: "Faraji", age: 23};
    console.log(name);
}

// dataSets();
// methods();
// objects();
// mutability();
// console.log(phi[76, 9, 4, 1]));
// console.log(tableFor("pizza", JOURNAL));
// console.log(journalEvents(JOURNAL));
// finalCorrelation();
// console.log(phi(tableFor("peanut teeth", JOURNAL)));
// furtherArrayology();
// stringsProperties();
// restParameters();
// console.log(randomPointOnCircle(2));
// console.log(randomPointOnCircle(2));
// randomTest();
// destructuring();

