const palindromes = function(str) {
    str = str.replace(/\W|_/g, '').toLowerCase();
    let strReverse = str.split("").reverse().join("");
    return str === strReverse;
};

// Do not edit below this line
module.exports = palindromes;
