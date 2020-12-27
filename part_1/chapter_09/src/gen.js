/* Creating a Regular Expression */

function creatingRegex() {
  let re1 = new RegExp("abc");
  let re2 = /abc/;
  let eighteenPlus = /eighteen\+/;
}

/* Testing for Matches */

function testingForMatches() {
  console.log(/abc/.test("abcde"));
  console.log(/abc/.test("abxde"));
}

/* Sets of Characters */

function characterSets() {
  console.log(/[0123456789]/.test("in 1992"));
  console.log(/[0-9]/.test("in 1992"));

  let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
  console.log(dateTime.test("01-30-2003 15:20"));
  console.log(dateTime.test("30-jan-2003 15:20"));

  let notBinary = /[^01]/;
  console.log(notBinary.test("1100100010100110"))
  console.log(notBinary.test("1100100010200110"))
}

/* Repeating parts of a Pattern */

function repeatingPattern() {
  console.log(/'\d+'/.test("'123'"));
  console.log(/'\d+'/.test("''"));
  console.log(/'\d*'/.test("'123'"));
  console.log(/'\d*'/.test("''"));

  let neighbor = /neighbou?r/;
  console.log(neighbor.test("neighbour"));
  console.log(neighbor.test("neighbor"));

  let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
  console.log(dateTime.test("1-30-2003 8:45"));
}

/* Grouping Subexpressions */

function groupingSubexpressions() {
  let cartoonCrying = /boo+(hoo+)+/i;
  console.log(cartoonCrying.test("Boohoooohoohooo"));
}

/* Matches and Groups */

function matchesAndGroups() {
  let match = /\d+/.exec("one two 100");
  console.log(match);
  console.log(match.index);

  console.log("one two 100".match(/\d+/));

  let quotedText = /'([^']*)'/;
  console.log(quotedText.exec("she said 'hello'"));

  console.log(/bad(ly)?/.exec("bad"));
  console.log(/(\d)+/.exec("123"));
}

/* The Date Class */

function dateClass() {
  console.log(new Date());

  console.log(new Date(2009, 11, 9));
  console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

  console.log(new Date(2013, 11, 19).getTime());
  console.log(new Date(1387407600000));

  function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
  }

  console.log(getDate("1-30-2003"));
}

/* Word and String Boundaries */

function wordStringBoundaries() {
  console.log(/cat/.test("concatenate"));
  console.log(/\bcat\b/.test("concatenate"));
}

/* Choice Patterns */

function choicePatterns() {
  let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
  console.log(animalCount.test("15 pigs"));
  console.log(animalCount.test("15 pigchickens"));
}

/* The replace Method */

function replaceMethod() {
  console.log("papa".replace("p", "m"));

  console.log("Borobudur".replace(/[ou]/, "a"));
  console.log("Borobudur".replace(/[ou]/g, "a"));

  console.log(
    "Liskov, barbara\nMcCarthy, John\nWadler, Philip"
      .replace(/(\w+), (\w+)/g, "$2 $1"));

  let s = "the cia and fbi";
  console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

  let stock = "1 lemon, 2 cabbages, and 101 eggs";

  function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) {
      unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
      amount = "no";
    }
    return amount + " " + unit;
  }
  console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
}

/* Greed */

function greed() {
  function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
  }

  console.log(stripComments("1 + /* 2 */ 3"));
  console.log(stripComments("x = 10; // ten!"));
  console.log(stripComments("1 /* a */ + /* b */ 1"));
}

/* Dynamically Creating RegExp Objects */

function dynamicallyCreating() {
  let name = "harry";
  let text = "Harry is a suspicious character.";
  let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
  console.log(text.replace(regexp, "_$1_"));

  name = "dea+hl[]rd";
  text = "This dea+hl[]rd guy is super annoying.";
  let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
  regexp = new RegExp("\\b" + escaped + "\\b", "gi");
  console.log(text.replace(regexp, "_$&_"));
}

/* The search Method */

function searchMethod() {
  console.log("  word".search(/\S/));
  console.log("    ".search(/\S/));
}

/* The lastIndex Property */

function lastIndexProperty() {
  let pattern = /y/g;
  pattern.lastIndex = 3;
  let match = pattern.exec("xyzzy");
  console.log(match.index);
  console.log(pattern.lastIndex);

  let global = /abc/g;
  console.log(global.exec("xyz abc"));
  let sticky = /abc/y;
  console.log(sticky.exec("abc abc"));

  let digit = /\d/g;
  console.log(digit.exec("here it is: 1"));
  console.log(digit.exec("and now: 1"));

  console.log("Banana".match(/an/g));
}

/* Looping Over Matches */

function loopingOverMatches() {
  let input = "A string with 3 numbers in it... 42 and 88.";
  let number = /\b\d+\b/g;
  let match;
  while (match = number.exec(input)) {
    console.log("Found", match[0], "at", match.index);
  }
}

/* Parsing an INI File */

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach(line => {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}

function parseINITest() {
  console.log(parseINI(`
name=Vasilis
[address]
city=Tessaliniki`));
}

// testingForMatches();
// characterSets();
// repeatingPattern();
// groupingSubexpressions();
// dateClass();
// wordStringBoundaries();
// choicePatterns()
// replaceMethod();
// greed();
// dynamicallyCreating();
// searchMethod();
// lastIndexProperty();
// loopingOverMatches();
parseINITest();
