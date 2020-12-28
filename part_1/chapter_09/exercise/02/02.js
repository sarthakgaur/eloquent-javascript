/* Quoting Style */

let regexp = /(\s|^)'(.*?[,.])'/g;
let replacement = '$1"$2"';
