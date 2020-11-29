// Numbers
console.log(13);
console.log(9.81); // Factional numbers
console.log(2.998e8); // Scientific notation

// Arithmetic
console.log(100 + 4 * 11);
console.log((100 + 4) * 11);

// Strings
console.log(`Down on the sea`); // Template literals
console.log("Lie on the ocean");
console.log('Float on the ocean');
console.log("This is the first line\nAnd this is the second"); // Escaping newline
console.log("A newline character is written like \"\\n\"."); // Escaping quotes and backslash
console.log("con" + "cat" "e" + "nate"); // concatenate
console.log(`half of 100 is ${100 / 2}`); // Embeding values 

// Unary Operators
console.log(typeof 4.5);
console.log(typeof "x");
console.log(- (10 - 2)); // Minus is binary and unary

// Boolean Values
// Comparison
console.log(3 > 2);
console.log(3 < 2);
console.log("Aardvark" < "Zoroaster"); // Compares Unicode codes
console.log("Itchy" != "Scratchy");
console.log("Apple" == "Orange");
console.log(NaN == NaN);

// Logical Operators
console.log(true && false);
console.log(true && true);
console.log(false || true);
console.log(false || false);
console.log(1 + 1 == 2 && 10 * 10 > 50);
console.log(true ? 1 : 2); // Ternary operator
console.log(false ? 1 : 2);

// Empty Values
console.log(null);
console.log(undefined);

// Automatic Type Conversion
console.log(8 * null); // -> 0, null becomes 0
console.log("5" - 1); // -> 4, String is converted to a number
console.log("5" + 1); // -> "51", Number is converted to a string and gets concatenated.
console.log("five" * 2); // NaN, "five" is converted to NaN. Any operation on NaN results in NaN.
console.log(false == 0); // true
console.log(null == undefined); // true
console.log(null == 0); // false

// Short-Circuiting of Logical Operators
console.log(null || "user"); // "user"
console.log("Agnes" || "user"); // "Agnes"

