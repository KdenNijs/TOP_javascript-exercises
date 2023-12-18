const repeatString = function(string, times) {
    if (times < 0) return 'ERROR'
    
    let string2 = '';

    for (; times; times--) {
        string2 += string;
    }

    return string2;
};

// Do not edit below this line
module.exports = repeatString;
