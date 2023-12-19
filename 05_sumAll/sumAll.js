const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0 || typeof int1 != 'number' || typeof int2 != 'number') return 'ERROR'
    let start = Math.min(int1, int2);
    let end = Math.max(int1, int2);

    let summed = 0;
    for (; start <= end; start++) {
        summed += start;
    }

    return summed
}

// const sumAll = function(int1, int2) {
//     let array = Array.from({length: (int2 + 1 - int1)}, (x, i) => i + int1);
//     console.log(array);
//     let summed = array.reduce((partialSum, num) => partialSum + num,0);
//     console.log(summed);

//     return summed
// };

// Do not edit below this line
module.exports = sumAll;
