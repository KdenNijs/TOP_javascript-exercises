const removeFromArray = function(array, ...args) {
    return array.filter(value => !args.includes(value));
}

// const removeFromArray = function() {
//     const args = Array.from(arguments);
//     console.log(args);
    
//     let array = args[0];

//     for (value of args.slice(1)) {
//         if (array.includes(value)) {
//             array.splice(array.indexOf(value), 1);
//         }
//     }

//     console.log(array);
//     return array

//     // for (let i = 1; i < arguments.length; i++) {
//     //     let value = arguments[i]
//     //     // array.splice(array.indexOf(number), 1);
//     //     if (array.includes(value)) {
//     //         array.splice(array.indexOf(value), 1);
//     //     }
//     // }
//     // return array
// }

module.exports = removeFromArray;
