let arrays = [[1, 2, 3], [4, 5], [6]];
let arr2 = [['a', 'b'],['cat', 'dog'], [true]];

const reducer = (previous, current) => previous.concat(current)

console.log(arrays.reduce((previous, current) => previous.concat(current), [] ));

console.log(arrays.reduce(reducer));

// console.log(arr2.reduce((previous, current) => previous.concat(current), []));


//using flat method

console.log(arrays.flat());
console.log(arr2.flat());


//deeply nested cases
const flattening = (arr) => {
   return arr.reduce((arr, current) => arr.concat(Array.isArray(current) ? flattening(current) : current), [])
}

console.log(flattening([1, [2], [3, [[4]]]]));