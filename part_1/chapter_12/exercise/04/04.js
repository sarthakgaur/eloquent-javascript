/* Fixing Scope */

specialForms.set = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of set");
  }
  let name = args[0].name;
  let value = evaluate(args[1], scope);
  while (true) {
    if (Object.prototype.hasOwnProperty.call(scope, name)) {
      scope[name] = value;
      return value;
    } else {
      scope = Object.getPrototypeOf(scope);
      if (!scope) {
        throw new ReferenceError(`${name} is not defined`);
      }
    }
  }
};
