/* Strict Mode */

function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

function noNew() {
  function Person(name) { this.name = name; };
  let ferdinand = Person("Ferdinand");
  console.log(name);
}

function noNew2() {
  "use strict";
  function Person(name) { this.name = name; }
  let ferdinand = Person("Ferdinand");
}

/* Types */

// (VillageState, Array) -> {direction: string, memory: Array}
function goalOrientedRobot(state, memory) { }

/* Testing */

function testing() {
  function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
  }

  test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
  });
  test("convert Greek text to uppercase", () => {
    return " Χαίρετε ".toUpperCase() == " ΧΑΊΡΕΤΕ ";
  });
  test("don't convert case-less characters", () => {
    return "你好".toUpperCase() == "你好";
  });
}

/* Debugging */

function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base; // Should be n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}

/* Error Propagation */

function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}

function lastElement(array) {
  if (array.length == 0) {
    return { failed: true };
  } else {
    return { element: array[array.length - 1] };
  }
}

/* Exceptions */

function exceptions() {
  function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
  }

  function look() {
    if (promptDirection("Which way?") == "L") {
      return "a house";
    } else {
      return "two angry bears";
    }
  }

  try {
    console.log("You see", look());
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
}

/* Cleaning Up After Exceptions */

function cleaningUp() {
  const accounts = {
    a: 100,
    b: 0,
    c: 20
  };

  function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
      throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
  }

  function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
  }

  function transfer2(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
      accounts[form] -= amount;
      progress = 1;
      accounts[getAccount()] += amount;
      progress = 2;
    } finally {
      if (progress == 1) {
        accounts[from] += amount;
      }
    }
  }
}

/* Selective Catching */

function selectiveCatching() {
  for (;;) {
    try {
      let dir = promtDirection("Where?"); // Wrong name
      console.log("You chose ", dir);
      break;
    } catch (e) {
      console.log("Not a valid direction. Try again.");
    }
  }

  class InputError extends Error {}

  function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
  }

  for (;;) {
    try {
      let dir = promptDirection("Where?");
      console.log("You chose ", dir);
      break;
    } catch (e) {
      if (e instanceof InputError) {
        console.log("Not a valid direction. Try again.");
      } else {
        throw e;
      }
    }
  }
}

/* Assertions */

function assertions() {
  function firstElement(array) {
    if (array.length == 0) {
      throw new Error("firstElement called with []");
    }
    return array[0];
  }
}

// canYouSpotTheProblem();
// noNew();
// noNew2();
exceptions();
