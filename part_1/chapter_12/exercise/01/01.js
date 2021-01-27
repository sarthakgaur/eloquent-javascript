/* Arrays */

topScope.array = function() {
  let array = [];
  for (let i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }
  return array;
};

topScope.length = (array) => {
  return array.length;
};

topScope.element = (array, n) => {
  return array[n];
};
