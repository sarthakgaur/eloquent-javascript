/* Retry */

class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(num1, num2) {
  let randNum = Math.floor(Math.random() * 5);
  if (randNum === 0) {
    return num1 * num2;
  }
  throw new MultiplicatorUnitFailure("Multiplication failed.");
}

function multiply(num1, num2) {
  while (true) {
    try {
      return primitiveMultiply(num1, num2)
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log(e.message);
      } else {
        throw e;
      }
    }
  }
}

console.log(multiply(2, 3));
