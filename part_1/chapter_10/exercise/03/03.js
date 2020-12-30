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

/*
 * 1. This function supports cycles as it will simply fetch the module from the cache.
 * It won't try to load the module again.
 *
 * 2. If the default exports object is replaced, it won't refer to the exports object
 * in the cache. This will cause an inconsistent state. The module importing this module
 * will get the exports from the cache, not what the module is currently exporting.
 */
