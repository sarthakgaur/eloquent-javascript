/* Bean Counting */

function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") count++;
    }
    return count;
}

console.log(countBs("BBBAACCDDBBB"));

function countChar(str, chr) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === chr) count++;
    }
    return count;
}

function countBs2(str) {
    return countChar(str, "B");
}

console.log(countBs2("BBBAACCDDBBB"));
console.log(countBs2("BBBAABCDDBBB"));
console.log(countBs2("CCCAABCDDBBB"));

