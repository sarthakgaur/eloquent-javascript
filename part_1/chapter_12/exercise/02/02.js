/* Closure */

/*
 *return function () {
 *  if (arguments.length != params.length) {
 *    throw new TypeError("Wrong number of arguments");
 *  }
 *  let localScope = Object.create(scope);
 *  for (let i = 0; i < arguments.length; i++) {
 *    localScope[params[i]] = arguments[i];
 *  }
 *  return evaluate(body, localScope);
 *};
 *
 * We evaluate the body of the function using the local scope.
 * If the body of the function includes another function, the
 * nested function will have access to the variables declared
 * in the enclosing scope. This mechanism will allow the defining
 * closures.
 * 
 */
