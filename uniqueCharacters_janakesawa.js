/* logic test */

function hasUniqueCharacters(string) {
    for (let x = 0; x < string.length; x++) {
        if (string.indexOf(string[x]) !== string.lastIndexOf(string[x])) {
            return false;
        }
    }
    return true;
}

// console.log(hasUniqueCharacters("abcdefg"));
// console.log(hasUniqueCharacters("hello"));
// console.log(hasUniqueCharacters("zettabyte"));
// console.log(hasUniqueCharacters("github"));