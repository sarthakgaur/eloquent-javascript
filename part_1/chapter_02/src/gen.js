/* Expressions and Statements */

function expr_stmt() {
    1;
    !false;
}

/* Bindings */

function bindings() {
    let caught = 5 * 5;
    let ten = 10;
    console.log(ten * ten);

    let mood = "light";
    console.log(mood);
    mood = "dark";
    console.log(mood);

    let luigisDebt = 140;
    luigisDebt = luigisDebt - 35;
    console.log(luigisDebt);

    let one = 1, two = 2;
    console.log(one + two);

    var name = "Ayda";
    const greeting = "Hello ";
    console.log(greeting + name);
}

/* Functions */

function functions() {
    // prompt("Enter passcode");
    console.log(Math.max(2, 4));
    console.log(Math.min(2, 4) + 100);
}

/* Control Flow */

function control_flow() {
    let theNumber = Number(prompt("Pick a number"));
    console.log("Your number is the square root of " + theNumber * theNumber);
}

/* Conditional Execution */

function conditional_execution() {
    let theNumber = Number(prompt("Pick a number"));
    if (!Number.isNaN(theNumber)) {
        console.log("Your number is the square root of " + theNumber * theNumber);
    }

    if (1 + 1 == 2) console.log("It's true");

    theNumber = Number(Prompt("Pick a number"));
    if (!Number.isNan(theNumber)) {
        console.log("Your number is the square root of " + theNumber * theNumber);
    } else {
        console.log("Hey. Why didn't you give me a number?");
    }

    let num = Number(prompt("Pick a number"));

    if (num < 10) {
        console.log("Small");
    } else if (num < 100) {
        console.log("Medium");
    } else {
        console.log("Large");
    }
}

/* While and do Loops */

function while_do_loops() {
    let number = 0;
    while (number <= 12) {
        console.log(number);
        number = number + 2;
    }

    let result = 1;
    let counter = 0;
    while (counter < 10) {
        result = result * 2;
        counter = counter + 1;
    }
    console.log(result);

    let yourName;
    do {
        yourName = prompt("Who are you?");
    } while (!yourName);
    console.log(yourName);
}

/* Indenting Code */

function indenting_code() {
    if (false != true) {
        console.log("That makes sense.");
        if (1 < 2) {
            console.log("No surprise there.");
        }
    }
}

/* for Loops */

function for_loops() {
    for (let number = 0; number <= 12; number = number + 2) {
        console.log(number);
    }

    let result = 1;
    for (let counter = 0; counter < 10; counter = counter + 1) {
        result = result * 2;
    }
    console.log(result);
}

/* Breaking Out of a Loop */

function break_loop() {
    for (let current = 20; ; current = current + 1) {
        if (current % 7 == 0) {
            console.log(current);
            break;
        }
    }
}

/* Updating Bindings Succinctly */

function updating_bindings() {
    let counter;

    counter = counter + 1;
    counter += 1;

    for (let number = 0; number <= 12; number += 2) {
        console.log(number);
    }
}

/* Dispatching on a Value with switch */

function dispatching_with_switch() {
    if (x == "value1") action();
    else if (x == "value2") action2();
    else if (x == "value3") action3();
    else defaultAction();

    switch(prompt("What is the weather like?")) {
        case "rainy":
            console.log("Remember to bring an umbrella.");
            break;
        case "sunny":
            console.log("Dress lightly.");
        case "cloudy":
            console.log("Go outside.");
            break;
        default:
            console.log("Unknown weather type!");
            break;
    }
}

/* Capitalization */

function capitalization() {
    let fuzzylittleturtle = 1;
    let fuzzy_little_turtle = 1;
    let FuzzyLittleTurtle = 1;
    let fuzzyLittleTutle = 1;
}

/* Comments */

function comments() {
    let accountBalance = calculateBalance(account);
    // It's a green hollow where a river sings
    accountBalance.adjust();
    // Madly catching white tatters in the grass.
    let report = new Report();
    // Where the sun on the proud mountain rings:
    addToReport(accountBalance, report);
    // It's a little valley, foaming like light in a glass.

    /*
     * I first found this number scrawled on the back of
     * an old notebook. Since then, it has often dropped by,
     * showing up in phone numbers and the serial numbers of
     * products that I've bought. It obviously likes me, So I've
     * decided to keep it.
     */
    const myNumber = 11213;
}

// bindings();
// functions();
// control_flow();
// conditional_execution();
// while_do_loops();
// indenting_code();
// for_loops();
break_loop();

