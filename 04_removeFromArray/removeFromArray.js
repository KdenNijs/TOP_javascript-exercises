const removeFromArray = function() {
    let array = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        let value = arguments[i]
        // array.splice(array.indexOf(number), 1);
        if (array.includes(value)) {
            array.splice(array.indexOf(value), 1);
        }
    }
    return array
}

module.exports = removeFromArray;
