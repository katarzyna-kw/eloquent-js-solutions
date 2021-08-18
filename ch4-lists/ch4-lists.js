
const arrayToList = (arr) => {
    let list=null;
    //iterate over array backwards
    //for each el, add an object to the list
    for (let i=arr.length-1; i>=0; i--) {
        list = {value: arr[i], rest: list}
    }
    return list
}

const listToArray = (list) => {
    let arr=[]
    for (let node=list; node; node=node.rest) {
        arr.push(node.value)
    }
    return arr
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));

//helper function that takes a value and a list and creates a new list with argument value at front of list
const prepend = (value, list) => {
    return {value, rest: list}
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//takes a list and a number; returns element at given position or undefined
const nth = (list, n) => {
    if (!list) return undefined;
    else if (n==0) return list.value;
    else return nth(list.rest, n-1)
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20