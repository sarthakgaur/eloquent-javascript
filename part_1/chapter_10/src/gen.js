/* Improvised Modules */

function improvisedModules() {
  const weekDay = function () {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"];

    return {
      name(number) { return names[number]; },
      number(name) { return names.indexOf(name); }
    }
  }();

  console.log(weekDay.name(weekDay.number("Sunday")));
}

/* Evaluating Data as Code */

function evaluatingData() {
  const x = 1;
  function evalAndReturnX(code) {
    eval(code);
    return x;
  }

  console.log(evalAndReturnX("var x = 2"));
  console.log(x);

  let plusOne = Function("n", "return n + 1;");
  console.log(plusOne(4));
}

/* CommonJS */

function CommonJS() {
  const ordinal = require("ordinal");
  const { days, months } = require("date-names");

  exports.formatDate = function (date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
      if (tag == "YYYY") return date.getFullYear();
      if (tag == "M") return date.getMonth();
      if (tag == "MMMM") return months[date.getMonth()];
      if (tag == "D") return date.getDate();
      if (tag == "Do") return ordinal(date.getDate());
      if (tag == "dddd") return days[date.getDate()];
    });
  };

  const { formatDate } = require("./format-date");

  console.log(formatDate(new Date(2019, 8, 13), "dddd the Do"));

  require.cache = Object.create(null);

  function require(name) {
    if (!(name in require.cache)) {
      let code = readFile(name);
      let module = { exports: {} };
      require.cache[name] = module;
      let wrapper = Function("require, exports, module", code);
      wrapper(require, module.exports, module);
    }
    return require.cache[name].exports;
  }

  const { parse } = require("ini");

  console.log(parse("x = 10\ny = 20"));
}

/* ECMAScript Modules */

function ECMAScriptModules() {
  import ordinal from "ordinal";
  import { days, months } from "date-names";

  export function formatDate(date, format) { /* ... */ }

  export default ["Winter", "Spring", "Summer", "Autumn"];

  import { days as dayNames } from "date-names";

  console.log(dayNames.length);
}

/* Module Design */

function moduleDesign() {
  const { find_path } = require("dijkstrajs");

  let graph = {};
  for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    for (let dest of roadGraph[node]) {
      edges[dest] = 1;
    }
  }

  console.log(find_path(graph, "Post Office", "Cabin"));
}

// improvisedModules();
evaluatingData();
