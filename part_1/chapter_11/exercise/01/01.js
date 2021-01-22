/* Tracking the Scalpel */

async function locateScalpel(nest) {
  let current = nest.name;
  let next = await storage(nest, "scalpel");
  while (true) {
    if (current === next) {
      return current;
    }
    current = next;
    next = await anyStorage(nest, next, "scalpel");
  }
}

function locateScalpel(nest) {
  return new Promise((resolve, reject) => {
    let current = nest.name;

    function locator(current, next) {
      if (current === next) {
        resolve(current);
      } else {
        let current = next;
        anyStorage(nest, next, "scalpel")
          .then(next => {
            locator(current, next);
          });
      }
    }

    storage(nest, "scalpel")
      .then(next => {
        locator(nest.name, next);
      });
  });
}
