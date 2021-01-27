/* Comments */

function skipSpace(string) {
  let first = string.search(/\S/);
  if (first == -1) return "";
  string = string.slice(first);
  if (string[0] == "#") {
    first = string.search('\n');
    return skipSpace(string.slice(first + 1));
  } else {
    return string;
  }
}
