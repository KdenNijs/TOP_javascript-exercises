const fibonacci = function(id) {
    id = Number(id);
    if (id === 0) return 0;
    if (id < 0 || isNaN(id)) return "OOPS";
    
    let i;
    let fib = [1, 1];
    for (i = 2; i <= id - 1; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib);
    return fib[id - 1];
};

// Do not edit below this line
module.exports = fibonacci;
