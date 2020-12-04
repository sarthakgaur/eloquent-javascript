/* Defining a Function */

function definingFunction() {
    const square = function(x) {
        return x * x;
    };

    const makeNoise = function() {
        console.log("Pling!");
    };

    const power = function(base, exponent) {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    };

    console.log(square(12));
    makeNoise();
    console.log(power(2, 10));
}

/* Bindings and Scopes */

function bindingsScopes() {
    let x = 10;
    if (true) {
        let y = 20;
        var z = 30;
        console.log(x + y + z);
        // 60
    }
    // y is not visible here
    console.log(x + z);
    // 40

    const halve = function(n) {
        return n / 2;
    };

    let n = 10;
    console.log(halve(100));
    // 50
    console.log(n);
    // 10
}

/* Nested Scope */

function nestedScope() {
    const hummus = function(factor) {
        const ingredient = function(amount, unit, name) {
            let ingredientAmount = amount * factor;
            if (ingredientAmount > 1) {
                unit += "s";
            }
            console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(1, "can", "chickpeas");
        ingredient(0.25, "cup", "tahini");
        ingredient(0.25, "cup", "lemon juice");
        ingredient(1, "clove", "garlic");
        ingredient(2, "tablespoon", "olive oil");
        ingredient(0.5, "teaspoon", "cumin");
    };
    hummus(2);
}

/* Functions as Values */

function functionsValues() {
    let launchMissiles = function() {
        missileSystem.launch("now");
    };
    if (safeMode) {
        launchMissiles = function() {/* do nothing */};
    }
}

/* Declaration Notation */

function declarationNotation() {
    function square(x) {
        return x * x;
    }

    console.log("The future says:", future());

    function future() {
        return "You'll never have flying cars";
    }
}

/* Arrow Functions */

function arrowFunction() {
    const power = (base, exponent) => {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    };

    const square1 = (x) => { return x * x; };
    const square2 = x => x * x;

    const horn = () => {
        console.log("Toot");
    };
}

/* The Call Stack */

function callStack() {
    function chicken() {
        return egg();
    }
    function egg() {
        return chicken();
    }
    console.log(chicken() + " came first.");
}

/* Optional Arguments */

function optionalArguments() {
    function square(x) { return x * x; }
    console.log(square(4, true, "hedgehog"));

    function minus(a, b) {
        if (b === undefined) return -a;
        else return a - b;
    }

    console.log(minus(10));
    console.log(minus(10, 5));

    function power(base, exponent = 2) {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    }

    console.log(power(4));
    console.log(power(2, 6));

    console.log("C", "O", 2);
}

/* Closure */

function closure() {
    function wrapValue(n) {
        let local = n;
        return () => local;
    }

    let wrap1 = wrapValue(1);
    let wrap2 = wrapValue(2);
    console.log(wrap1());
    console.log(wrap2());

    function multiplier(factor) {
        return number => number * factor;
    }

    let twice = multiplier(2);
    console.log(twice(5));
}

/* Recursion */

function recursion() {
    function power(base, exponent) {
        if (exponent == 0) {
            return 1;
        } else {
            return base * power(base, exponent - 1);
        }
    }

    console.log(power(2, 3));

    function findSolution(target) {
        function find(current, history) {
            if (current == target) {
                return history;
            } else if (current > target) {
                return null;
            } else {
                return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
            }
        }
        return find(1, "1");
    }

    console.log(findSolution(24));
}

/* Growing Functions */

function growingFunctions() {
    function printFarmInventory(cows, chickens) {
        let cowString = String(cows);
        while (cowString.length < 3) {
            cowString = "0" + cowString;
        }
        console.log(`${cowString} Cows`);
        let chickenString = String(chickens);
        while (chickenString.length < 3) {
            chickenString = "0" + chickenString;
        }
        console.log(`${chickenString} chickens`);
    }
    printFarmInventory(7, 11);

    function printZeroPaddedWithLabel(number, label) {
        let numberString = String(number);
        while (numberString.length < 3) {
            numberString = "0" + numberString;
        }
        console.log(`${numberString} ${label}`);
    }

    function printFarmInventory(cows, chickens, pigs) {
        printZeroPaddedWithLabel(cows, "Cows");
        printZeroPaddedWithLabel(chickens, "Chickens");
        printZeroPaddedWithLabel(pigs, "Pigs");
    }

    printFarmInventory(7, 11, 3);

    function zeroPad(number, width) {
        let string = String(number);
        while (string.length < width) {
            string = "0" + string;
        }
        return string;
    }

    function printFarmInventory(cows, chickens, pigs) {
        console.log(`${zeroPad(cows, 3)} Cows`);
        console.log(`${zeroPad(chickens, 3)} Chickens`);
        console.log(`${zeroPad(pigs, 3)} Pigs`);
    }

    printFarmInventory(7, 16, 3);
}

// definingFunction();
// bindingsScopes();
// nestedScope();
// declarationNotation();
// optionalArguments();
// closure();
recursion();

