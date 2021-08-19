//original loop version
const every = (array, test) => {
    let newArray=[]
    for (let element of array) {
        if (test(element)) newArray.push(element)
    }
    if (array.length===newArray.length) return true
    else return false
}

//refactored loop version
const everyRefactor = (array, test) => {
    for (let element of array) {
        if (!test(element)) return false
    }
    return true
}

//some method version
const everySome = (array, test) => {
    return !array.some(element => !test(element))    
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true